import Image from "next/image";

export function CustomerSection() {
  return (
    <section className="pt-32 pb-40">
      <div className="container flex flex-col gap-12">
        <span>
          <h2 className="font-sans flex flex-col items-center justify-center text-gray-100 text-heading-xl">
            Quem utiliza, aprova!
          </h2>
        </span>

        <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
          <div className="relative flex flex-col bg-gray-600 text-gray-200 p-10 rounded-xl gap-10 border-[1px] border-gray-400">
            <p className="italic text-body-md">
              Criar minha loja com o site.set foi a melhor decisão para o meu
              negócio. A plataforma é super intuitiva, e consegui colocar meus
              produtos à venda em poucos minutos.
            </p>

            <div className="md:absolute bottom-10 flex items-center gap-3">
              <Image className="rounded-full border-[1px] border-blue-200" src="/Finn.jpeg" alt="" width={37} height={37} />
              <span className="flex flex-col gap-1">
                <p>Finn Martins</p>
                <p className="text-gray-300">Hero of OOO</p>
              </span>
            </div>
          </div>

          <div className="flex flex-col bg-gray-600 text-gray-200 p-10 rounded-xl gap-10 border-[1px] border-gray-400   ">
            <p className="italic">
              Transformar minha ideia em uma loja online foi fácil e rápido.
              Adorei as opções de personalização e a simplicidade para gerenciar
              os pedidos. Já vejo meus produtos alcançando mais pessoas!
            </p>

            <div className="flex items-center gap-3">
              <Image className="rounded-full border-[1px] border-blue-200" src="/Marceline.png" alt="" width={37} height={37} />
              <span className="flex flex-col gap-1">
                <p>Marceline Abadeer</p>
                <p className="text-gray-300">A Rainha dos Vampiros</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
