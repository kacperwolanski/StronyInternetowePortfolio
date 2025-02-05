import Image from "next/image";
import logo from "./LightLogo.svg";
import Link from "next/link";
import { homePath } from "@/app/appContacts";

const Logo = () => (
  <div className="text-first">
    <Link href={homePath}>
      <Image src={logo} alt="Logo" />
    </Link>
  </div>
);

export default Logo;
