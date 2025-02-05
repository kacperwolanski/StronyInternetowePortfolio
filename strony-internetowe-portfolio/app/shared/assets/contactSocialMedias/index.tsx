import Image from "next/image";
import mail from "./Mail.svg";
import mailStroke from "./Mail2.svg";
import phone from "./Phone.svg";
import github from "./Github.svg";
import linkedin from "./Linkedin.svg";
import facebook from "./Facebook.svg";

// contact
export const MailStrokeIcon = () => <Image src={mailStroke} alt="mailStroke" />;
export const PhoneIcon = () => <Image src={phone} alt="phone" />;

// footer
export const MailIcon = () => <Image src={mail} alt="mail" />;
export const GithubIcon = () => <Image src={github} alt="github" />;
export const LinkedinIcon = () => <Image src={linkedin} alt="linkedin" />;
export const FacebookIcon = () => <Image src={facebook} alt="facebook" />;
