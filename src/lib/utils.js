import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatToINR(amount) {
  let number = String(amount).split(".");
  return (
    number[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,") +
    (number[1] ? "." + number[1] : "")
  );
}

export function formatToSentenceCase (string) {
  var rg = /(^\w{1}|\.\s*\w{1})/gi;
  
  // Use replace with a callback function to capitalize the matched characters
  return string?.replace(rg, function (toReplace) {
    return toReplace.toUpperCase();
  });
};
