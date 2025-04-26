"use client";

import React from "react";
import NextAdapterApp from "next-query-params/app";
import { QueryParamProvider } from "use-query-params";

export const QueryParamsClient = ({ children }: { children: React.ReactNode }) => {
  return <QueryParamProvider adapter={NextAdapterApp}>{children}</QueryParamProvider>;
};