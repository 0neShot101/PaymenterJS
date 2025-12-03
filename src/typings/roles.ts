/**
 * Role-related types for Paymenter API
 */

import type { BaseResource, DateTimeString, ResourceId, ResourceIdentifier } from './common';

/**
 * Role resource type identifier
 */
export type RoleResourceType = 'roles';

/**
 * Role resource identifier
 */
export type RoleResourceIdentifier = ResourceIdentifier<RoleResourceType>;

/**
 * Role attributes from API response
 */
export interface RoleAttributes {
  readonly id: ResourceId;
  readonly name: string;
  readonly permissions: readonly unknown[] | null;
  readonly updated_at: DateTimeString | null;
  readonly created_at: DateTimeString | null;
}

/**
 * Role resource
 */
export interface RoleResource extends BaseResource<RoleResourceType, RoleAttributes> {}
