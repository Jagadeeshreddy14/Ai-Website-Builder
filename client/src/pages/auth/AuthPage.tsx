import { useLocation, useNavigate } from "react-router-dom";
import { AuthView } from "@daveyplate/better-auth-ui";
import { authClient } from "@/lib/auth-client";
import { useEffect } from "react";

export default function AuthPage() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { data: session, isPending } = authClient.useSession();

    useEffect(() => {
        if (!isPending && session) {
            navigate("/");
        }
    }, [session, isPending, navigate]);

    return (
        <main className="p-6 flex flex-col justify-center items-center h-[80vh]">
            <AuthView
                pathname={pathname}
                classNames={{ base: "bg-black/10 ring ring-indigo-900" }}
            />
        </main>
    );
}
