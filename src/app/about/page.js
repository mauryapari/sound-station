import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Speaker } from "lucide-react";
export default function About() {
  return (
    <section className="w-full py-8 md:py-24 lg:py-32 bg-muted">
      <div className="container flex items-start gap-8 px-4 md:px-6">
        <Card className=" w-full p-20 pb-16 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
          <CardHeader className=" flex-row justify-center">
            <Speaker className="w-10 h-10" />
          </CardHeader>
          <CardContent className="p-4 text-center">
            <h2 className="m-4 text-4xl hover:text-gray-700 transition-all duration-200">
              <span className="border-b-2 border-gray-400">
                We are Sound Station
              </span>
            </h2>

            <p className="mt-12 w-[80%] mx-auto text-gray-600 hover:text-gray-700 transition-all duration-200">
              Your ultimate destination for everything headphones. Whether
              you&apos;re an audiophile, a casual listener, or a tech enthusiast,
              we&apos;ve got you covered. Here, you&apos;ll find the latest news, in-depth
              device specifications, and comprehensive articles that explore
              every aspect of the headphone world.
            </p>

            <p className="mt-12 w-[80%] mx-auto text-gray-600 hover:text-gray-700 transition-all duration-200">
              We meticulously curate and organize content by manufacturer,
              making it easy for you to discover the best products and stay
              informed.
            </p>
            <p className="mt-12 w-[80%] mx-auto text-gray-600 hover:text-gray-700 transition-all duration-200">
              Our mission is to be your go-to resource for all things
              headphones—providing you with valuable insights, expert reviews,
              and links to helpful materials that enhance your audio experience.
              Have questions or suggestions? We&apos;d love to hear from you. Feel
              free to reach out and connect with us.{" "}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
