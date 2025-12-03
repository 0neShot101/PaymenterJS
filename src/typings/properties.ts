/**
 * Property-related types for Paymenter API
 */

import type { BaseResource, DateTimeString, ResourceId, ResourceIdentifier } from './common';

/**
 * Property resource type identifier
 */
export type PropertyResourceType = 'properties';

/**
 * Property resource identifier
 */
export type PropertyResourceIdentifier = ResourceIdentifier<PropertyResourceType>;

/**
 * Property attributes from API response
 */
export interface PropertyAttributes {
  readonly id: ResourceId;
  readonly name: string | null;
  readonly key: string;
  readonly value: string;
  readonly updated_at: DateTimeString | null;
  readonly created_at: DateTimeString | null;
}

/**
 * Property resource
 */
export interface PropertyResource extends BaseResource<PropertyResourceType, PropertyAttributes> {}
