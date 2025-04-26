import { Suspense } from "react";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";
import { locales } from "@/services/config";
import MainLayout from "@/components/templates/main-layout";
import Loader from "@/components/atoms/Loading";
import { AnimatePresence } from "framer-motion";

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
    children,
    params
}: Props) {
    const resolvedParams = await params;
    const { locale } = resolvedParams;
    setRequestLocale(locale);

    return (
        <Suspense fallback={<Loader />}>
            <AnimatePresence mode="wait">
                <MainLayout>{children}</MainLayout>
            </AnimatePresence>
        </Suspense>
    );
}