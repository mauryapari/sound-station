"use client";
import { IndianRupee, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Badge } from "./ui/badge";
import { useGlobal } from "@/context/globalContext";
import { Button } from "./ui/button";
import ProductLineItem from "./productLineItem";
import Link from "next/link";
import { useState } from "react";
import { Progress } from "./ui/progress";
import Image from "next/image";
import { formatToINR } from "@/lib/utils";

export default function MiniCart() {
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const { cartItems, removeItemFromCart, totalQuantity, totalPrice } =
    useGlobal();
  return (
    <Sheet open={isMiniCartOpen} onOpenChange={setIsMiniCartOpen}>
      <SheetTrigger asChild>
        <span className="relative">
          <ShoppingCart className="h-6 w-6" />
          {totalQuantity > 0 && (
            <Badge
              variant={"destructive"}
              className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs px-2"
            >
              {totalQuantity}
            </Badge>
          )}
        </span>
      </SheetTrigger>
      <SheetContent size="lg" className="p-6">
        <div className="flex items-center justify-between pb-4 border-b">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
        </div>
        <div className="py-4">
          <p className="text-sm text-muted-foreground mb-1">
            {totalPrice < 2000
              ? `Add ₹${2000 - totalPrice} more to qualify for free shipping`
              : "You are eligible for free shipping"}
          </p>
          <Progress value={totalPrice} max={2000} className="bg-blue-200 h-2" />
        </div>
        {cartItems.length ? (
          cartItems.map((item) => (
            <ProductLineItem
              key={item.slug}
              item={item}
              removeItemFromCart={removeItemFromCart}
            />
          ))
        ) : (
          <div className="flex flex-col gap-4 py-16 items-center">
            <Image
              alt="Empty Cart"
              height="220"
              src="/assets/empty-cart.webp"
              width="220"
            />
            Your Cart is Empty{" "}
            <Button variant="link" onClick={() => setIsMiniCartOpen(false)}>
              <Link href="/product" className="w-full">
                Go to Shop
              </Link>
            </Button>
          </div>
        )}
        <div className="py-4 border-b">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Subtotal:</span>
            <span className="text-sm font-medium flex items-center">
              <IndianRupee className="w-4 h-4" />
              {formatToINR(totalPrice)}
            </span>
          </div>
        </div>
        <div className="mt-4 space-y-2 gap-2 flex flex-col">
          <Button
            className="w-full bg-black text-white"
            onClick={() => setIsMiniCartOpen(false)}
          >
            <Link className="w-full" href="/cart">
              View Cart
            </Link>
          </Button>
          <Button variant="outline" className="w-full border border-black">
            Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
