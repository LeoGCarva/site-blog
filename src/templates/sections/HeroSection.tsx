import { ArrowRight, Clock, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center mt-5">
      <div className="container mt-16 md:mt-0 md:ml-[22.5rem] flex flex-col w-[50rem] text-center md:flex-row md:text-start gap-8 min-h-[20rem] md:h-[36rem] items-center">
        <div className="flex flex-col items-center justify-center gap-6 md:items-start lg:items-start">
          <h1 className="text-gray-100 text-heading-hg font-sans">
            Venda seus produtos como afiliado em um únivo lugar
          </h1>

          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="flex items-center justify-start gap-2">
              <Clock className="text-cyan-100 h-4 w-4" />
              <span className="text-gray-100">
                Crie o seu site em menos de 5 minutos
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Store className="text-cyan-100 h-4 w-4 mr-" />
              <span className="shrink-0 flex items-center text-gray-100">
                Acompanhe e otimize o seu negócio online
              </span>
            </div>
          </div>

          <div className="text-white flex flex-col gap-2 mt-10 items-center md:items-start lg:items-start">
            <Button className="rounded-full w-fit" asChild>
              <Link href={'/criar-loja'}>
                Criar lojá grátis
                <ArrowRight />
              </Link>
            </Button>

            <p className="text-gray-300 text-body-xs">
              Não precisa de cartão de crédito
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-0 shrink-0 hidden md:h-full order-first md:order-last items-center justify-center md:flex lg:flex">
        <Image
          src="/hero-section.svg"
          alt=""
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </section>
  );
}
