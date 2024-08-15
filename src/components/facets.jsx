import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

export default function Facets() {
    return (
        <aside className="w-80 border-r dark:border-zinc-700">
        <div className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Filters</h2>
            <Button size="icon" variant="ghost">
              {/* <PencilIcon className="w-6 h-6" /> */}
            </Button>
          </div>
          <div className="relative">
            {/* <SearchIcon className="absolute left-2.5 top-3 h-4 w-4 text-zinc-500 dark:text-zinc-400" /> */}
            {/* <Input
              className="pl-8"
              placeholder="Search messages..."
              type="search"
            /> */}
            <Button
              className="absolute right-2.5 top-3"
              size="icon"
              variant="ghost"
            />
          </div>
          <div className="space-y-2">
            Prices
          </div>
        </div>
      </aside>
    )
}