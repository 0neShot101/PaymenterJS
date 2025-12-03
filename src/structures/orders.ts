/**
 * Orders API client
 */

import type { ApiResponse } from '@typings/client';
import type {
  CreateOrderRequest,
  OrderListParams,
  OrderListResponse,
  OrderResponse,
  UpdateOrderRequest,
} from '@typings/orders';
import type { HttpClient } from '@utils/http-client';

export class OrdersClient {
  private readonly client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * List all orders
   * @param params - Query parameters for filtering, sorting, and pagination
   */
  public list = async (params?: OrderListParams): Promise<ApiResponse<OrderListResponse>> =>
    this.client.request<OrderListResponse>({
      'method': 'GET',
      'path': '/v1/admin/orders',
      'queryParams': params as Record<string, string | number | boolean>,
    });

  /**
   * Get a specific order by ID
   * @param orderId - The order ID
   * @param include - Optional relationships to include
   */
  public get = async (orderId: number, include?: string): Promise<ApiResponse<OrderResponse>> =>
    this.client.request<OrderResponse>({
      'method': 'GET',
      'path': `/v1/admin/orders/${orderId}`,
      'queryParams': include !== undefined ? { include } : undefined,
    });

  /**
   * Create a new order
   * @param data - The order data
   */
  public create = async (data: CreateOrderRequest): Promise<ApiResponse<OrderResponse>> =>
    this.client.request<OrderResponse>({
      'method': 'POST',
      'path': '/v1/admin/orders',
      'body': data,
    });

  /**
   * Update an existing order
   * @param orderId - The order ID
   * @param data - The update data
   */
  public update = async (orderId: number, data: UpdateOrderRequest): Promise<ApiResponse<OrderResponse>> =>
    this.client.request<OrderResponse>({
      'method': 'PUT',
      'path': `/v1/admin/orders/${orderId}`,
      'body': data,
    });

  /**
   * Delete an order
   * @param orderId - The order ID
   */
  public delete = async (orderId: number): Promise<ApiResponse<void>> =>
    this.client.request<void>({
      'method': 'DELETE',
      'path': `/v1/admin/orders/${orderId}`,
    });
}
