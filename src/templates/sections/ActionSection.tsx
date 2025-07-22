import { ArrowRight, StoreIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ActionSection() {
  return (
    <section className="flex flex-col bg-[url('/action-background.svg')]  bg-top">
      <span className="p-4 self-center mt-[-1.5rem] rounded-full bg-cyan-300">
        <StoreIcon className="text-cyan-100" width={32} height={32}/>
      </span>
      <div className="container pt-9 md:pt-20 pb-20 flex flex-col gap-12 text-gray-100 items-center justify-center">
        <span className="flex flex-col items-center text-heading-md md:text-heading-xl">
          <h2 className="font-sans text-justify">Crie uma loja online e inicie</h2>
          <h2 className="font-sans text-justify">suas vendas ainda hoje</h2>
        </span>

        <Button className="rounded-full w-fit" asChild>
          <Link href={"/criar-loja"}>
            Criar lojá grátis
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
