import Image from "next/image";
import copy from "./Copy.svg";
import search from "./Search.svg";
import macbook from "./MacBookCode.svg";

export const CopyIcon = () => <Image src={copy} alt="Copy" />;
export const SearchIcon = () => <Image src={search} alt="search" />;

export const MacBookCode = () => <Image src={macbook} alt="macbook" />;
