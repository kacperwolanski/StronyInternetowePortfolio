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
    <div className="px-40  py-20 w-95" style={{ background: bgColor }}>
      {children}
    </div>
  );
};

export default BackgroundWrapper;
