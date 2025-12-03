/**
 * Invoice item-related types for Paymenter API
 */

import type {
  BaseResource,
  DateTimeString,
  ListQueryParams,
  PaginatedResponse,
  RelationshipData,
  ResourceId,
  ResourceIdentifier,
  SingleResponse,
} from './common';

/**
 * Invoice item resource type identifier
 */
export type InvoiceItemResourceType = 'invoiceItems';

/**
 * Invoice item resource identifier
 */
export type InvoiceItemResourceIdentifier = ResourceIdentifier<InvoiceItemResourceType>;

/**
 * Invoice item attributes from API response
 */
export interface InvoiceItemAttributes {
  readonly id: ResourceId;
  readonly description: string | null;
  readonly quantity: number;
  readonly price: string;
  readonly reference_type: string | null;
  readonly reference_id: ResourceId | null;
  readonly updated_at: DateTimeString | null;
  readonly created_at: DateTimeString | null;
}

/**
 * Invoice item relationships
 */
export interface InvoiceItemRelationships {
  readonly reference?: RelationshipData<
    ResourceIdentifier<'services'> | ResourceIdentifier<'serviceUpgrades'> | ResourceIdentifier<'credits'>
  >;
  readonly invoice?: RelationshipData<ResourceIdentifier<'invoices'>>;
}

/**
 * Invoice item resource
 */
export interface InvoiceItemResource extends BaseResource<InvoiceItemResourceType, InvoiceItemAttributes> {
  readonly relationships?: InvoiceItemRelationships;
}

/**
 * Request body for creating an invoice item
 */
export interface CreateInvoiceItemRequest {
  readonly invoice_id: ResourceId;
  readonly description: string;
  readonly price: number;
  readonly quantity: number;
  readonly reference_type?: string | null;
  readonly reference_id?: ResourceId | null;
}

/**
 * Request body for updating an invoice item
 */
export interface UpdateInvoiceItemRequest {
  readonly description?: string;
  readonly quantity?: number;
  readonly price?: number;
  readonly reference_type?: string;
  readonly reference_id?: ResourceId;
}

/**
 * Invoice item list query parameters
 */
export interface InvoiceItemListParams extends ListQueryParams {
  readonly 'filter[id]'?: string;
  readonly 'filter[quantity]'?: string;
  readonly 'filter[price]'?: string;
  readonly 'filter[reference_type]'?: string;
  readonly 'filter[reference_id]'?: string;
}

/**
 * Available include options for invoice items
 */
export type InvoiceItemIncludeOption =
  | 'gateway'
  | 'gatewayCount'
  | 'gatewayExists'
  | 'reference'
  | 'referenceCount'
  | 'referenceExists'
  | 'invoice'
  | 'invoiceCount'
  | 'invoiceExists';

/**
 * Available sort options for invoice items
 */
export type InvoiceItemSortOption =
  | 'id'
  | '-id'
  | 'created_at'
  | '-created_at'
  | 'updated_at'
  | '-updated_at'
  | 'quantity'
  | '-quantity'
  | 'price'
  | '-price';

/**
 * Paginated invoice item list response
 */
export type InvoiceItemListResponse = PaginatedResponse<InvoiceItemResource>;

/**
 * Single invoice item response
 */
export type InvoiceItemResponse = SingleResponse<InvoiceItemResource>;
