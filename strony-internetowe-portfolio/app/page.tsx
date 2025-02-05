import AboutMe from "./components/aboutMe/AboutMe";
import Introduction from "./components/intro/Introduction";
import MyTools from "./components/myTools/MyTools";

export default function Home() {
  return (
    <div className="font-[Inter]">
      <Introduction />
      <AboutMe />
      <MyTools />
    </div>
  );
}
