import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Waves } from "lucide-react";
export default function About() {
  return (
    <section className="w-full py-8 md:py-24 lg:py-32 bg-muted">
      <div className="container flex items-start gap-8 px-4 md:px-6">
        <Card className=" w-full p-20 pb-16 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          <CardHeader className=" flex-row justify-center">
            <Waves className="w-10 h-10" />
          </CardHeader>
          <CardContent className="p-4 text-center">
            <h2 className="m-4 text-4xl hover:text-gray-700 transition-all duration-200">
              <span className="border-b-2 border-gray-400">
                We are Beautya
              </span>
            </h2>

            <p className="mt-12 w-[80%] mx-auto text-gray-600 hover:text-gray-700 transition-all duration-200">
              Your one-stop destination for all things beauty. Whether
              you&apos;re a skincare enthusiast, makeup lover, or simply looking
              for the best products, we&apos;ve got everything you need. From the
              latest beauty trends to in-depth product guides, we&apos;re here to
              help you look and feel your best.
            </p>

            <p className="mt-12 w-[80%] mx-auto text-gray-600 hover:text-gray-700 transition-all duration-200">
              Our site is carefully curated and organized to make your shopping
              experience effortless, allowing you to explore a wide range of
              beauty products by brand, category, or skin type.
            </p>
            <p className="mt-12 w-[80%] mx-auto text-gray-600 hover:text-gray-700 transition-all duration-200">
              Our mission is to be your go-to source for all things
              beauty—delivering valuable tips, expert product reviews, and
              essential beauty information to enhance your routine. Have any
              questions or suggestions? We&apos;re always here to help. Don&apos;t
              hesitate to reach out and connect with us.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
