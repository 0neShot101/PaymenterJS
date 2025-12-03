/**
 * Tickets API client
 */

import type { ApiResponse } from '@typings/client';
import type {
  CreateTicketRequest,
  TicketListParams,
  TicketListResponse,
  TicketResponse,
  UpdateTicketRequest,
} from '@typings/tickets';
import type { HttpClient } from '@utils/http-client';

export class TicketsClient {
  private readonly client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * List all tickets
   * @param params - Query parameters for filtering, sorting, and pagination
   */
  public list = async (params?: TicketListParams): Promise<ApiResponse<TicketListResponse>> =>
    this.client.request<TicketListResponse>({
      'method': 'GET',
      'path': '/v1/admin/tickets',
      'queryParams': params as Record<string, string | number | boolean>,
    });

  /**
   * Get a specific ticket by ID
   * @param ticketId - The ticket ID
   * @param include - Optional relationships to include
   */
  public get = async (ticketId: number, include?: string): Promise<ApiResponse<TicketResponse>> =>
    this.client.request<TicketResponse>({
      'method': 'GET',
      'path': `/v1/admin/tickets/${ticketId}`,
      'queryParams': include !== undefined ? { include } : undefined,
    });

  /**
   * Create a new ticket
   * @param data - The ticket data
   */
  public create = async (data: CreateTicketRequest): Promise<ApiResponse<TicketResponse>> =>
    this.client.request<TicketResponse>({
      'method': 'POST',
      'path': '/v1/admin/tickets',
      'body': data,
    });

  /**
   * Update an existing ticket
   * @param ticketId - The ticket ID
   * @param data - The update data
   */
  public update = async (ticketId: number, data: UpdateTicketRequest): Promise<ApiResponse<TicketResponse>> =>
    this.client.request<TicketResponse>({
      'method': 'PUT',
      'path': `/v1/admin/tickets/${ticketId}`,
      'body': data,
    });

  /**
   * Delete a ticket
   * @param ticketId - The ticket ID
   */
  public delete = async (ticketId: number): Promise<ApiResponse<void>> =>
    this.client.request<void>({
      'method': 'DELETE',
      'path': `/v1/admin/tickets/${ticketId}`,
    });
}
