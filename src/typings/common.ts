/**
 * Common types used across the Paymenter API
 */

/** ISO 8601 date-time string */
export type DateTimeString = string;

/** Unique identifier */
export type ResourceId = number;

/** String identifier used in JSON:API responses */
export type ResourceStringId = string;

/** Currency code (e.g., "USD", "EUR") */
export type CurrencyCode = string;

/**
 * Standard error response details
 */
export interface ProblemDetails {
  readonly message: string;
  readonly errors?: Record<string, readonly string[]>;
}

/**
 * Validation error response
 */
export interface ValidationProblemDetails extends ProblemDetails {
  readonly errors: Record<string, readonly string[]>;
}

/**
 * JSON:API pagination links
 */
export interface PaginationLinks {
  readonly first?: string;
  readonly last?: string;
  readonly prev?: string | null;
  readonly next?: string | null;
}

/**
 * JSON:API pagination metadata
 */
export interface PaginationMeta {
  readonly current_page: number;
  readonly from: number | null;
  readonly path: string | null;
  readonly per_page: number;
  readonly to: number | null;
}

/**
 * Common list query parameters
 */
export interface ListQueryParams {
  readonly sort?: string;
  readonly include?: string;
  readonly per_page?: number;
  readonly page?: number;
}

/**
 * JSON:API resource identifier
 */
export interface ResourceIdentifier<T extends string = string> {
  readonly type: T;
  readonly id: ResourceStringId;
}

/**
 * JSON:API relationship data wrapper
 */
export interface RelationshipData<T extends ResourceIdentifier = ResourceIdentifier> {
  readonly data: T | null;
}

/**
 * JSON:API relationship array data wrapper
 */
export interface RelationshipArrayData<T extends ResourceIdentifier = ResourceIdentifier> {
  readonly data: readonly T[];
}

/**
 * Base resource structure for JSON:API responses
 */
export interface BaseResource<TType extends string, TAttributes> {
  readonly id: ResourceStringId;
  readonly type: TType;
  readonly attributes?: TAttributes;
}

/**
 * Paginated response structure
 */
export interface PaginatedResponse<T> {
  readonly data: readonly T[];
  readonly links: PaginationLinks;
  readonly meta: PaginationMeta;
  readonly included?: readonly unknown[];
}

/**
 * Single resource response structure
 */
export interface SingleResponse<T> {
  readonly data: T;
  readonly included?: readonly unknown[];
}
