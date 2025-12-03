/**
 * Credit-related types for Paymenter API
 */

import type {
  BaseResource,
  CurrencyCode,
  DateTimeString,
  ListQueryParams,
  PaginatedResponse,
  RelationshipData,
  ResourceId,
  ResourceIdentifier,
  SingleResponse,
} from './common';

/**
 * Credit resource type identifier
 */
export type CreditResourceType = 'credits';

/**
 * Credit resource identifier
 */
export type CreditResourceIdentifier = ResourceIdentifier<CreditResourceType>;

/**
 * Credit attributes from API response
 */
export interface CreditAttributes {
  readonly id: ResourceId;
  readonly currency_code: CurrencyCode;
  readonly amount: string;
  readonly updated_at: DateTimeString | null;
  readonly created_at: DateTimeString | null;
}

/**
 * Credit relationships
 */
export interface CreditRelationships {
  readonly user?: RelationshipData<ResourceIdentifier<'users'>>;
}

/**
 * Credit resource
 */
export interface CreditResource extends BaseResource<CreditResourceType, CreditAttributes> {
  readonly relationships?: CreditRelationships;
}

/**
 * Request body for creating a credit
 */
export interface CreateCreditRequest {
  readonly user_id: ResourceId;
  readonly currency_code: CurrencyCode;
  readonly amount: number;
}

/**
 * Request body for updating a credit
 */
export interface UpdateCreditRequest {
  readonly currency_code?: CurrencyCode;
  readonly amount?: number;
}

/**
 * Credit list query parameters
 */
export interface CreditListParams extends ListQueryParams {
  readonly 'filter[id]'?: string;
  readonly 'filter[currency_code]'?: string;
  readonly 'filter[user_id]'?: string;
}

/**
 * Available include options for credits
 */
export type CreditIncludeOption = 'user' | 'userCount' | 'userExists';

/**
 * Available sort options for credits
 */
export type CreditSortOption =
  | 'id'
  | '-id'
  | 'created_at'
  | '-created_at'
  | 'updated_at'
  | '-updated_at'
  | 'currency_code'
  | '-currency_code';

/**
 * Paginated credit list response
 */
export type CreditListResponse = PaginatedResponse<CreditResource>;

/**
 * Single credit response
 */
export type CreditResponse = SingleResponse<CreditResource>;
