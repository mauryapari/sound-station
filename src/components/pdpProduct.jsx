"use client";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Rating from "@/components/ratings";
import { useGlobal } from "@/context/globalContext";
import { formatToINR, formatToSentenceCase } from "@/lib/utils";
import { Badge } from "./ui/badge";
export default function PdpProduct(props) {
  const { product } = props;
  const { addItemToCart, addItemToWishlist } = useGlobal();
  return (
    <div className="container flex flex-col sm:flex-row items-start gap-8 px-4 md:px-6">
      <Image
        src={product?.image}
        width="500"
        height="500"
        alt="Sneaker Image"
        className="aspect-[1/1] object-cover object-center"
      />
      <div className="basis-1/2 space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter">{product?.name}</h1>
        <div className="flex space-x-1">
          <Badge variant="outline" className="bg-blue-300 text-blue-500">{product.quantityInStock} in Stock</Badge>
          <Rating
            rating={product.reviewRating}
            ratingCount={product.reviewCount}
          />
        </div>
        <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          ₹ {formatToINR(product?.price)}
        </p>
        <p className="text-base text-zinc-500 dark:text-zinc-400">
          {product.shortDescription}
        </p>
        <div className="flex gap-6">
          <Button
            className="w-full flex gap-4 h-12 rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900"
            onClick={() => addItemToCart(product)}
          >
            Add to Cart <ShoppingBag className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            className="w-full h-12 rounded-md shadow-sm hover:bg-red-200 flex gap-4"
            onClick={() => addItemToWishlist(product)}
          >
            Add to wishlist <Heart className="h-6 w-6" />
          </Button>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          {formatToSentenceCase(product.ingredients).slice(0, 100)}
          ...
        </p>
      </div>
    </div>
  );
}
