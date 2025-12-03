/**
 * Product-related types for Paymenter API
 */

import type { BaseResource, DateTimeString, RelationshipData, ResourceId, ResourceIdentifier } from './common';

/**
 * Product resource type identifier
 */
export type ProductResourceType = 'products';

/**
 * Product resource identifier
 */
export type ProductResourceIdentifier = ResourceIdentifier<ProductResourceType>;

/**
 * Category resource type identifier
 */
export type CategoryResourceType = 'categories';

/**
 * Category resource identifier
 */
export type CategoryResourceIdentifier = ResourceIdentifier<CategoryResourceType>;

/**
 * Product attributes from API response
 */
export interface ProductAttributes {
  readonly id: ResourceId;
  readonly name: string;
  readonly permissions: string;
  readonly updated_at: DateTimeString | null;
  readonly created_at: DateTimeString | null;
}

/**
 * Product relationships
 */
export interface ProductRelationships {
  readonly category?: RelationshipData<CategoryResourceIdentifier>;
}

/**
 * Product resource
 */
export interface ProductResource extends BaseResource<ProductResourceType, ProductAttributes> {
  readonly relationships?: ProductRelationships;
}
