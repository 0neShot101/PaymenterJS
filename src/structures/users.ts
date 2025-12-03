/**
 * Users API client
 */

import type { ApiResponse } from '@typings/client';
import type {
  CreateUserRequest,
  UpdateUserRequest,
  UserListParams,
  UserListResponse,
  UserResponse,
} from '@typings/users';
import type { HttpClient } from '@utils/http-client';

export class UsersClient {
  private readonly client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * List all users
   * @param params - Query parameters for filtering, sorting, and pagination
   */
  public list = async (params?: UserListParams): Promise<ApiResponse<UserListResponse>> =>
    this.client.request<UserListResponse>({
      'method': 'GET',
      'path': '/v1/admin/users',
      'queryParams': params as Record<string, string | number | boolean>,
    });

  /**
   * Get a specific user by ID
   * @param userId - The user ID
   * @param include - Optional relationships to include
   */
  public get = async (userId: number, include?: string): Promise<ApiResponse<UserResponse>> =>
    this.client.request<UserResponse>({
      'method': 'GET',
      'path': `/v1/admin/users/${userId}`,
      'queryParams': include !== undefined ? { include } : undefined,
    });

  /**
   * Create a new user
   * @param data - The user data
   */
  public create = async (data: CreateUserRequest): Promise<ApiResponse<UserResponse>> =>
    this.client.request<UserResponse>({
      'method': 'POST',
      'path': '/v1/admin/users',
      'body': data,
    });

  /**
   * Update an existing user
   * @param userId - The user ID
   * @param data - The update data
   */
  public update = async (userId: number, data: UpdateUserRequest): Promise<ApiResponse<UserResponse>> =>
    this.client.request<UserResponse>({
      'method': 'PUT',
      'path': `/v1/admin/users/${userId}`,
      'body': data,
    });

  /**
   * Delete a user
   * @param userId - The user ID
   */
  public delete = async (userId: number): Promise<ApiResponse<void>> =>
    this.client.request<void>({
      'method': 'DELETE',
      'path': `/v1/admin/users/${userId}`,
    });
}
