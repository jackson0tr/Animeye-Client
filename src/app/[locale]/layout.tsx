import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import { ReactNode } from "react";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";
import { locales } from "@/services/config";
import { QueryParamsClient } from "@/services/providers/query-params-provuder";
import IntlProvider from "@/services/providers/intl-provider";
import { ThemeProvider } from "@/lib/helpers/theme-provider";


const cairo = Cairo({
    variable: "--font-arabic",
    subsets: ["arabic"],
    weight: ["400", "500", "700"],
    display: "swap",
});

const inter = Inter({
    variable: "--font-english",
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
});

type Props = {
    children: ReactNode;
    params: { locale: string };
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
    title: "Animeye | منصة وفرة",
    description: "منصة خدمات تجمع بين المحترفين والعملاء في مجال الاستشارات",
};

export default async function LocaleLayout({ children, params }: Props) {

    const { locale } = await params;
    setRequestLocale(locale);

    let messages;
    messages = (await import(`../../../messages/${locale}.json`)).default;

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
            <body
                className={`${cairo.variable} ${inter.variable} antialiased`}
            >
                {/* <ToastContainer position="top-right" autoClose={3000} /> */}
                <QueryParamsClient>
                    <IntlProvider messages={messages} locale={locale}>
                        <ThemeProvider>
                            {children}
                        </ThemeProvider>
                    </IntlProvider>
                </QueryParamsClient>
            </body>
        </html>
    );
}
