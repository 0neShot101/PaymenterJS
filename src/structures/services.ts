/**
 * Services API client
 */

import type { ApiResponse } from '@typings/client';
import type {
  CreateServiceRequest,
  ServiceListParams,
  ServiceListResponse,
  ServiceResponse,
  UpdateServiceRequest,
} from '@typings/services';
import type { HttpClient } from '@utils/http-client';

export class ServicesClient {
  private readonly client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * List all services
   * @param params - Query parameters for filtering, sorting, and pagination
   */
  public list = async (params?: ServiceListParams): Promise<ApiResponse<ServiceListResponse>> =>
    this.client.request<ServiceListResponse>({
      'method': 'GET',
      'path': '/v1/admin/services',
      'queryParams': params as Record<string, string | number | boolean>,
    });

  /**
   * Get a specific service by ID
   * @param serviceId - The service ID
   * @param include - Optional relationships to include
   */
  public get = async (serviceId: number, include?: string): Promise<ApiResponse<ServiceResponse>> =>
    this.client.request<ServiceResponse>({
      'method': 'GET',
      'path': `/v1/admin/services/${serviceId}`,
      'queryParams': include !== undefined ? { include } : undefined,
    });

  /**
   * Create a new service
   * @param data - The service data
   */
  public create = async (data: CreateServiceRequest): Promise<ApiResponse<ServiceResponse>> =>
    this.client.request<ServiceResponse>({
      'method': 'POST',
      'path': '/v1/admin/services',
      'body': data,
    });

  /**
   * Update an existing service
   * @param serviceId - The service ID
   * @param data - The update data
   */
  public update = async (serviceId: number, data: UpdateServiceRequest): Promise<ApiResponse<ServiceResponse>> =>
    this.client.request<ServiceResponse>({
      'method': 'PUT',
      'path': `/v1/admin/services/${serviceId}`,
      'body': data,
    });

  /**
   * Delete a service
   * @param serviceId - The service ID
   */
  public delete = async (serviceId: number): Promise<ApiResponse<void>> =>
    this.client.request<void>({
      'method': 'DELETE',
      'path': `/v1/admin/services/${serviceId}`,
    });
}
