"use client";
import { sectionIds } from "@/app/appContacts";
import ProfileImage from "@/app/shared/assets/profileImage";
import React from "react";
import ContactElement from "./ContactElement";
import {
  MailStrokeIcon,
  PhoneIcon,
} from "@/app/shared/assets/contactSocialMedias";

const ContactBox = () => {
  return (
    <div
      id={sectionIds.contact}
      className="flex flex-col items-center rounded-xl max-w-md p-5 "
    >
      <div className="scale-50 -mt-1">
        <ProfileImage />
      </div>

      <div className="flex flex-col items-center">
        <ContactElement
          title="wolanski055@gmail.com"
          icon={<MailStrokeIcon />}
        />
        <ContactElement title="+48 796 082 796" icon={<PhoneIcon />} />
      </div>
    </div>
  );
};

export default ContactBox;
