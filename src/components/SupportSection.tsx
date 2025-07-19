import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";
import { PT_Sans_Caption } from "next/font/google";
import Image from "next/image";

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
});

export function SupportSection() {
  return (
    <>
      <section className="relative py-[7.5rem] bg-gradient-to-r from-gray-500 to-gray-700">
        <Image className="absolute left-0 bottom-0 z-0 hidden md:flex" src="/left-support-section.svg" alt="" width={300} height={100}/>
        <div className="container z-10 flex flex-col items-center gap-20 ">
          <span>
            <h2
              className={`${ptSansCaption.className} leading-10 text-balance text-center text-heading-xl text-gray-100`}
            >
              Sua loja de afiliados, simples,
            </h2>
            <h2
              className={`${ptSansCaption.className} leading-10 text-balance text-center text-heading-xl text-gray-100`}
            >
              do jeito que deveria ser
            </h2>
          </span>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex z-10 flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
                <PaintbrushVertical className="h-6 w-6 text-white" />
              </div>
              <strong className="text-heading-sm text-gray-100">
                Personalize seu site
              </strong>
              <p className="text-body-sm text-gray-200">
                Adicione sua logo, favicon, cores no seu catálogo e tenha tudo
                com a sua cara.
              </p>
            </div>

            <div className="flex flex-col text-left z-10 gap-2 rounded-lg p-6 md:p-12 bg-cyan-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-200 mb-4">
                <Store className="h-6 w-6 text-white" />
              </div>
              <strong className="text-heading-sm text-gray-100">
                Venda de qualquer loja
              </strong>
              <p className="text-body-sm text-gray-200">
                Não importa a loja, o Site.Dev permite que você insira qualquer
                link de afiliado.
              </p>
            </div>

            <div className="flex flex-col text-left z-10 gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
                <HeartHandshake className="h-6 w-6 text-white" />
              </div>
              <strong className="text-heading-sm text-gray-100">
                Receba suporte amigável
              </strong>
              <p className="text-body-sm text-gray-200">
                Nossa equipe estará sempre pronta para te atender e ajudar no
                que for preciso.
              </p>
            </div>
          </div>
        </div>
        <Image className="absolute right-0 top-0 z-0 hidden md:flex" src="/right-support-section.svg" alt="" width={536} height={100}/>
      </section>
    </>
  );
}
