/**
 * Order-related types for Paymenter API
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
 * Order resource type identifier
 */
export type OrderResourceType = 'orders';

/**
 * Order resource identifier
 */
export type OrderResourceIdentifier = ResourceIdentifier<OrderResourceType>;

/**
 * Order attributes from API response
 */
export interface OrderAttributes {
  readonly id: ResourceId;
  readonly currency_code: CurrencyCode;
  readonly user_id: ResourceId;
  readonly updated_at: DateTimeString | null;
  readonly created_at: DateTimeString | null;
}

/**
 * Order relationships
 */
export interface OrderRelationships {
  readonly services?: RelationshipArrayData<ResourceIdentifier<'services'>>;
  readonly user?: RelationshipData<ResourceIdentifier<'users'>>;
}

/**
 * Order resource
 */
export interface OrderResource extends BaseResource<OrderResourceType, OrderAttributes> {
  readonly relationships?: OrderRelationships;
}

/**
 * Request body for creating an order
 */
export interface CreateOrderRequest {
  readonly user_id: ResourceId;
  readonly currency_code: CurrencyCode;
}

/**
 * Request body for updating an order
 */
export interface UpdateOrderRequest {
  readonly user_id?: ResourceId;
  readonly currency_code?: CurrencyCode;
}

/**
 * Order list query parameters
 */
export interface OrderListParams extends ListQueryParams {
  readonly 'filter[id]'?: string;
  readonly 'filter[currency_code]'?: string;
}

/**
 * Available include options for orders
 */
export type OrderIncludeOption = 'services' | 'servicesCount' | 'servicesExists' | 'user' | 'userCount' | 'userExists';

/**
 * Available sort options for orders
 */
export type OrderSortOption =
  | 'id'
  | '-id'
  | 'created_at'
  | '-created_at'
  | 'updated_at'
  | '-updated_at'
  | 'currency_code'
  | '-currency_code';

/**
 * Paginated order list response
 */
export type OrderListResponse = PaginatedResponse<OrderResource>;

/**
 * Single order response
 */
export type OrderResponse = SingleResponse<OrderResource>;
