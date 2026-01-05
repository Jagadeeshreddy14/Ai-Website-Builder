import api from "@/config/axios";
import { authClient } from "@/lib/auth-client";

import { Loader2Icon } from "lucide-react";
import { SiHuawei, SiWalmart } from "react-icons/si";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Footer from "../components/Footer";

const Home = () => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const { data: session } = authClient.useSession();
    const navigate = useNavigate();

    const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (!session?.user) {
                return toast.error("Please sign in to create a project.");
            } else if (!input.trim()) {
                return toast.error("Please enter a message.");
            }

            setLoading(true);

            const { data } = await api.post("/api/user/project", {
                initial_prompt: input,
            });

            setLoading(false);

            navigate(`/projects/${data.projectId}`);
        } catch (error: any) {
            toast.error(
                error?.response?.data?.message ||
                    error?.message ||
                    "Something went wrong"
            );
            console.error(error);
        }
    };

    return (
        <section className="flex flex-col items-center text-white text-sm pb-20 px-4 font-poppins">
            <a
                href="https://prebuiltui.com"
                className="flex items-center gap-2 border border-slate-700 rounded-full p-1 pr-3 text-sm mt-20"
            >
                <span className="bg-indigo-600 text-xs px-3 py-1 rounded-full">
                    NEW
                </span>
                <p className="flex items-center gap-2">
                    <span>Try 30 days free trial option</span>
                    <svg
                        className="mt-px"
                        width="6"
                        height="9"
                        viewBox="0 0 6 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="m1 1 4 3.5L1 8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </p>
            </a>

            <h1 className="text-center text-[40px] leading-[48px] md:text-6xl md:leading-[70px] mt-6 font-semibold max-w-4xl bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                Turn thoughts into polished, responsive websites — instantly.
            </h1>

            <p className="text-center text-base max-w-xl mt-3 text-white/80">
                Create, customize, and publish faster than ever with intelligent
                design powered by AI. No templates. Just results.
            </p>

            <form
                onSubmit={onSubmitHandler}
                className="bg-white/10 max-w-2xl w-full rounded-xl p-4 mt-10 border border-indigo-600/70 focus-within:ring-2 ring-indigo-500 transition-all"
            >
                <textarea
                    onChange={(e) => setInput(e.target.value)}
                    className="bg-transparent outline-none text-gray-300 resize-none w-full"
                    rows={4}
                    placeholder="Describe your website in detail (sections, style, features)"
                    required
                />
                <div className="flex flex-wrap gap-3 justify-end">
                    <button
                        type="button"
                        onClick={() => navigate("/community")}
                        className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/15 text-white/90 border border-white/10"
                    >
                        View examples
                    </button>
                    <button className="flex items-center gap-2 bg-gradient-to-r from-[#CB52D4] to-indigo-600 rounded-md px-4 py-2">
                        {!loading ? (
                            "Create with AI"
                        ) : (
                            <>
                                Creating{" "}
                                <Loader2Icon className="animate-spin size-4 text-white" />
                            </>
                        )}
                    </button>
                </div>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-16 md:gap-20 mx-auto mt-16">
                <img
                    className="h-8 w-auto grayscale brightness-[100] invert contrast-200"
                    src="/assets/logos/framer.svg"
                    alt="Framer logo"
                />
                
                <div className="flex items-center gap-2 text-white/80 grayscale brightness-200 contrast-200">
                   <SiHuawei className="text-3xl" />
                   <span className="font-bold text-xl tracking-widest uppercase">HUAWEI</span>
                </div>

                <img
                    className="h-8 w-auto grayscale brightness-[100] invert contrast-200"
                    src="/assets/logos/instagram.svg"
                    alt="Instagram logo"
                />
                
                <img
                    className="h-8 w-auto grayscale brightness-[100] invert contrast-200"
                    src="/assets/logos/microsoft.svg"
                    alt="Microsoft logo"
                />
                
                <div className="flex items-center gap-2 text-white/80 grayscale brightness-200 contrast-200">
                    <SiWalmart className="text-3xl" />
                    <span className="font-bold text-xl tracking-tighter">Walmart</span>
                    <span className="text-yellow-400 -ml-1 text-2xl mb-2">*</span>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Home;
