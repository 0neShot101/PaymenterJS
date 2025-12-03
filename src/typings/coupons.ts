/**
 * Coupon-related types for Paymenter API
 */

import type { BaseResource, DateTimeString, RelationshipArrayData, ResourceId, ResourceIdentifier } from './common';

/**
 * Coupon resource type identifier
 */
export type CouponResourceType = 'coupons';

/**
 * Coupon resource identifier
 */
export type CouponResourceIdentifier = ResourceIdentifier<CouponResourceType>;

/**
 * Coupon type options
 */
export type CouponType = 'percentage' | 'fixed';

/**
 * Coupon attributes from API response
 */
export interface CouponAttributes {
  readonly id: ResourceId;
  readonly code: string;
  readonly type: CouponType;
  readonly recurring: number | null;
  readonly value: number | null;
  readonly max_uses: number | null;
  readonly max_uses_per_user: number | null;
  readonly starts_at: DateTimeString | null;
  readonly expires_at: DateTimeString | null;
  readonly updated_at: DateTimeString | null;
  readonly created_at: DateTimeString | null;
}

/**
 * Coupon relationships
 */
export interface CouponRelationships {
  readonly services?: RelationshipArrayData<ResourceIdentifier<'services'>>;
}

/**
 * Coupon resource
 */
export interface CouponResource extends BaseResource<CouponResourceType, CouponAttributes> {
  readonly relationships?: CouponRelationships;
}
