import { Button } from "@/components/ui/button"
import { Heart, ShoppingBag } from "lucide-react"
import Image from "next/image"
import product from '../../../public/products.json';

export default function Product() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex items-start gap-8 px-4 md:px-6">
        <Image
          src={product[0].image}
          width="500"
          height="500"
          alt="Sneaker Image"
          className="aspect-[1/1] object-cover object-center"
        />
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter">{product[0].name}</h1>
          <div className="flex space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">$120</p>
          <p className="text-base text-zinc-500 dark:text-zinc-400">
            {product[0].details}
            These classic sneakers are perfect for any occasion. They are comfortable, stylish, and durable. Made with
            high-quality materials, they are designed to last.
          </p>
          <div className="flex gap-6">

          <Button className="w-full flex gap-4 h-12 rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900">
            Add to Cart <ShoppingBag className="h-6 w-6"/>
          </Button>
          <Button variant="outline" className="w-full h-12 rounded-md shadow-sm hover:bg-red-200 flex gap-4">
            Add to wishlist <Heart className="h-6 w-6"/>
          </Button>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Fabric: 100% Cotton. Care: Machine wash cold, tumble dry low.
          </p>
        </div>
      </div>
    </section>
  )
}