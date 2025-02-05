import React from "react";
import PortfolioLink from "./PortfolioLink";

const AboutMeText = () => {
  return (
    <div className="text-first">
      <header className="font-semibold text-4xl mb-5">Czym się zajmuję?</header>
      <p className="font-light">
        Od <span className="font-semibold">3 lat</span> zajmuję się tworzeniem
        stron internetowych i aplikacji webowych, pracując zarówno nad prostymi
        stronami firmowymi, jak i bardziej zaawansowanymi platformami.
        Pracowałem zarówno jako freelancer z{" "}
        <span className="font-semibold">WordPressem</span> oraz w zespołach
        programistycznych, gdzie wspólnie budowaliśmy nowoczesne rozwiązania dla
        różnych branż. Współtworzyłem m.in. platformę{" "}
        <span className="font-semibold">DotTV</span> do oglądania telewizji
        online oraz aplikację carpoolingową{" "}
        <span className="font-semibold">TurmsRide</span>.
      </p>

      <PortfolioLink />
    </div>
  );
};

export default AboutMeText;
