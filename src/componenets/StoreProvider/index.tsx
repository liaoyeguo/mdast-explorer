"use client";

import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

const StoreProvider = ({ children }: PropsWithChildren<{}>) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default StoreProvider;
