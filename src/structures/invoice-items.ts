/**
 * Invoice Items API client
 */

import type { ApiResponse } from '@typings/client';
import type {
  CreateInvoiceItemRequest,
  InvoiceItemListParams,
  InvoiceItemListResponse,
  InvoiceItemResponse,
  UpdateInvoiceItemRequest,
} from '@typings/invoice-items';
import type { HttpClient } from '@utils/http-client';

export class InvoiceItemsClient {
  private readonly client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * List all invoice items
   * @param params - Query parameters for filtering, sorting, and pagination
   */
  public list = async (params?: InvoiceItemListParams): Promise<ApiResponse<InvoiceItemListResponse>> =>
    this.client.request<InvoiceItemListResponse>({
      'method': 'GET',
      'path': '/v1/admin/invoice-items',
      'queryParams': params as Record<string, string | number | boolean>,
    });

  /**
   * Get a specific invoice item by ID
   * @param invoiceItemId - The invoice item ID
   * @param include - Optional relationships to include
   */
  public get = async (invoiceItemId: number, include?: string): Promise<ApiResponse<InvoiceItemResponse>> =>
    this.client.request<InvoiceItemResponse>({
      'method': 'GET',
      'path': `/v1/admin/invoice-items/${invoiceItemId}`,
      'queryParams': include !== undefined ? { include } : undefined,
    });

  /**
   * Create a new invoice item
   * @param data - The invoice item data
   */
  public create = async (data: CreateInvoiceItemRequest): Promise<ApiResponse<InvoiceItemResponse>> =>
    this.client.request<InvoiceItemResponse>({
      'method': 'POST',
      'path': '/v1/admin/invoice-items',
      'body': data,
    });

  /**
   * Update an existing invoice item
   * @param invoiceItemId - The invoice item ID
   * @param data - The update data
   */
  public update = async (
    invoiceItemId: number,
    data: UpdateInvoiceItemRequest,
  ): Promise<ApiResponse<InvoiceItemResponse>> =>
    this.client.request<InvoiceItemResponse>({
      'method': 'PUT',
      'path': `/v1/admin/invoice-items/${invoiceItemId}`,
      'body': data,
    });

  /**
   * Delete an invoice item
   * @param invoiceItemId - The invoice item ID
   */
  public delete = async (invoiceItemId: number): Promise<ApiResponse<void>> =>
    this.client.request<void>({
      'method': 'DELETE',
      'path': `/v1/admin/invoice-items/${invoiceItemId}`,
    });
}
