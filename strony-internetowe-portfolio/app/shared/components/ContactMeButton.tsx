import { contactPath } from "@/app/appContacts";
import Link from "next/link";
import React from "react";

const ContactMeButton = () => {
  return (
    <Link href={contactPath}>
      <button className="btn btn-neutral">Kontakt</button>
    </Link>
  );
};

export default ContactMeButton;
