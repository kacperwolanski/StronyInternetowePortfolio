import { portfolioPath } from "@/app/appContacts";
import BackgroundWrapper from "@/app/shared/components/BackgroundWrapper";
import SectionSeparator from "@/app/shared/components/SectionSeparator";
import Link from "next/link";
import React from "react";

const AboutMe = () => {
  return (
    <BackgroundWrapper backgroundColor="second">
      <div>
        <SectionSeparator title="O mnie" subTitle="Moja kariera zawodowa" />
        <div className="text-first">
          <header className="font-semibold text-4xl mb-5">
            Czym się zajmuję?
          </header>
          <p className="font-light">
            Od <span className="font-semibold">3 lat</span> zajmuję się
            tworzeniem stron internetowych i aplikacji webowych, pracując
            zarówno nad prostymi stronami firmowymi, jak i bardziej
            zaawansowanymi platformami. Pracowałem zarówno jako freelancer z{" "}
            <span className="font-semibold">WordPressem</span> oraz w zespołach
            programistycznych, gdzie wspólnie budowaliśmy nowoczesne rozwiązania
            dla różnych branż. Współtworzyłem m.in. platformę{" "}
            <span className="font-semibold">DotTV</span> do oglądania telewizji
            online oraz aplikację carpoolingową{" "}
            <span className="font-semibold">TurmsRide</span>.
          </p>
          <Link href={portfolioPath}>
            <button className="border border-[#b6aea9] text-[#66615E] rounded-xl px-12 py-2 transition-colors duration-200 hover:bg-gray-200 mt-5">
              Portfolio
            </button>
          </Link>
        </div>
      </div>
    </BackgroundWrapper>
  );
};

export default AboutMe;
