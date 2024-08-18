/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AokCsMvkYGf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { IndianRupee } from "lucide-react";

import product from "../../../public/products.json";
import Facets from "@/components/facets";
import MobileFacets from "@/components/mobileFacets";
import { useEffect, useState } from "react";
import { formatToINR } from "@/lib/utils";

export default function PlpPage() {
  const [filters, setFilters] = useState();

  useEffect(() => {
    const savedFilters = JSON.parse(localStorage.getItem("filters"));
    if (savedFilters) {
      setFilters(savedFilters);
    }
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const matchedProducts = product.filter((item) => {
    const matchedBrand = filters?.brand?.length
      ? filters?.brand?.includes(item.brand)
      : true;

    return matchedBrand;
  });

  return (
    <div className="border-t dark:bg-zinc-800">
      <div className="my-4 md:hidden mx-auto max-w-5xl">
        <MobileFacets onFilterChange={handleFilterChange} />
      </div>
      <div key="1" className="flex bg-white">
        <div className="hidden md:block md:border-r dark:border-zinc-700">
          <Facets onFilterChange={handleFilterChange} />
        </div>
        {matchedProducts.length > 0 ? (
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 animate-slideUpFromBottom">
            {matchedProducts.map((item) => (
              <div
                key={item.slug}
                className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2"
              >
                <PlpProductCard product={item} />
              </div>
            ))}
          </div>
        ) : (
          <span className="mx-auto my-16 max-w-5xl text-2xl text-center">No Products Found.</span>
        )}
      </div>
    </div>
  );
}

function PlpProductCard(props) {
  const { product } = props;
  return (
    <Link href={`/product/${product.slug}`}>
      <Card
        key="1"
        className="rounded-lg overflow-hidden shadow-none border-none max-w-sm mx-auto"
      >
        <Image
          alt={product.slug}
          className="object-cover w-full"
          height="320"
          src={product.image}
          style={{ aspectRatio: "320/320", objectFit: "cover" }}
          width="320"
        />
        <CardContent className="p-4">
          <h2 className="text-xl mb-2 font-bold hover:text-gray-700 transition-all duration-200">
            {product.name}
          </h2>
          <h3 className="flex items-center text-green-700 hover:text-gray-600 transition-all duration-200">
            <IndianRupee className="w-4 h-4" /> 
            {formatToINR(product.price)}
          </h3>
          <p className="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
            {`${product.shortDescription.slice(0, 75)}...`}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
