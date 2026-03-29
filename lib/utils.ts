import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string, locale = "de-AT"): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(dateString: string, locale = "de-AT"): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function formatMonth(dateString: string, locale = "de-AT"): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, { month: "short" });
}

export function formatDay(dateString: string): string {
  return new Date(dateString).getDate().toString().padStart(2, "0");
}

export function spotsPercent(left: number, total: number): number {
  return Math.round(((total - left) / total) * 100);
}

export function categoryColor(category: string): string {
  const map: Record<string, string> = {
    Laufsport: "bg-red-100 text-red-700",
    Wandern: "bg-green-100 text-green-700",
    Mountainbike: "bg-orange-100 text-orange-700",
    Skitouren: "bg-blue-100 text-blue-700",
    Wintersport: "bg-sky-100 text-sky-700",
    Klettern: "bg-purple-100 text-purple-700",
    "Nordic Walking": "bg-teal-100 text-teal-700",
    Radtouren: "bg-yellow-100 text-yellow-700",
    Umwelt: "bg-emerald-100 text-emerald-700",
    Gemeinschaft: "bg-pink-100 text-pink-700",
  };
  return map[category] ?? "bg-gray-100 text-gray-700";
}
