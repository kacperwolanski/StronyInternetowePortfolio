import { responsivePaddingX } from "@/app/appContacts";

type BackgroundColor = "first" | "second";

interface Props {
  children: JSX.Element;
  backgroundColor: BackgroundColor;
}
const BackgroundWrapper = ({ children, backgroundColor }: Props) => {
  const bgColor =
    backgroundColor === "first"
      ? "var(--firstBackgroundColor)"
      : "var(--secondBackgroundColor)";
  return (
    <div
      className={`rounded-xl py-10 w-95 ${responsivePaddingX}`}
      style={{ background: bgColor }}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
