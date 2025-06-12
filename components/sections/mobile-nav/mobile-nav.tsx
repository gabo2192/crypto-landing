import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="w-6 h-6" />
          <span className="sr-only">Open navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            Navigation menu for mobile devices.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-10 px-4">
          <Link href="/">Home</Link>
          <Link href="/">Documentation</Link>
          <Link href="/">About us</Link>
          <Link href="/">Contact us</Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
