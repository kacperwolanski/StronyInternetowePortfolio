"use client";

import {
  MailStrokeIcon,
  PhoneIcon,
} from "../shared/assets/contactSocialMedias";
import ProfileImage from "../shared/assets/profileImage";
import BackgroundWrapper from "../shared/components/BackgroundWrapper";
import SectionSeparator from "../shared/components/SectionSeparator";
import ContactElement from "./components/ContactElement";

export default function Contact() {
  return (
    <BackgroundWrapper backgroundColor="second">
      <div className="py-10 flex flex-col items-center">
        <ProfileImage />
        <SectionSeparator
          title="Kontakt"
          subTitle="Zbudujmy stronę, która wyróżni Cię w sieci"
        />

        <div className="flex flex-col items-center">
          <ContactElement
            title="wolanski055@gmail.com"
            icon={<MailStrokeIcon />}
          />
          <ContactElement title="+48 796 082 796" icon={<PhoneIcon />} />
        </div>
      </div>
    </BackgroundWrapper>
  );
}
