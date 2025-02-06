import BackgroundWrapper from "@/app/shared/components/BackgroundWrapper";

const WspolpracaLink = () => {
  return (
    <BackgroundWrapper backgroundColor="second">
      <div className="py-10 font-[Inter] w-full flex flex-col items-center">
        <p className="font-semibold text-3xl text-[#66615e]">
          Podoba Ci się moja praca?
        </p>

        <p className="font-light text-lg mt-3 text-second pb-10">
          Zbudujmy razem coś, co wyróżni Cię w sieci. Sprawdź, jak wygląda
          współpraca ze mną
        </p>
        <button className="text-sm px-10 py-2 bg-gray-200 rounded-2xl text-second hover:bg-gray-300 transition-background duration-300 ">
          Współpraca
        </button>
      </div>
    </BackgroundWrapper>
  );
};

export default WspolpracaLink;
