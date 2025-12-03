/**
 * Ticket-related types for Paymenter API
 */

import type {
  BaseResource,
  DateTimeString,
  ListQueryParams,
  PaginatedResponse,
  RelationshipArrayData,
  RelationshipData,
  ResourceId,
  ResourceIdentifier,
  SingleResponse,
} from './common';

/**
 * Ticket resource type identifier
 */
export type TicketResourceType = 'tickets';

/**
 * Ticket resource identifier
 */
export type TicketResourceIdentifier = ResourceIdentifier<TicketResourceType>;

/**
 * Ticket status options
 */
export type TicketStatus = 'open' | 'closed' | 'replied';

/**
 * Ticket priority options
 */
export type TicketPriority = 'low' | 'medium' | 'high';

/**
 * Ticket department options
 */
export type TicketDepartment = 'Support' | 'Sales';

/**
 * Ticket attributes from API response
 */
export interface TicketAttributes {
  readonly id: ResourceId;
  readonly subject: string;
  readonly status: TicketStatus;
  readonly priority: TicketPriority;
  readonly assigned_to: ResourceId | null;
  readonly user_id: ResourceId;
  readonly department: TicketDepartment | null;
  readonly updated_at: DateTimeString | null;
  readonly created_at: DateTimeString | null;
}

/**
 * Ticket relationships
 */
export interface TicketRelationships {
  readonly messages?: RelationshipArrayData<ResourceIdentifier<'ticketMessages'>>;
  readonly user?: RelationshipData<ResourceIdentifier<'users'>>;
  readonly assigned_to?: RelationshipData<ResourceIdentifier<'users'>>;
}

/**
 * Ticket resource
 */
export interface TicketResource extends BaseResource<TicketResourceType, TicketAttributes> {
  readonly relationships?: TicketRelationships;
}

/**
 * Request body for creating a ticket
 */
export interface CreateTicketRequest {
  readonly subject: string;
  readonly user_id: ResourceId;
  readonly priority: TicketPriority;
  readonly status: TicketStatus;
  readonly department?: TicketDepartment | null;
}

/**
 * Request body for updating a ticket
 */
export interface UpdateTicketRequest {
  readonly subject?: string;
  readonly user_id?: ResourceId;
  readonly department?: TicketDepartment | null;
  readonly priority?: TicketPriority;
  readonly status?: TicketStatus;
}

/**
 * Ticket list query parameters
 */
export interface TicketListParams extends ListQueryParams {
  readonly 'filter[id]'?: string;
  readonly 'filter[currency_code]'?: string;
  readonly 'filter[user_id]'?: string;
  readonly 'filter[status]'?: string;
  readonly 'filter[priority]'?: string;
  readonly 'filter[department]'?: string;
}

/**
 * Available include options for tickets
 */
export type TicketIncludeOption =
  | 'messages'
  | 'messagesCount'
  | 'messagesExists'
  | 'user'
  | 'userCount'
  | 'userExists'
  | 'assigned_to'
  | 'assigned_toCount'
  | 'assigned_toExists';

/**
 * Available sort options for tickets
 */
export type TicketSortOption =
  | 'id'
  | '-id'
  | 'created_at'
  | '-created_at'
  | 'updated_at'
  | '-updated_at'
  | 'currency_code'
  | '-currency_code'
  | 'status'
  | '-status'
  | 'priority'
  | '-priority'
  | 'department'
  | '-department';

/**
 * Paginated ticket list response
 */
export type TicketListResponse = PaginatedResponse<TicketResource>;

/**
 * Single ticket response
 */
export type TicketResponse = SingleResponse<TicketResource>;
