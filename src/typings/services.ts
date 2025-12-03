/**
 * Service-related types for Paymenter API
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
 * Service resource type identifier
 */
export type ServiceResourceType = 'services';

/**
 * Service resource identifier
 */
export type ServiceResourceIdentifier = ResourceIdentifier<ServiceResourceType>;

/**
 * Service status options
 */
export type ServiceStatus = 'pending' | 'active' | 'cancelled' | 'suspended';

/**
 * Service attributes from API response
 */
export interface ServiceAttributes {
  readonly id: ResourceId;
  readonly quantity: number;
  readonly price: string;
  readonly status: ServiceStatus;
  readonly currency_code: CurrencyCode;
  readonly expires_at: DateTimeString | null;
  readonly updated_at: DateTimeString | null;
  readonly created_at: DateTimeString | null;
}

/**
 * Service relationships
 */
export interface ServiceRelationships {
  readonly coupon?: RelationshipData<ResourceIdentifier<'coupons'>>;
  readonly user?: RelationshipData<ResourceIdentifier<'users'>>;
  readonly order?: RelationshipData<ResourceIdentifier<'orders'>>;
  readonly product?: RelationshipData<ResourceIdentifier<'products'>>;
  readonly invoices?: RelationshipArrayData<ResourceIdentifier<'invoices'>>;
  readonly property?: RelationshipData<ResourceIdentifier<'properties'>>;
}

/**
 * Service resource
 */
export interface ServiceResource extends BaseResource<ServiceResourceType, ServiceAttributes> {
  readonly relationships?: ServiceRelationships;
}

/**
 * Request body for creating a service
 */
export interface CreateServiceRequest {
  readonly product_id: ResourceId;
  readonly plan_id: ResourceId;
  readonly user_id: ResourceId;
  readonly currency_code: CurrencyCode;
  readonly price: number;
  readonly quantity?: number;
  readonly status?: ServiceStatus;
  readonly expires_at?: DateTimeString | null;
  readonly coupon_id?: ResourceId | null;
  readonly subscription_id?: string | null;
  readonly order_id?: ResourceId | null;
}

/**
 * Request body for updating a service
 */
export interface UpdateServiceRequest {
  readonly product_id?: ResourceId;
  readonly plan_id?: ResourceId;
  readonly user_id?: ResourceId;
  readonly quantity?: number;
  readonly status?: ServiceStatus;
  readonly expires_at?: DateTimeString | null;
  readonly currency_code?: CurrencyCode;
  readonly price?: number;
  readonly coupon_id?: ResourceId | null;
  readonly subscription_id?: string | null;
  readonly order_id?: ResourceId | null;
}

/**
 * Service list query parameters
 */
export interface ServiceListParams extends ListQueryParams {
  readonly 'filter[quantity]'?: string;
  readonly 'filter[price]'?: string;
  readonly 'filter[expires_at]'?: string;
  readonly 'filter[subscription_id]'?: string;
  readonly 'filter[status]'?: string;
}

/**
 * Available include options for services
 */
export type ServiceIncludeOption =
  | 'order'
  | 'orderCount'
  | 'orderExists'
  | 'coupon'
  | 'couponCount'
  | 'couponExists'
  | 'user'
  | 'userCount'
  | 'userExists'
  | 'product'
  | 'productCount'
  | 'productExists'
  | 'invoices'
  | 'invoicesCount'
  | 'invoicesExists'
  | 'properties'
  | 'propertiesCount'
  | 'propertiesExists';

/**
 * Available sort options for services
 */
export type ServiceSortOption =
  | 'id'
  | '-id'
  | 'created_at'
  | '-created_at'
  | 'updated_at'
  | '-updated_at'
  | 'expires_at'
  | '-expires_at'
  | 'status'
  | '-status';

/**
 * Paginated service list response
 */
export type ServiceListResponse = PaginatedResponse<ServiceResource>;

/**
 * Single service response
 */
export type ServiceResponse = SingleResponse<ServiceResource>;

/**
 * Service upgrade resource type
 */
export type ServiceUpgradeResourceType = 'serviceUpgrades';

/**
 * Service upgrade resource identifier
 */
export type ServiceUpgradeResourceIdentifier = ResourceIdentifier<ServiceUpgradeResourceType>;

/**
 * Service upgrade attributes
 */
export interface ServiceUpgradeAttributes {
  readonly id: ResourceId;
  readonly status: string;
  readonly service_id: ResourceId;
  readonly plan_id: ResourceId;
  readonly product_id: ResourceId;
  readonly updated_at: DateTimeString | null;
  readonly created_at: DateTimeString | null;
}

/**
 * Service upgrade resource
 */
export interface ServiceUpgradeResource extends BaseResource<ServiceUpgradeResourceType, ServiceUpgradeAttributes> {
  readonly relationships?: {
    readonly service?: RelationshipData<ResourceIdentifier<'properties'>>;
    readonly invoice?: RelationshipData<ResourceIdentifier<'invoices'>>;
  };
}
