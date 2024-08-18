"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { Progress } from "@/components/ui/progress";
import { useGlobal } from "@/context/globalContext";
import { IndianRupee, Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { formatToINR } from "@/lib/utils";

export default function Cart() {
  const {
    totalPrice,
    cartItems,
    addItemToCart,
    clearCart,
    removeItemFromCart,
    checkoutPrice
  } = useGlobal();
  return (
    <section className="w-full py-8 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="mb-10">
          <h1 className="font-sans text-5xl">Shopping Cart</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="sm:basis-9/12">
            <div className="py-4">
              <p className="text-sm text-muted-foreground mb-1">
                {totalPrice < 2000
                  ? `Add ₹${
                      2000 - totalPrice
                    } more to qualify for free shipping`
                  : "You are eligible for free shipping"}
              </p>
              <Progress
                value={totalPrice}
                max={2000}
                className="bg-blue-200 h-2"
              />
            </div>
            {cartItems.length ? (
              <>
                <Table className="border-y border-zinc-300">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead></TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead className="text-right"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.slug}>
                        <TableCell>
                          <Image
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16"
                            width="60"
                            height="60"
                            style={{ aspectRatio: "60/60", objectFit: "cover" }}
                          />
                        </TableCell>
                        <TableCell>
                          <h3 className="text-sm font-medium">{item.name}</h3>
                        </TableCell>
                        <TableCell>
                          <p className="flex items-center text-sm">
                            <IndianRupee className="w-4 h-4" />
                            {formatToINR(item.price)}
                          </p>
                        </TableCell>
                        <TableCell>
                          <div className="flex w-[100px] items-center rounded-full border border-zinc-700">
                            <Button
                              size="icon"
                              variant="ghost"
                              className="pl-1 hover:bg-transparent"
                              disabled={item.quantity<=1}
                              onClick={() => addItemToCart(item, -1)}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <Input
                              className="w-[30px] p-[5px] bg-transparent h-4 border-none"
                              value={item.quantity}
                              readonly
                            />
                            <Button
                              size="icon"
                              variant="ghost"
                              className="pr-1 hover:bg-transparent"
                              disabled={item.quantity>=2}
                              onClick={() => addItemToCart(item)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell className="text-right text-zinc-700">
                          <Button
                            variant="ghost"
                            className="ml-auto "
                            onClick={() => removeItemFromCart(item.slug)}
                          >
                            <X className="w-5 h-5" />
                            Remove
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-4 text-right">
                  <Button variant="outline" onClick={clearCart}>
                    Clear Cart
                  </Button>
                </div>
              </>
            ) : (
              <div className="mt-4 text-xl text-center text-muted-foreground">
                Cart is Empty
              </div>
            )}
          </div>
          <div className="sm:basis-3/12">
            <Card className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
              <CardHeader>
                <h2 className="flex justify-between pb-2 border-b border-zinc-200 text-xl transition-all duration-200">
                  <span>Subtotal</span>
                  <span className="flex items-center gap-2 text-sm">
                    <IndianRupee className="w-4 h-4" />
                    {formatToINR(totalPrice)}
                  </span>
                </h2>
              </CardHeader>
              <CardContent className="p-4 px-6 text-center text-xs">
                <div className="flex justify-between">
                  <span>Shipping Charges</span>
                  <span className="flex items-center gap-2 mb-2">
                    <IndianRupee className="w-4 h-4" />
                    {totalPrice <= 2000 ? formatToINR(100): <span><span className="text-zinc-400 line-through">100</span> 0</span> }
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span>Convinence Fee</span>
                  <span className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4" />
                    {formatToINR(60)}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex-col items-stretch">
                <div className="flex justify-between mb-4 pt-2 border-t border-zinc-200">
                  <span>Total</span>
                  <span className="flex items-center gap-2 text-xl">
                    <IndianRupee className="w-4 h-4" />
                    {formatToINR(checkoutPrice)}
                  </span>
                </div>
                <Button>Proceed to Checkout</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
