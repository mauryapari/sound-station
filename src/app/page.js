"use client";
import Image from "next/image";
import Link from "next/link";
import product from "../../public/products.json";
import { Contact, DollarSign, MoveRight, Package } from "lucide-react";
import { HomeDialog } from "@/components/homeDialog";
import { useInView, useIsVisible } from "@/hooks/useInView";
import { useRef } from "react";

export default function Home() {
  const ref1 = useRef();
  const ref2 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);
  return (
    <>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="animate-slideInFromLeft">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/snug">
                    Be Your Kind <br /> of Beauty
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl mt-4">
                    Luxury, Science-led Natural Skincare made from high quality
                    plant extracts.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    SHOP NOW
                    <MoveRight className="ml-4 w-6 h-6" />
                  </Link>
                </div>
              </div>
              <Image
                src="/assets/products.png"
                width="600"
                height="400"
                alt="Headphones"
                className="animate-slideUpFromBottom"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div
            ref={ref1}
            className={`container px-4 md:px-6 transition-opacity ease-in duration-700 ${
              isVisible1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore Our Beauty Collection
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At our beauty emporium, we offer a carefully curated selection
                  of premium products and services to help you elevate your
                  beauty routine to the next level.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              {product.slice(0, 6).map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2"
                >
                  <Link
                    href={`/product/${item.slug}`}
                    className="absolute inset-0 z-10"
                    prefetch={false}
                  >
                    <span className="sr-only">View</span>
                  </Link>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={500}
                    height={400}
                    className="object-cover w-full h-64"
                    style={{ aspectRatio: "500/400", objectFit: "cover" }}
                  />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div ref={ref2} className={`container px-4 md:px-6 transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover the Difference
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At our beauty emporium, we offer a carefully curated selection
                  of premium products and services to help you elevate your
                  beauty routine to the next level.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <div className="p-4 bg-background">
                  <Package className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold">Product Sampling</h3>
                  <p className="text-sm text-muted-foreground">
                    Try before you buy! Explore our range of sample products to
                    find your perfect match.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <div className="p-4 bg-background">
                  <DollarSign className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold">
                    Flexible Payment Options
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Shop with ease using our flexible payment plans, designed to
                    fit your beauty budget.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <div className="p-4 bg-background">
                  <Contact className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold">Expert Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Get personalized skincare advice from our beauty experts to
                    find the right products for your unique needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <HomeDialog />
    </>
  );
}
