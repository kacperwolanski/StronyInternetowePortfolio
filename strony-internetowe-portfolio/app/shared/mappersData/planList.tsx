import { SingleFeatureType } from "@/app/service/components/SingleFeature";

export interface SinglePlan {
  title: string;
  destination: string;
  price: number;
  features: SingleFeatureType[];
}

export const planList: SinglePlan[] = [
  {
    title: "Podstawowy WP",
    destination: "Małe firmy, osoby prywatne",
    price: 900,
    features: [
      { isIncluded: true, title: "Prosta strona wizytówkowa (One Page)" },
      { isIncluded: true, title: "Responsywność na urządzenia mobilne" },
      { isIncluded: true, title: "Podstawowa optymalizacja SEO" },
      { isIncluded: false, title: "Indywidualny projekt UI/UX" },
      { isIncluded: false, title: "Integracja z systemem rezerwacji" },
    ],
  },
  {
    title: "Rozszerzony WP",
    destination: "Małe i średnie firmy",
    price: 1800,
    features: [
      { isIncluded: true, title: "Strona z 3-5 podstronami" },
      {
        isIncluded: true,
        title: "Indywidualne dostosowanie UI (bez kodowania od zera)",
      },
      { isIncluded: true, title: "Formularz kontaktowy i mapa Google" },
      { isIncluded: true, title: "Zaawansowana optymalizacja SEO" },
      { isIncluded: false, title: "Dedykowany projekt UI/UX w Figmie" },
    ],
  },
  {
    title: "Profesjonalny React",
    destination: "Firmy, startupy, zaawansowane projekty",
    price: 4000,
    features: [
      { isIncluded: true, title: "Nowoczesna strona React / Next.js" },
      { isIncluded: true, title: "Dedykowany projekt UI/UX w Figmie" },
      {
        isIncluded: true,
        title: "Optymalizacja szybkości ładowania (Lighthouse 90+)",
      },
      { isIncluded: true, title: "Dynamiczne elementy i animacje" },
      { isIncluded: false, title: "Panel zarządzania treścią (CMS)" },
    ],
  },
];
