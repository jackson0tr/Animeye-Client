'use client';

import { NextIntlClientProvider } from 'next-intl';

export default function IntlProvider({ 
  messages, 
  locale, 
  children 
}: { 
  messages: Record<string, string>; 
  locale: string; 
  children: React.ReactNode 
}) {
  return (
    <NextIntlClientProvider timeZone="UTC" locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}