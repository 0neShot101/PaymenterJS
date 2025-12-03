/**
 * Affiliate-related types for Paymenter API
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
 * Affiliate resource type identifier
 */
export type AffiliateResourceType = 'affiliates';

/**
 * Affiliate order resource type identifier
 */
export type AffiliateOrderResourceType = 'affiliateOrders';

/**
 * Affiliate resource identifier
 */
export type AffiliateResourceIdentifier = ResourceIdentifier<AffiliateResourceType>;

/**
 * Affiliate order resource identifier
 */
export type AffiliateOrderResourceIdentifier = ResourceIdentifier<AffiliateOrderResourceType>;

/**
 * Affiliate order attributes
 */
export interface AffiliateOrderAttributes {
  readonly id: string;
  readonly order_id: string;
}

/**
 * Affiliate order resource
 */
export interface AffiliateOrderResource extends BaseResource<AffiliateOrderResourceType, AffiliateOrderAttributes> {}

/**
 * Affiliate attributes from API response
 */
export interface AffiliateAttributes {
  readonly id: string;
  readonly code: string;
  readonly enabled: string;
  readonly visitors: string;
  readonly reward: string;
  readonly discount: string;
  readonly earnings: string;
  readonly updated_at: DateTimeString;
  readonly created_at: DateTimeString;
}

/**
 * Affiliate relationships
 */
export interface AffiliateRelationships {
  readonly user?: RelationshipData<ResourceIdentifier<'users'>>;
  readonly orders?: RelationshipArrayData<AffiliateOrderResourceIdentifier>;
}

/**
 * Affiliate resource
 */
export interface AffiliateResource extends BaseResource<AffiliateResourceType, AffiliateAttributes> {
  readonly relationships?: AffiliateRelationships;
}

/**
 * Request body for creating an affiliate
 */
export interface CreateAffiliateRequest {
  readonly user_id: ResourceId;
  readonly code: string;
  readonly enabled?: boolean | null;
  readonly reward?: number | null;
}

/**
 * Request body for updating an affiliate
 */
export interface UpdateAffiliateRequest {
  readonly user_id?: ResourceId | null;
  readonly code?: string | null;
  readonly enabled?: boolean | null;
  readonly reward?: number | null;
}

/**
 * Affiliate list query parameters
 */
export interface AffiliateListParams extends ListQueryParams {
  readonly 'filter[affiliate_id]'?: string;
  readonly 'filter[code]'?: string;
  readonly 'filter[visitors]'?: string;
  readonly 'filter[reward]'?: string;
  readonly 'filter[discount]'?: string;
}

/**
 * Available include options for affiliates
 */
export type AffiliateIncludeOption = 'user' | 'userCount' | 'userExists' | 'orders' | 'ordersCount' | 'ordersExists';

/**
 * Available sort options for affiliates
 */
export type AffiliateSortOption =
  | 'id'
  | '-id'
  | 'code'
  | '-code'
  | 'visitors'
  | '-visitors'
  | 'reward'
  | '-reward'
  | 'discount'
  | '-discount'
  | 'created_at'
  | '-created_at';

/**
 * Paginated affiliate list response
 */
export type AffiliateListResponse = PaginatedResponse<AffiliateResource>;

/**
 * Single affiliate response
 */
export type AffiliateResponse = SingleResponse<AffiliateResource>;
