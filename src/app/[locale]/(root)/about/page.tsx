import React from "react";
// import { useTranslations } from "next-intl";
import { unstable_setRequestLocale as Unstable } from "next-intl/server";
import FAQ from "@/components/organisms/faq";
import StorySection from "@/components/organisms/about";


export const dynamic = "force-dynamic";

type Props = {
    // params: { locale: string };
    params: Promise<{ locale: string }>;
};

// export async function generateMetadata({ params: { locale } }: Omit<Props, "children">) {
//     const t = await getTranslations({ locale, namespace: "Navigation" });

//     return {
//         title: t("login"),
//     };
// }

const AboutPage = async({ params }: Props) => {
    const resolvedParams = await params; // ✅ Unwrapping if it's a promise
    const { locale } = resolvedParams;
    // const { locale } = await params;
    Unstable(locale);
    
    return (
        <StorySection />
    );
};

export default AboutPage;