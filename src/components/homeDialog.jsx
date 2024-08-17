"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CustomSelect } from "./customSelect";

export function HomeDialog() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  useEffect(() => {
    const hasSeenDialog = sessionStorage.getItem("hasSeenDialog");
    if (!hasSeenDialog) {
      setIsDialogVisible(true);
    }
  }, []);

  const handleCloseDialog = () => {
    setIsDialogVisible(false);
    sessionStorage.setItem("hasSeenDialog", "true");
  };

  return (
   isDialogVisible &&  <Dialog open={isDialogVisible} onOpenChange={handleCloseDialog}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="leading-7">
            Help Us Curate Your <br /> Experience
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col justify-start gap-4">
            <Label>What is your skin type?</Label>
            <CustomSelect
              options={["Dry", "Oily", "Combination", "Sensitive", "Normal"]}
            />
          </div>
          <div className="flex flex-col justify-start gap-4">
            <Label>What are your primary skin concerns?</Label>
            <CustomSelect
              options={[
                "Acne",
                "Wrinkles",
                "Dark Spots",
                "Dullness",
                "Redness",
              ]}
            />
          </div>
          <div className="flex flex-col justify-start gap-4">
            <Label>What is your budget for beauty products?</Label>
            <CustomSelect
              options={["₹500 - ₹1000", "₹1000 - ₹3000", "₹3000+"]}
            />
          </div>
          <div className="flex flex-col justify-start gap-4">
            <Label htmlFor="prefrence">
              Do you have any brand preferences?
            </Label>
            <Input id="prefrence" placeholder="e.g., Korean, French, etc." />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-[#ff69b4ee] hover:bg-[#ff69b4]">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
