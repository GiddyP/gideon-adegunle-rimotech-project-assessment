export const BASE_URI = process.env.NEXT_PUBLIC_BASE_URI;
export const AUTH_TOKEN_KEY = "LOGIN_ACCESS";

interface User {
	id: number;
	role_id: number;
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	email_verified_at: string | null;
	created_at: string;
	updated_at: string;
	role: {
		id: number;
		name: string;
		created_at: string;
		updated_at: string;
	};
}
export interface LoginResponse {
	message: string;
	data: {
		user: User;
		token: string;
	};
}

// API constant typings
// Payloads
export interface LoginPayload {
	email: any;
	password: any;
}
