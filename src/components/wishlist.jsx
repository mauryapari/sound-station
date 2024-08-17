"use client";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { useGlobal } from "@/context/globalContext";
export default function Wishlist() {
  const { wishlist } = useGlobal();
  return (
    <Link href="/wishlist" className="relative">
      <Heart className="h-6 w-6" />
      {wishlist.length>0 && (
        <Badge
          variant={"destructive"}
          className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs px-2"
        >
          {wishlist.length}
        </Badge>
      )}
    </Link>
  );
}
