import AboutMe from "./components/aboutMe/AboutMe";
import Footer from "./components/footer/Footer";
import Introduction from "./components/intro/Introduction";
import MyTools from "./components/myTools/MyTools";
import TopMenu from "./components/topMenu/TopMenu";

export default function Home() {
  return (
    <div className="font-[Inter]">
      <TopMenu />
      <Introduction />
      <AboutMe />
      <MyTools />
      <Footer />
    </div>
  );
}
