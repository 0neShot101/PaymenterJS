/**
 * Ticket Messages API client
 */

import type { ApiResponse } from '@typings/client';
import type {
  CreateTicketMessageRequest,
  TicketMessageListParams,
  TicketMessageListResponse,
  TicketMessageResponse,
} from '@typings/ticket-messages';
import type { HttpClient } from '@utils/http-client';

export class TicketMessagesClient {
  private readonly client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * List all ticket messages
   * @param params - Query parameters for filtering, sorting, and pagination
   */
  public list = async (params?: TicketMessageListParams): Promise<ApiResponse<TicketMessageListResponse>> =>
    this.client.request<TicketMessageListResponse>({
      'method': 'GET',
      'path': '/v1/admin/ticket-messages',
      'queryParams': params as Record<string, string | number | boolean>,
    });

  /**
   * Get a specific ticket message by ID
   * @param ticketMessageId - The ticket message ID
   * @param include - Optional relationships to include
   */
  public get = async (ticketMessageId: number, include?: string): Promise<ApiResponse<TicketMessageResponse>> =>
    this.client.request<TicketMessageResponse>({
      'method': 'GET',
      'path': `/v1/admin/ticket-messages/${ticketMessageId}`,
      'queryParams': include !== undefined ? { include } : undefined,
    });

  /**
   * Create a new ticket message
   * @param data - The ticket message data
   */
  public create = async (data: CreateTicketMessageRequest): Promise<ApiResponse<TicketMessageResponse>> =>
    this.client.request<TicketMessageResponse>({
      'method': 'POST',
      'path': '/v1/admin/ticket-messages',
      'body': data,
    });

  /**
   * Delete a ticket message
   * @param ticketMessageId - The ticket message ID
   */
  public delete = async (ticketMessageId: number): Promise<ApiResponse<void>> =>
    this.client.request<void>({
      'method': 'DELETE',
      'path': `/v1/admin/ticket-messages/${ticketMessageId}`,
    });
}
