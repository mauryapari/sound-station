import Image from "next/image";
export default function About() {
  return (
    <section className="w-full py-8 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            src="/assets/riceWash-3.avif"
            width="600"
            height="400"
            alt="Headphones"
            className="animate-slideInFromLeft"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="animate-slideUpFromBottom">
              <h1 className="text-2xl font-sans sm:text-5xl xl:text-6xl/snug">
                Our Story
              </h1>
              <p className="mt-12 w-[600px] mx-auto text-muted-foreground md:text-xl">
                Your one-stop destination for all things beauty. Whether
                you&apos;re a skincare enthusiast, makeup lover, or simply
                looking for the best products, we&apos;ve got everything you
                need. From the latest beauty trends to in-depth product guides,
                we&apos;re here to help you look and feel your best.
              </p>

              <p className="mt-12 w-[600px] mx-auto text-muted-foreground md:text-xl">
                Our site is carefully curated and organized to make your
                shopping experience effortless, allowing you to explore a wide
                range of beauty products by brand, category, or skin type.
              </p>
              <p className="mt-12 w-[600px] mx-auto text-muted-foreground md:text-xl">
                Our mission is to be your go-to source for all things
                beauty—delivering valuable tips, expert product reviews, and
                essential beauty information to enhance your routine. Have any
                questions or suggestions? We&apos;re always here to help.
                Don&apos;t hesitate to reach out and connect with us.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
