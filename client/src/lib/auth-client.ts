import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: import.meta.env.VITE_BASE_URL ? `${import.meta.env.VITE_BASE_URL}/api/auth` : (import.meta.env.DEV ? "http://localhost:3000/api/auth" : "/api/auth"),
    fetchOptions: {
        credentials: "include",
    },
});

export const { signIn, signUp, useSession } = authClient;
