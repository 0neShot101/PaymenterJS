/**
 * Ticket message-related types for Paymenter API
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
 * Ticket message resource type identifier
 */
export type TicketMessageResourceType = 'ticketMessages';

/**
 * Ticket message resource identifier
 */
export type TicketMessageResourceIdentifier = ResourceIdentifier<TicketMessageResourceType>;

/**
 * Ticket attachment resource type identifier
 */
export type TicketAttachmentResourceType = 'ticketAttachments';

/**
 * Ticket attachment resource identifier
 */
export type TicketAttachmentResourceIdentifier = ResourceIdentifier<TicketAttachmentResourceType>;

/**
 * Ticket message attributes from API response
 */
export interface TicketMessageAttributes {
  readonly id: ResourceId;
  readonly message: string;
  readonly updated_at: DateTimeString | null;
  readonly created_at: DateTimeString | null;
}

/**
 * Ticket message relationships
 */
export interface TicketMessageRelationships {
  readonly user?: RelationshipData<ResourceIdentifier<'users'>>;
  readonly ticket?: RelationshipData<ResourceIdentifier<'tickets'>>;
  readonly attachments?: RelationshipArrayData<TicketAttachmentResourceIdentifier>;
}

/**
 * Ticket message resource
 */
export interface TicketMessageResource extends BaseResource<TicketMessageResourceType, TicketMessageAttributes> {
  readonly relationships?: TicketMessageRelationships;
}

/**
 * Ticket attachment attributes
 */
export interface TicketAttachmentAttributes {
  readonly id: string;
  readonly uuid: string;
  readonly filename: string;
  readonly path: string;
  readonly filesize: string;
  readonly mime_type: string;
  readonly created_at: DateTimeString;
  readonly updated_at: DateTimeString;
}

/**
 * Ticket attachment relationships
 */
export interface TicketAttachmentRelationships {
  readonly message?: RelationshipData<TicketMessageResourceIdentifier>;
}

/**
 * Ticket attachment resource
 */
export interface TicketAttachmentResource
  extends BaseResource<TicketAttachmentResourceType, TicketAttachmentAttributes> {
  readonly relationships?: TicketAttachmentRelationships;
}

/**
 * Request body for creating a ticket message
 */
export interface CreateTicketMessageRequest {
  readonly message: string;
  readonly user_id: ResourceId;
  readonly ticket_id: ResourceId;
}

/**
 * Ticket message list query parameters
 */
export interface TicketMessageListParams extends ListQueryParams {
  readonly 'filter[id]'?: string;
  readonly 'filter[currency_code]'?: string;
}

/**
 * Available include options for ticket messages
 */
export type TicketMessageIncludeOption =
  | 'user'
  | 'userCount'
  | 'userExists'
  | 'ticket'
  | 'ticketCount'
  | 'ticketExists'
  | 'attachments'
  | 'attachmentsCount'
  | 'attachmentsExists';

/**
 * Available sort options for ticket messages
 */
export type TicketMessageSortOption =
  | 'id'
  | '-id'
  | 'created_at'
  | '-created_at'
  | 'updated_at'
  | '-updated_at'
  | 'currency_code'
  | '-currency_code';

/**
 * Paginated ticket message list response
 */
export type TicketMessageListResponse = PaginatedResponse<TicketMessageResource>;

/**
 * Single ticket message response
 */
export type TicketMessageResponse = SingleResponse<TicketMessageResource>;
