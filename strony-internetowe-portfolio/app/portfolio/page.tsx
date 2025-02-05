import { projects } from "../mappersData/projects";
import BackgroundWrapper from "../shared/components/BackgroundWrapper";
import SectionSeparator from "../shared/components/SectionSeparator";
import SingleProject from "./components/SingleProject";
import WspolpracaLink from "./components/WspolpracaLink";

export default function Portfolio() {
  return (
    <BackgroundWrapper backgroundColor="second">
      <div>
        <SectionSeparator
          title="Zrealizowane projekty"
          subTitle="Każda stworzona przeze mnie strona jest w pełni responsywna – doskonale wygląda i działa na każdym urządzeniu, niezależnie od tego, czy to telefon, tablet czy komputer."
        />
        <div className="flex flex-wrap gap-20 items-top justify-center mt-10">
          {projects.map((proj) => (
            <SingleProject key={proj.title} project={proj} />
          ))}
        </div>
        <WspolpracaLink />
      </div>
    </BackgroundWrapper>
  );
}
