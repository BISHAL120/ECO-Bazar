"use client";
import Breadcrumb from "@/components/Shared/Breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

const Checkout = () => {
  const pathname = usePathname();
  return (
    <div>
      <Breadcrumb routes={pathname} />
      <div>Checkout</div>
    </div>
  );
};

export default Checkout;
