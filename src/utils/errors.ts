/**
 * Error classes for Paymenter API
 */

import type { ProblemDetails, ValidationProblemDetails } from '@typings/common';

/**
 * Base error class for Paymenter API errors
 */
export class PaymenterError extends Error {
  public readonly statusCode?: number;
  public readonly details?: ProblemDetails;

  constructor(message: string, statusCode?: number, details?: ProblemDetails) {
    super(message);
    this.name = 'PaymenterError';
    if (statusCode !== undefined) this.statusCode = statusCode;
    if (details !== undefined) this.details = details;
    Object.setPrototypeOf(this, PaymenterError.prototype);
  }
}

/**
 * Error class for validation errors (422, 400)
 */
export class PaymenterValidationError extends PaymenterError {
  public readonly validationErrors?: Record<string, readonly string[]>;

  constructor(message: string, statusCode?: number, details?: ValidationProblemDetails) {
    super(message, statusCode, details);
    this.name = 'PaymenterValidationError';
    if (details?.errors !== undefined) this.validationErrors = details.errors;
    Object.setPrototypeOf(this, PaymenterValidationError.prototype);
  }
}

/**
 * Error class for network-related errors
 */
export class PaymenterNetworkError extends PaymenterError {
  public readonly originalError?: Error;

  constructor(message: string, originalError?: Error) {
    super(message);
    this.name = 'PaymenterNetworkError';
    if (originalError !== undefined) this.originalError = originalError;
    Object.setPrototypeOf(this, PaymenterNetworkError.prototype);
  }
}

/**
 * Error class for authentication errors (401)
 */
export class PaymenterAuthenticationError extends PaymenterError {
  constructor(message: string, statusCode?: number, details?: ProblemDetails) {
    super(message, statusCode, details);
    this.name = 'PaymenterAuthenticationError';
    Object.setPrototypeOf(this, PaymenterAuthenticationError.prototype);
  }
}

/**
 * Error class for authorization errors (403)
 */
export class PaymenterAuthorizationError extends PaymenterError {
  constructor(message: string, statusCode?: number, details?: ProblemDetails) {
    super(message, statusCode, details);
    this.name = 'PaymenterAuthorizationError';
    Object.setPrototypeOf(this, PaymenterAuthorizationError.prototype);
  }
}

/**
 * Error class for not found errors (404)
 */
export class PaymenterNotFoundError extends PaymenterError {
  constructor(message: string, statusCode?: number, details?: ProblemDetails) {
    super(message, statusCode, details);
    this.name = 'PaymenterNotFoundError';
    Object.setPrototypeOf(this, PaymenterNotFoundError.prototype);
  }
}
