import { Filter } from "lucide-react";
import Facets from "./facets";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function MobileFacets(props) {
  const { handleFilterChange } = props;
  return (
    <Sheet>
      <SheetTrigger className="flex gap-2 items-center bg-muted px-4 py-2 m-4 border dark:border-zinc-700 rounded-sm">
        <Filter className="w-4 h-4" /> Filters
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription>
            <Facets onFilterChange={handleFilterChange} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
