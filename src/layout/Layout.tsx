import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Inter } from "next/font/google";

type LayoutType = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin']})

export function Layout({ children }: LayoutType) {
  console.log(children)
  return (
    <div className={`${inter.className} relative flex min-h-screen flex-col bg-gray-800`}>
      <Header />
      <main className="sm:mt-16 flex-1 flex flex-col">{children ? children : null}</main>
      <Footer />
    </div>
  );
}
