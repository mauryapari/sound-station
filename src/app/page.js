import Image from "next/image";
import Link from "next/link";
import product from "../../public/products.json";
import { EarIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Begin Your Audiophile
                  Journey
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Experience the ultimate in performance and style with the
                  latest addition to our headphones lineup.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
            <Image
              src="/assets/headphones_a_1.webp"
              width="600"
              height="400"
              alt="Headphones"
              // className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Explore Our Sound Brand Collection
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse through our selection of the latest and greatest
                accessories, each with their own unique style and performance
                capabilities.
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
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Hear the Difference
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At our headphone emporium, we provide an extensive selection of top-tier products and services to ensure you experience audio like never before.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <div className="p-4 bg-background">
                <EarIcon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold">Product Demo</h3>
                <p className="text-sm text-muted-foreground">
                  Get hands-on experience with our products and discover the difference for yourself.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <div className="p-4 bg-background">
                <DollarSignIcon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold">Flexible Payment Plans</h3>
                <p className="text-sm text-muted-foreground">
                Accessible financing options to bring your perfect pair of headphones within reach.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <div className="p-4 bg-background">
                <WrenchIcon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold">Expert Support</h3>
                <p className="text-sm text-muted-foreground">
                  Ensure your headphones deliver peak performance with our professional support and maintenance services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function WrenchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
