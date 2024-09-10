import { WavesIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12">
    <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:gap-12">
      <div className="flex flex-col items-start gap-4">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <WavesIcon className="h-6 w-6" />
          <span className="text-xl font-bold">Glow Inc</span>
        </Link>
        <p className="text-muted-foreground">Crafting innovative solutions for a better tomorrow.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-8">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Company</h4>
          <nav className="flex flex-col space-y-1">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              About Us
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Careers
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              News
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Resources</h4>
          <nav className="flex flex-col space-y-1">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Help Center
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Community
            </Link>
          </nav>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-8">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Legal</h4>
          <nav className="flex flex-col space-y-1">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Cookie Policy
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Contact</h4>
          <nav className="flex flex-colspace-y-1">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Support
            </Link>
          </nav>
        </div>
      </div>
    </div>
  </footer>
  );
}
