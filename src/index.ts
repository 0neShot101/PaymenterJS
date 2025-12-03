/**
 * PaymenterJS
 * Type-safe API wrapper for paymenter.org
 */

export { PaymenterClient } from './client';

export {
  PaymenterAuthenticationError,
  PaymenterAuthorizationError,
  PaymenterError,
  PaymenterNetworkError,
  PaymenterNotFoundError,
  PaymenterValidationError,
} from '@utils/errors';

export {
  isNonEmptyString,
  isPositiveInteger,
  isProblemDetails,
  isValidationProblemDetails,
  isValidResourceId,
} from '@utils/type-guards';

export type { ApiResponse, HttpMethod, PaymenterClientConfig, RequestOptions } from '@typings/client';

export type {
  BaseResource,
  CurrencyCode,
  DateTimeString,
  ListQueryParams,
  PaginatedResponse,
  PaginationLinks,
  PaginationMeta,
  ProblemDetails,
  RelationshipArrayData,
  RelationshipData,
  ResourceId,
  ResourceIdentifier,
  ResourceStringId,
  SingleResponse,
  ValidationProblemDetails,
} from '@typings/common';

export type {
  AffiliateAttributes,
  AffiliateIncludeOption,
  AffiliateListParams,
  AffiliateListResponse,
  AffiliateOrderAttributes,
  AffiliateOrderResource,
  AffiliateOrderResourceIdentifier,
  AffiliateOrderResourceType,
  AffiliateRelationships,
  AffiliateResource,
  AffiliateResourceIdentifier,
  AffiliateResourceType,
  AffiliateResponse,
  AffiliateSortOption,
  CreateAffiliateRequest,
  UpdateAffiliateRequest,
} from '@typings/affiliates';

export type {
  CreateUserRequest,
  UpdateUserRequest,
  UserAttributes,
  UserIncludeOption,
  UserListParams,
  UserListResponse,
  UserRelationships,
  UserResource,
  UserResourceIdentifier,
  UserResourceType,
  UserResponse,
  UserSortOption,
} from '@typings/users';

export type {
  CreateOrderRequest,
  OrderAttributes,
  OrderIncludeOption,
  OrderListParams,
  OrderListResponse,
  OrderRelationships,
  OrderResource,
  OrderResourceIdentifier,
  OrderResourceType,
  OrderResponse,
  OrderSortOption,
  UpdateOrderRequest,
} from '@typings/orders';

export type {
  CreateServiceRequest,
  ServiceAttributes,
  ServiceIncludeOption,
  ServiceListParams,
  ServiceListResponse,
  ServiceRelationships,
  ServiceResource,
  ServiceResourceIdentifier,
  ServiceResourceType,
  ServiceResponse,
  ServiceSortOption,
  ServiceStatus,
  ServiceUpgradeAttributes,
  ServiceUpgradeResource,
  ServiceUpgradeResourceIdentifier,
  ServiceUpgradeResourceType,
  UpdateServiceRequest,
} from '@typings/services';

export type {
  CreateCreditRequest,
  CreditAttributes,
  CreditIncludeOption,
  CreditListParams,
  CreditListResponse,
  CreditRelationships,
  CreditResource,
  CreditResourceIdentifier,
  CreditResourceType,
  CreditResponse,
  CreditSortOption,
  UpdateCreditRequest,
} from '@typings/credits';

export type {
  CreateInvoiceRequest,
  InvoiceAttributes,
  InvoiceIncludeOption,
  InvoiceListParams,
  InvoiceListResponse,
  InvoiceRelationships,
  InvoiceResource,
  InvoiceResourceIdentifier,
  InvoiceResourceType,
  InvoiceResponse,
  InvoiceSortOption,
  InvoiceStatus,
  UpdateInvoiceRequest,
} from '@typings/invoices';

export type {
  CreateInvoiceItemRequest,
  InvoiceItemAttributes,
  InvoiceItemIncludeOption,
  InvoiceItemListParams,
  InvoiceItemListResponse,
  InvoiceItemRelationships,
  InvoiceItemResource,
  InvoiceItemResourceIdentifier,
  InvoiceItemResourceType,
  InvoiceItemResponse,
  InvoiceItemSortOption,
  UpdateInvoiceItemRequest,
} from '@typings/invoice-items';

export type {
  CreateTicketRequest,
  TicketAttributes,
  TicketDepartment,
  TicketIncludeOption,
  TicketListParams,
  TicketListResponse,
  TicketPriority,
  TicketRelationships,
  TicketResource,
  TicketResourceIdentifier,
  TicketResourceType,
  TicketResponse,
  TicketSortOption,
  TicketStatus,
  UpdateTicketRequest,
} from '@typings/tickets';

export type {
  CreateTicketMessageRequest,
  TicketAttachmentAttributes,
  TicketAttachmentRelationships,
  TicketAttachmentResource,
  TicketAttachmentResourceIdentifier,
  TicketAttachmentResourceType,
  TicketMessageAttributes,
  TicketMessageIncludeOption,
  TicketMessageListParams,
  TicketMessageListResponse,
  TicketMessageRelationships,
  TicketMessageResource,
  TicketMessageResourceIdentifier,
  TicketMessageResourceType,
  TicketMessageResponse,
  TicketMessageSortOption,
} from '@typings/ticket-messages';

export type {
  CategoryResourceIdentifier,
  CategoryResourceType,
  ProductAttributes,
  ProductRelationships,
  ProductResource,
  ProductResourceIdentifier,
  ProductResourceType,
} from '@typings/products';

export type {
  CouponAttributes,
  CouponRelationships,
  CouponResource,
  CouponResourceIdentifier,
  CouponResourceType,
  CouponType,
} from '@typings/coupons';

export type {
  PropertyAttributes,
  PropertyResource,
  PropertyResourceIdentifier,
  PropertyResourceType,
} from '@typings/properties';

export type { RoleAttributes, RoleResource, RoleResourceIdentifier, RoleResourceType } from '@typings/roles';

export { AffiliatesClient } from '@structures/affiliates';
export { CreditsClient } from '@structures/credits';
export { InvoiceItemsClient } from '@structures/invoice-items';
export { InvoicesClient } from '@structures/invoices';
export { OrdersClient } from '@structures/orders';
export { ServicesClient } from '@structures/services';
export { TicketMessagesClient } from '@structures/ticket-messages';
export { TicketsClient } from '@structures/tickets';
export { UsersClient } from '@structures/users';
export { HttpClient } from '@utils/http-client';
