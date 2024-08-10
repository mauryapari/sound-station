/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AokCsMvkYGf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import product from "../../../public/products.json";
export default function PlpPage() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
        {product.map((item) => {
          <PlpProductCard product={item} />;
        })}
      </div>
    </div>
  );
}

function PlpProductCard({product}) {
  return (
    <Card
      key="1"
      className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200"
    >
      <Image
        alt="Profile picture"
        className="object-cover w-full"
        height="320"
        src="/placeholder.svg"
        style={{ aspectRatio: "320/320", objectFit: "cover" }}
        width="320"
      />
      <CardContent className="p-4">
        <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">
          Emily Johnson
        </h2>
        <h3 className="text-gray-500 hover:text-gray-600 transition-all duration-200">
          Front-end Developer
        </h3>
        <p className="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
          Passionate about creating interactive user interfaces.
        </p>
        <div className="flex mt-4 space-x-2">
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
        </div>
      </CardContent>
    </Card>
  );
}
