import Image from "next/image";
import logo from "./LightLogo.svg";

const Logo = () => (
  <div className="text-first">
    <Image src={logo} alt="Logo" />
  </div>
);

export default Logo;
