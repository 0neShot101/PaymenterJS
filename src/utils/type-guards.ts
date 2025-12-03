/**
 * Type guards for runtime type checking
 */

import type { ProblemDetails, ValidationProblemDetails } from '@typings/common';

/**
 * Checks if a value is an object and not null
 */
const isNonNullObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

/**
 * Type guard for ProblemDetails error responses
 */
export const isProblemDetails = (value: unknown): value is ProblemDetails => {
  if (isNonNullObject(value) === false) return false;

  const obj = value;

  return (
    (typeof obj['message'] === 'string' || obj['message'] === undefined) &&
    (obj['errors'] === undefined || isNonNullObject(obj['errors']) === true)
  );
};

/**
 * Type guard for ValidationProblemDetails error responses
 */
export const isValidationProblemDetails = (value: unknown): value is ValidationProblemDetails => {
  if (isProblemDetails(value) === false) return false;

  const obj = value as unknown as Record<string, unknown>;

  if (obj['errors'] === undefined) return false;
  if (isNonNullObject(obj['errors']) === false) return false;

  const errors = obj['errors'] as Record<string, unknown>;

  return Object.values(errors).every(val => Array.isArray(val) === true && val.every(item => typeof item === 'string'));
};

/**
 * Type guard for checking if a value is a non-empty string
 */
export const isNonEmptyString = (value: unknown): value is string => typeof value === 'string' && value.length > 0;

/**
 * Type guard for checking if a value is a positive integer
 */
export const isPositiveInteger = (value: unknown): value is number =>
  typeof value === 'number' && Number.isInteger(value) && value > 0;

/**
 * Type guard for checking if a value is a valid resource ID
 */
export const isValidResourceId = (value: unknown): value is number => isPositiveInteger(value);
