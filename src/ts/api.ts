export type RequestStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';

export type ApiResponse<T = unknown> = {
  successful: boolean;
  result: T;
};
