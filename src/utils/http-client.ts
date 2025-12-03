/**
 * HTTP client for Paymenter API
 */

import {
  PaymenterAuthenticationError,
  PaymenterAuthorizationError,
  PaymenterError,
  PaymenterNetworkError,
  PaymenterNotFoundError,
  PaymenterValidationError,
} from './errors';
import { isProblemDetails, isValidationProblemDetails } from './type-guards';

import type { ApiResponse, PaymenterClientConfig, RequestOptions } from '@typings/client';

export class HttpClient {
  private readonly config: PaymenterClientConfig;

  constructor(config: PaymenterClientConfig) {
    this.config = config;
  }

  private buildUrl = (path: string, queryParams?: RequestOptions['queryParams']): string => {
    const baseUrl = this.config.baseUrl.endsWith('/') ? this.config.baseUrl.slice(0, -1) : this.config.baseUrl;
    const url = new URL(path, baseUrl);

    if (queryParams === undefined) return url.toString();

    Object.entries(queryParams).forEach(([key, value]) => {
      if (value === null || value === undefined) return;

      if (Array.isArray(value)) {
        value.forEach(item => {
          if (item !== null && item !== undefined) url.searchParams.append(key, String(item));
        });
        return;
      }

      url.searchParams.append(key, String(value));
    });

    return url.toString();
  };

  private buildHeaders = (customHeaders?: Record<string, string>): Record<string, string> => {
    const defaultHeaders: Record<string, string> = {
      'Authorization': `Bearer ${this.config.apiKey}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.api+json',
    };

    return {
      ...defaultHeaders,
      ...customHeaders,
    };
  };

  private handleError = async (response: Response): Promise<never> => {
    const contentType = response.headers.get('content-type');
    const isJson =
      contentType?.includes('application/json') === true || contentType?.includes('application/vnd.api+json') === true;

    let errorData: unknown;

    if (isJson === true) {
      try {
        errorData = await response.json();
      } catch {
        errorData = null;
      }
    }

    const errorMessage = response.statusText.length > 0 ? response.statusText : 'Unknown error';

    if (response.status === 401) {
      throw new PaymenterAuthenticationError(
        errorMessage,
        response.status,
        isProblemDetails(errorData) ? errorData : undefined,
      );
    }

    if (response.status === 403) {
      throw new PaymenterAuthorizationError(
        errorMessage,
        response.status,
        isProblemDetails(errorData) ? errorData : undefined,
      );
    }

    if (response.status === 404) {
      throw new PaymenterNotFoundError(
        errorMessage,
        response.status,
        isProblemDetails(errorData) ? errorData : undefined,
      );
    }

    if (response.status === 422 || response.status === 400) {
      if (isValidationProblemDetails(errorData)) {
        throw new PaymenterValidationError(errorData.message || errorMessage, response.status, errorData);
      }
    }

    if (isProblemDetails(errorData)) {
      throw new PaymenterError(errorData.message || errorMessage, response.status, errorData);
    }

    throw new PaymenterError(errorMessage, response.status);
  };

  /**
   * Make an HTTP request to the Paymenter API
   */
  public request = async <T>(options: RequestOptions): Promise<ApiResponse<T>> => {
    const url = this.buildUrl(options.path, options.queryParams);
    const headers = this.buildHeaders(options.headers);

    const signal = this.config.timeout !== undefined ? AbortSignal.timeout(this.config.timeout) : null;

    const fetchOptions: globalThis.RequestInit = {
      'method': options.method,
      headers,
      ...(signal !== null && { signal }),
    };

    if (options.body !== undefined && options.method !== 'GET') {
      fetchOptions.body = JSON.stringify(options.body);
    }

    try {
      const response = await fetch(url, fetchOptions);

      if (response.ok === false) await this.handleError(response);

      const contentType = response.headers.get('content-type');
      const isJson =
        contentType?.includes('application/json') === true ||
        contentType?.includes('application/vnd.api+json') === true;

      let data: T;

      if (response.status === 204 || isJson === false) {
        data = null as T;
      } else {
        const jsonData = await response.json();
        data = jsonData as T;
      }

      const responseHeaders: Record<string, string> = {};
      response.headers.forEach((value, key) => {
        responseHeaders[key] = value;
      });

      return {
        data,
        'status': response.status,
        'headers': responseHeaders,
      };
    } catch (error) {
      if (error instanceof PaymenterError) throw error;

      if (error instanceof Error) {
        throw new PaymenterNetworkError(`Network error: ${error.message}`, error);
      }

      throw new PaymenterNetworkError('Unknown network error');
    }
  };
}
