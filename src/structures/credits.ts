/**
 * Credits API client
 */

import type { ApiResponse } from '@typings/client';
import type {
  CreateCreditRequest,
  CreditListParams,
  CreditListResponse,
  CreditResponse,
  UpdateCreditRequest,
} from '@typings/credits';
import type { HttpClient } from '@utils/http-client';

export class CreditsClient {
  private readonly client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * List all credits
   * @param params - Query parameters for filtering, sorting, and pagination
   */
  public list = async (params?: CreditListParams): Promise<ApiResponse<CreditListResponse>> =>
    this.client.request<CreditListResponse>({
      'method': 'GET',
      'path': '/v1/admin/credits',
      'queryParams': params as Record<string, string | number | boolean>,
    });

  /**
   * Get a specific credit by ID
   * @param creditId - The credit ID
   * @param include - Optional relationships to include
   */
  public get = async (creditId: number, include?: string): Promise<ApiResponse<CreditResponse>> =>
    this.client.request<CreditResponse>({
      'method': 'GET',
      'path': `/v1/admin/credits/${creditId}`,
      'queryParams': include !== undefined ? { include } : undefined,
    });

  /**
   * Create a new credit
   * @param data - The credit data
   */
  public create = async (data: CreateCreditRequest): Promise<ApiResponse<CreditResponse>> =>
    this.client.request<CreditResponse>({
      'method': 'POST',
      'path': '/v1/admin/credits',
      'body': data,
    });

  /**
   * Update an existing credit
   * @param creditId - The credit ID
   * @param data - The update data
   */
  public update = async (creditId: number, data: UpdateCreditRequest): Promise<ApiResponse<CreditResponse>> =>
    this.client.request<CreditResponse>({
      'method': 'PUT',
      'path': `/v1/admin/credits/${creditId}`,
      'body': data,
    });

  /**
   * Delete a credit
   * @param creditId - The credit ID
   */
  public delete = async (creditId: number): Promise<ApiResponse<void>> =>
    this.client.request<void>({
      'method': 'DELETE',
      'path': `/v1/admin/credits/${creditId}`,
    });
}
