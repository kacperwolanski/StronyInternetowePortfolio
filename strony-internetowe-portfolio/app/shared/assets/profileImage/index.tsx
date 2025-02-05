import Image from "next/image";
import ProfileImageFile from "./ProfileImage.svg";

const ProfileImage = () => (
  <div className="w-80 h-80 sm:w-42 sm:h-42 rounded-full overflow-hidden">
    <Image
      src={ProfileImageFile}
      alt="ProfileImage"
      width={260}
      height={260}
      className="object-cover w-full h-full"
    />
  </div>
);

export default ProfileImage;
