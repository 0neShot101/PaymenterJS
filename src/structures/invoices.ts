/**
 * Invoices API client
 */

import type { ApiResponse } from '@typings/client';
import type {
  CreateInvoiceRequest,
  InvoiceListParams,
  InvoiceListResponse,
  InvoiceResponse,
  UpdateInvoiceRequest,
} from '@typings/invoices';
import type { HttpClient } from '@utils/http-client';

export class InvoicesClient {
  private readonly client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * List all invoices
   * @param params - Query parameters for filtering, sorting, and pagination
   */
  public list = async (params?: InvoiceListParams): Promise<ApiResponse<InvoiceListResponse>> =>
    this.client.request<InvoiceListResponse>({
      'method': 'GET',
      'path': '/v1/admin/invoices',
      'queryParams': params as Record<string, string | number | boolean>,
    });

  /**
   * Get a specific invoice by ID
   * @param invoiceId - The invoice ID
   * @param include - Optional relationships to include
   */
  public get = async (invoiceId: number, include?: string): Promise<ApiResponse<InvoiceResponse>> =>
    this.client.request<InvoiceResponse>({
      'method': 'GET',
      'path': `/v1/admin/invoices/${invoiceId}`,
      'queryParams': include !== undefined ? { include } : undefined,
    });

  /**
   * Create a new invoice
   * @param data - The invoice data
   */
  public create = async (data: CreateInvoiceRequest): Promise<ApiResponse<InvoiceResponse>> =>
    this.client.request<InvoiceResponse>({
      'method': 'POST',
      'path': '/v1/admin/invoices',
      'body': data,
    });

  /**
   * Update an existing invoice
   * @param invoiceId - The invoice ID
   * @param data - The update data
   */
  public update = async (invoiceId: number, data: UpdateInvoiceRequest): Promise<ApiResponse<InvoiceResponse>> =>
    this.client.request<InvoiceResponse>({
      'method': 'PUT',
      'path': `/v1/admin/invoices/${invoiceId}`,
      'body': data,
    });

  /**
   * Delete an invoice
   * @param invoiceId - The invoice ID
   */
  public delete = async (invoiceId: number): Promise<ApiResponse<void>> =>
    this.client.request<void>({
      'method': 'DELETE',
      'path': `/v1/admin/invoices/${invoiceId}`,
    });
}
