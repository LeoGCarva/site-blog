import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Inter, PT_Sans_Caption } from "next/font/google";

type LayoutType = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-sans'
})

export function Layout({ children }: LayoutType) {
  console.log(children);
  return (
    <div
      className={`${inter.className} ${ptSansCaption.className} relative flex min-h-screen flex-col bg-gray-800 font-inter`}
    >
      <Header />
      <main className="sm:mt-16 flex-1 flex flex-col">
        {children ? children : null}
      </main>
      <Footer />
    </div>
  );
}
