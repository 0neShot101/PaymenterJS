/**
 * Invoice-related types for Paymenter API
 */

import type {
  BaseResource,
  CurrencyCode,
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
 * Invoice resource type identifier
 */
export type InvoiceResourceType = 'invoices';

/**
 * Invoice resource identifier
 */
export type InvoiceResourceIdentifier = ResourceIdentifier<InvoiceResourceType>;

/**
 * Invoice status options
 */
export type InvoiceStatus = 'pending' | 'paid' | 'cancelled';

/**
 * Invoice attributes from API response
 */
export interface InvoiceAttributes {
  readonly id: ResourceId;
  readonly status: InvoiceStatus;
  readonly currency_code: CurrencyCode;
  readonly due_at: DateTimeString | null;
  readonly updated_at: DateTimeString | null;
  readonly created_at: DateTimeString | null;
}

/**
 * Invoice relationships
 */
export interface InvoiceRelationships {
  readonly user?: RelationshipData<ResourceIdentifier<'users'>>;
  readonly items?: RelationshipArrayData<ResourceIdentifier<'invoiceItems'>>;
}

/**
 * Invoice resource
 */
export interface InvoiceResource extends BaseResource<InvoiceResourceType, InvoiceAttributes> {
  readonly relationships?: InvoiceRelationships;
}

/**
 * Request body for creating an invoice
 */
export interface CreateInvoiceRequest {
  readonly user_id: ResourceId;
  readonly currency_code: CurrencyCode;
  readonly status?: InvoiceStatus;
  readonly due_at?: DateTimeString | null;
}

/**
 * Request body for updating an invoice
 */
export interface UpdateInvoiceRequest {
  readonly user_id?: ResourceId;
  readonly currency_code?: CurrencyCode;
  readonly status?: InvoiceStatus;
  readonly due_at?: DateTimeString | null;
}

/**
 * Invoice list query parameters
 */
export interface InvoiceListParams extends ListQueryParams {
  readonly 'filter[id]'?: string;
  readonly 'filter[currency_code]'?: string;
  readonly 'filter[user_id]'?: string;
  readonly 'filter[status]'?: string;
}

/**
 * Available include options for invoices
 */
export type InvoiceIncludeOption = 'items' | 'itemsCount' | 'itemsExists' | 'user' | 'userCount' | 'userExists';

/**
 * Available sort options for invoices
 */
export type InvoiceSortOption =
  | 'id'
  | '-id'
  | 'created_at'
  | '-created_at'
  | 'updated_at'
  | '-updated_at'
  | 'currency_code'
  | '-currency_code';

/**
 * Paginated invoice list response
 */
export type InvoiceListResponse = PaginatedResponse<InvoiceResource>;

/**
 * Single invoice response
 */
export type InvoiceResponse = SingleResponse<InvoiceResource>;
