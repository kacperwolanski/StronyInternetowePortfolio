import Image from "next/image";
import logo from "./Logo.svg";

const Logo = () => (
  <Image src={logo} alt="Logo" width={101} height={65} color="#fff" />
);

export default Logo;
