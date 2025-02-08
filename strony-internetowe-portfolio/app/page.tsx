import AboutMe from "./components/aboutMe/AboutMe";
import Introduction from "./components/intro/Introduction";
import MyTools from "./components/myTools/MyTools";
import Contact from "./contact/Contact";
import Portfolio from "./portfolio/Portfolio";
import Service from "./service/Service";

export default function Home() {
  return (
    <div className="font-[Inter]">
      <Introduction />
      <AboutMe />
      <MyTools />
      <Portfolio />
      <Service />
      <Contact />
    </div>
  );
}
