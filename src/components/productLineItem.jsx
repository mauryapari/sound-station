import {IndianRupee, X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ProductLineItem (props) {
    const {item, removeItemFromCart} = props;
    return (
        <div className="flex items-start py-4 border-b">
          <Image
            src={item.image}
            alt={item.name}
            className="w-16 h-16"
            width="60"
            height="60"
            style={{ aspectRatio: "60/60", objectFit: "cover" }}
          />
          <div className="ml-4">
            <h3 className="text-sm font-medium">{item.name}</h3>
            <p className="flex items-center text-sm text-blue-600"><IndianRupee className="w-4 h-4"/>{item.price} x{item.quantity}</p>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto" onClick={() => removeItemFromCart(item.slug)}>
            <X className="w-5 h-5" />
          </Button>
        </div>
    )
}