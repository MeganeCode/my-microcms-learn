import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';
type Props = {
  children: React.ReactNode;
};
export const metadata = {
  title: "お問い合わせ",
};
export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Contact" sub="お問い合わせ" />
      <Sheet>{children}</Sheet>
    </>
  );
}
