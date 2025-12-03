/**
 * User-related types for Paymenter API
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
 * User resource type identifier
 */
export type UserResourceType = 'users';

/**
 * User resource identifier
 */
export type UserResourceIdentifier = ResourceIdentifier<UserResourceType>;

/**
 * User attributes from API response
 */
export interface UserAttributes {
  readonly id: ResourceId;
  readonly first_name: string | null;
  readonly last_name: string | null;
  readonly email: string;
  readonly email_verified_at: DateTimeString | null;
  readonly updated_at: DateTimeString | null;
  readonly created_at: DateTimeString | null;
}

/**
 * User relationships
 */
export interface UserRelationships {
  readonly properties?: RelationshipArrayData<ResourceIdentifier<'properties'>>;
  readonly orders?: RelationshipArrayData<ResourceIdentifier<'orders'>>;
  readonly services?: RelationshipArrayData<ResourceIdentifier<'services'>>;
  readonly invoices?: RelationshipArrayData<ResourceIdentifier<'invoices'>>;
  readonly tickets?: RelationshipArrayData<ResourceIdentifier<'tickets'>>;
  readonly credits?: RelationshipArrayData<ResourceIdentifier<'credits'>>;
  readonly role?: RelationshipData<ResourceIdentifier<'roles'>>;
}

/**
 * User resource
 */
export interface UserResource extends BaseResource<UserResourceType, UserAttributes> {
  readonly relationships?: UserRelationships;
}

/**
 * Request body for creating a user
 */
export interface CreateUserRequest {
  readonly email: string;
  readonly password: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly email_verified_at?: DateTimeString | null;
  readonly role_id?: ResourceId | null;
}

/**
 * Request body for updating a user
 */
export interface UpdateUserRequest {
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly email?: string;
  readonly password?: string;
  readonly email_verified_at?: DateTimeString | null;
  readonly role_id?: ResourceId | null;
}

/**
 * User list query parameters
 */
export interface UserListParams extends ListQueryParams {
  readonly 'filter[first_name]'?: string;
  readonly 'filter[last_name]'?: string;
  readonly 'filter[email]'?: string;
}

/**
 * Available include options for users
 */
export type UserIncludeOption =
  | 'properties'
  | 'propertiesCount'
  | 'propertiesExists'
  | 'orders'
  | 'ordersCount'
  | 'ordersExists'
  | 'services'
  | 'servicesCount'
  | 'servicesExists'
  | 'invoices'
  | 'invoicesCount'
  | 'invoicesExists'
  | 'tickets'
  | 'ticketsCount'
  | 'ticketsExists'
  | 'credits'
  | 'creditsCount'
  | 'creditsExists'
  | 'role'
  | 'roleCount'
  | 'roleExists';

/**
 * Available sort options for users
 */
export type UserSortOption =
  | 'id'
  | '-id'
  | 'first_name'
  | '-first_name'
  | 'last_name'
  | '-last_name'
  | 'email'
  | '-email'
  | 'created_at'
  | '-created_at';

/**
 * Paginated user list response
 */
export type UserListResponse = PaginatedResponse<UserResource>;

/**
 * Single user response
 */
export type UserResponse = SingleResponse<UserResource>;
