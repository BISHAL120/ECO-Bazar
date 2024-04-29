"use client";
import Breadcrumb from "@/components/Shared/Breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

const Cart = () => {
  const pathname = usePathname();
  return (
    <div>
      <Breadcrumb routes={pathname} />
      <div>Cart</div>
    </div>
  );
};

export default Cart;
