import { notFound } from "next/navigation";
import { getRequestConfig, getLocale } from "next-intl/server";
import { locales } from "../services/config";

export default getRequestConfig(async () => {
  const locale = await getLocale(); // No need to pass request

  if (!locales.includes(locale as typeof locales[number])) notFound();

  return {
    messages: (
      await (locale === "en"
        ? import("../../messages/en.json")
        : import(`../../messages/${locale}.json`))
    ).default,
    timeZone: "Africa/Cairo",
  };
});