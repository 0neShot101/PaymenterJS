/**
 * HTTP client configuration and types
 */

/**
 * Configuration options for the Paymenter Client
 */
export interface PaymenterClientConfig {
  /** The base URL of your Paymenter instance (e.g., "https://example.com/api") */
  readonly baseUrl: string;
  /** Your API bearer token */
  readonly apiKey: string;
  /** Request timeout in milliseconds (optional) */
  readonly timeout?: number;
}

/**
 * HTTP method types
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

/**
 * Options for making an HTTP request
 */
export interface RequestOptions {
  /** HTTP method */
  readonly method: HttpMethod;
  /** Request path relative to base URL */
  readonly path: string;
  /** Request body data */
  readonly body?: unknown;
  /** Query parameters */
  readonly queryParams?:
    | Record<string, string | number | boolean | readonly (string | number | boolean)[] | null | undefined>
    | undefined;
  /** Custom headers */
  readonly headers?: Record<string, string> | undefined;
}

/**
 * Standard API response wrapper
 * @template T - The type of the response data
 */
export interface ApiResponse<T> {
  /** The response body data */
  readonly data: T;
  /** HTTP status code */
  readonly status: number;
  /** Response headers */
  readonly headers: Record<string, string>;
}
