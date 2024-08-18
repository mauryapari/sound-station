import allProduct from "../../../../public/products.json";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import PdpProduct from "@/components/pdpProduct";
import { formatToSentenceCase } from "@/lib/utils";

export default function Product(props) {
  const { params } = props;
  const product = allProduct.find((item) => item.slug === params.slug);
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <PdpProduct product={product} />
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container flex items-start gap-8 px-4 md:px-36">
          <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
            <AccordionItem  value="item-1">
              <AccordionTrigger>Product Details</AccordionTrigger>
              <AccordionContent className="leading-8">
                {product.details.map((item) => (
                  <p className="mb-4 text-sm">{item}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How To Apply</AccordionTrigger>
              <AccordionContent>
                {product.howToApply.map((item, index) => (
                  <p className="mb-4 ml-4 text-sm" key={index}>
                    {index+1}.  {item}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Ingidients</AccordionTrigger>
              <AccordionContent>{formatToSentenceCase(product.ingredients)}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}
