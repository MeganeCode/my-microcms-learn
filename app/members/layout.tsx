import Sheet from "../_components/Sheet";
import Hero from "../_components/Hero";
type Props = {
  children: React.ReactNode;
};
export const metadata = {
  title: "メンバー",
};
export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー" />
      <Sheet>{children}</Sheet>
    </>
  );
}
