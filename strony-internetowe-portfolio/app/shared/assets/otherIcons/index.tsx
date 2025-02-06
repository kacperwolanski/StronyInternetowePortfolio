import Image from "next/image";
import copy from "./Copy.svg";
import search from "./Search.svg";
import macbook from "./MacBookCode.svg";
import chat from "./Chat.svg";
import coding from "./Codding.svg";
import photo from "./Photo.svg";
import coin from "./Coin.svg";
import check from "./Check.svg";
import cross from "./CircledCross.svg";

export const CopyIcon = () => <Image src={copy} alt="Copy" />;
export const SearchIcon = () => <Image src={search} alt="search" />;

export const MacBookCode = () => <Image src={macbook} alt="macbook" />;

export const ChatIcon = () => <Image src={chat} alt="chat" />;
export const CodingIcon = () => <Image src={coding} alt="Coding" />;
export const PhotoIcon = () => <Image src={photo} alt="Photo" />;
export const CoinIcon = () => <Image src={coin} alt="Coin" />;

export const CheckIcon = () => <Image src={check} alt="check" />;
export const CircledCrossIcon = () => <Image src={cross} alt="cross" />;
