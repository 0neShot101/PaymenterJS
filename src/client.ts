/**
 * Main Paymenter API client
 */

import { AffiliatesClient } from '@structures/affiliates';
import { CreditsClient } from '@structures/credits';
import { InvoiceItemsClient } from '@structures/invoice-items';
import { InvoicesClient } from '@structures/invoices';
import { OrdersClient } from '@structures/orders';
import { ServicesClient } from '@structures/services';
import { TicketMessagesClient } from '@structures/ticket-messages';
import { TicketsClient } from '@structures/tickets';
import { UsersClient } from '@structures/users';
import { HttpClient } from '@utils/http-client';

import type { PaymenterClientConfig } from '@typings/client';

/**
 * Main Paymenter API client
 *
 * @example
 * ```typescript
 * import { PaymenterClient } from '@oneshot101/paymenterjs';
 *
 * const client = new PaymenterClient({
 *   baseUrl: 'https://your-paymenter-instance.com/api',
 *   apiKey: 'your-api-key',
 * });
 *
 * // List all users
 * const users = await client.users.list();
 *
 * // Get a specific user
 * const user = await client.users.get(1);
 *
 * // Create a new ticket
 * const ticket = await client.tickets.create({
 *   subject: 'Help needed',
 *   user_id: 1,
 *   priority: 'high',
 *   status: 'open',
 * });
 * ```
 */
export class PaymenterClient {
  private readonly httpClient: HttpClient;

  /** Affiliates API client */
  public readonly affiliates: AffiliatesClient;

  /** Users API client */
  public readonly users: UsersClient;

  /** Orders API client */
  public readonly orders: OrdersClient;

  /** Services API client */
  public readonly services: ServicesClient;

  /** Credits API client */
  public readonly credits: CreditsClient;

  /** Invoices API client */
  public readonly invoices: InvoicesClient;

  /** Invoice Items API client */
  public readonly invoiceItems: InvoiceItemsClient;

  /** Tickets API client */
  public readonly tickets: TicketsClient;

  /** Ticket Messages API client */
  public readonly ticketMessages: TicketMessagesClient;

  /**
   * Create a new Paymenter API client
   * @param config - Client configuration
   */
  constructor(config: PaymenterClientConfig) {
    this.httpClient = new HttpClient(config);

    this.affiliates = new AffiliatesClient(this.httpClient);
    this.users = new UsersClient(this.httpClient);
    this.orders = new OrdersClient(this.httpClient);
    this.services = new ServicesClient(this.httpClient);
    this.credits = new CreditsClient(this.httpClient);
    this.invoices = new InvoicesClient(this.httpClient);
    this.invoiceItems = new InvoiceItemsClient(this.httpClient);
    this.tickets = new TicketsClient(this.httpClient);
    this.ticketMessages = new TicketMessagesClient(this.httpClient);
  }
}
