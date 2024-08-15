/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AokCsMvkYGf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { IndianRupee } from "lucide-react";

import product from "../../../public/products.json";
import Facets from "@/components/facets";

export default function PlpPage() {
  return (
    <div key="1" className="flex bg-white border-t dark:bg-zinc-800">
      <Facets/>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
        {product.map((item) => (
          <div
            key={item.slug}
            className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2"
          >
            <PlpProductCard product={item} />
          </div>
        ))}
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
          alt="Profile picture"
          className="object-cover w-full"
          height="320"
          src={product.image}
          style={{ aspectRatio: "320/320", objectFit: "cover" }}
          width="320"
        />
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">
            {product.name}
          </h2>
          <h3 className=" flex items-center text-gray-500 hover:text-gray-600 transition-all duration-200">
            <IndianRupee className="w-4 h-4" /> {product.price}
          </h3>
          <p className="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
            {`${product.details.slice(0,75)}...`}
          </p>
          {/* <div className="flex mt-4 space-x-2">
          <Button
            className="w-full hover:bg-gray-700 hover:text-white transition-all duration-200"
            size="sm"
          >
            Follow
          </Button>
          <Button
            className="w-full hover:border-gray-700 hover:text-gray-700 transition-all duration-200"
            size="sm"
            variant="outline"
          >
            Message
          </Button>
        </div> */}
        </CardContent>
      </Card>
    </Link>
  );
}
