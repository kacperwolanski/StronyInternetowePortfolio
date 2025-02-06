import { servicePath } from "../appContacts";
import BackgroundWrapper from "../shared/components/BackgroundWrapper";
import HeaderButtonLink from "../shared/components/HeaderButtonLink";
import SectionSeparator from "../shared/components/SectionSeparator";
import { projects } from "../shared/mappersData/projects";
import SingleProject from "./components/SingleProject";

export default function Portfolio() {
  return (
    <BackgroundWrapper backgroundColor="second">
      <div>
        <SectionSeparator
          title="Zrealizowane projekty"
          subTitle="Każda stworzona przeze mnie strona jest w pełni responsywna – doskonale wyglą
          da i działa na każdym urządzeniu, niezależnie od tego, czy to telefon, tablet czy komputer."
        />
        <div className="flex flex-wrap gap-20 items-top justify-center mt-10">
          {projects.map((proj) => (
            <SingleProject key={proj.title} project={proj} />
          ))}
        </div>
        <HeaderButtonLink
          title=" Podoba Ci się moja praca?"
          subtitle=" Zbudujmy razem coś, co wyróżni Cię w sieci. Sprawdź, jak wygląda
          współpraca ze mną"
          buttonTitle="Współpraca"
          href={servicePath}
        />
      </div>
    </BackgroundWrapper>
  );
}
