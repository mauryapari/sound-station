import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

import brands from "../../public/brands.json";
import prices from "../../public/prices.json";

import { useEffect, useState } from "react";

export default function Facets(props) {
  const {onFilterChange} = props;
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);

  useEffect(() => {
    const savedFilters = JSON.parse(localStorage.getItem("filters"));
    if (savedFilters) {
      setSelectedBrand(savedFilters.brand || []);
      setSelectedPrice(savedFilters.price || []);
    }
  }, []);

  const handleBrandChange = (isChecked, value) => {
    const updatedBrands = isChecked
      ? [...selectedBrand, value]
      : selectedBrand.filter((brand) => brand !== value);
    setSelectedBrand(updatedBrands);
    updateFilters(updatedBrands, selectedPrice);
  };

  const handlePriceChange = (isChecked, value) => {
    const updatedPrices = isChecked
      ? [...selectedPrice, value]
      : selectedPrice.filter((price) => price !== value);
    setSelectedPrice(updatedPrices);
    updateFilters(selectedBrand, updatedPrices);
  };

  const updateFilters = (brand, price) => {
    const filters = { brand, price };
    localStorage.setItem("filters", JSON.stringify(filters)); // Store in localStorage
    onFilterChange(filters)
  };
  const removeAllFilters = () => {
    setSelectedBrand([]);
    setSelectedPrice([]);
    onFilterChange({})
    localStorage.removeItem("filters");
  }

  return (
    <aside className="md:w-80">
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Filters</h2>
          <Button className="text-xs md:text-sm" onClick={removeAllFilters}>Clear Filters</Button>
        </div>
        <div className="relative">
          <Button
            className="absolute right-2.5 top-3"
            size="icon"
            variant="ghost"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-semibold mb-2">Brand</h3>
          <div className="grid gap-2">
            {brands.map((brand) => (
              <div key={brand.id} className="flex items-center gap-2">
                <Checkbox
                  id={brand.id}
                  checked={selectedBrand.includes(brand.id)}
                  onCheckedChange={(e) => handleBrandChange(e, brand.id)}
                />
                <Label htmlFor={brand.id} className="font-normal">
                  {brand.name}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-base font-semibold mb-2">Price Range</h3>
          <div className="grid gap-2">
            {prices.map((price) => (
              <div key={price.id} className="flex items-center gap-2">
                <Checkbox
                  id={price.id}
                  checked={selectedPrice.includes(price.id)}
                  onCheckedChange={(e) => handlePriceChange(e, price.id)}
                />
                <Label htmlFor={price.id} className="font-normal">
                  {price.name}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
