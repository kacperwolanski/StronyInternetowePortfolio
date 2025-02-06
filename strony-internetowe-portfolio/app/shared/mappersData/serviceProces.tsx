import {
  ChatIcon,
  CodingIcon,
  CoinIcon,
  PhotoIcon,
} from "../assets/otherIcons";

export interface SingleService {
  title: string;
  subTitle: string;
  icon: JSX.Element;
}

export const serviceProcess: SingleService[] = [
  {
    title: "1. Konsultacja i analiza",
    subTitle:
      "Dokładne omówienie celów, potrzeb oraz Twoich oczekiwań względem projektu.",
    icon: <ChatIcon />,
  },
  {
    title: "2. Propozycja i wycena",
    subTitle:
      "Przedstawienie koncepcji strony oraz darmowy kosztorys realizacji.",
    icon: <CoinIcon />,
  },
  {
    title: "3. Projektowanie",
    subTitle:
      "Stworzenie designu strony zgodnie z ustaleniami, z dbałością o funkcjonalność i estetykę.",
    icon: <PhotoIcon />,
  },
  {
    title: "4. Wdrożenie i wsparcie",
    subTitle:
      "Po zaakceptowaniu projektu, stworzenie funkcjonalnej strony oraz zapewnienie wsparcia w pierwszych tygodniach użytkowania.",
    icon: <CodingIcon />,
  },
];
