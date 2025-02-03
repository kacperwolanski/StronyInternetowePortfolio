import Image from "next/image";
import ProfileImageFile from "./ProfileImage.svg";

const ProfileImage = () => (
  <Image src={ProfileImageFile} alt="ProfileImage" className="rounded-full" />
);

export default ProfileImage;
