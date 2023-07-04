import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { Roboto_Mono } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";
const robotomono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={robotomono.className}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
