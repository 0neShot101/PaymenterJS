/**
 * Affiliates API client
 */

import type {
  AffiliateListParams,
  AffiliateListResponse,
  AffiliateResponse,
  CreateAffiliateRequest,
  UpdateAffiliateRequest,
} from '@typings/affiliates';
import type { ApiResponse } from '@typings/client';
import type { HttpClient } from '@utils/http-client';

export class AffiliatesClient {
  private readonly client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * List all affiliates
   * @param params - Query parameters for filtering, sorting, and pagination
   */
  public list = async (params?: AffiliateListParams): Promise<ApiResponse<AffiliateListResponse>> =>
    this.client.request<AffiliateListResponse>({
      'method': 'GET',
      'path': '/v1/admin/affiliates',
      'queryParams': params as Record<string, string | number | boolean>,
    });

  /**
   * Get a specific affiliate by ID
   * @param affiliateId - The affiliate ID
   * @param include - Optional relationships to include
   */
  public get = async (affiliateId: number, include?: string): Promise<ApiResponse<AffiliateResponse>> =>
    this.client.request<AffiliateResponse>({
      'method': 'GET',
      'path': `/v1/admin/affiliates/${affiliateId}`,
      'queryParams': include !== undefined ? { include } : undefined,
    });

  /**
   * Create a new affiliate
   * @param data - The affiliate data
   */
  public create = async (data: CreateAffiliateRequest): Promise<ApiResponse<AffiliateResponse>> =>
    this.client.request<AffiliateResponse>({
      'method': 'POST',
      'path': '/v1/admin/affiliates',
      'body': data,
    });

  /**
   * Update an existing affiliate
   * @param affiliateId - The affiliate ID
   * @param data - The update data
   */
  public update = async (affiliateId: number, data: UpdateAffiliateRequest): Promise<ApiResponse<AffiliateResponse>> =>
    this.client.request<AffiliateResponse>({
      'method': 'PUT',
      'path': `/v1/admin/affiliates/${affiliateId}`,
      'body': data,
    });

  /**
   * Delete an affiliate
   * @param affiliateId - The affiliate ID
   */
  public delete = async (affiliateId: number): Promise<ApiResponse<void>> =>
    this.client.request<void>({
      'method': 'DELETE',
      'path': `/v1/admin/affiliates/${affiliateId}`,
    });
}
