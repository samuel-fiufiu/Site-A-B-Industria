import Image from "next/image"

import Industry from "/Images/Industrial Bottling Line.png"

export function Hero() {
  return(
    <section id="inicio" className="mt-[36px] bg-[var(--soft-white)] grid grid-cols-2 items-center w-full mx-auto px-4 py-4 gap-6">
      <div className="flex flex-col justify-center items-center mx-auto max-w-xl gap-6">
        <h1 className="font-bold text-7xl font-jakarta">Sua bebida pronta para ganhar escala com um <span className="text-[var(--soft-blue)]">envase parceiro</span></h1>
        <p className="font-manrope text-lg font-semilight">Focamos na excelência operacional para marcas com produtos definidos que buscam estrutura industrial de ponta, agilidade e segurança em cada lote.</p>
        <div className="gap-4 flex">
          <a href="#contato" className="button-1">Falar com o Comercial</a>
          <a href="#formatos" className="button-2">Conhecer Formatos</a>
        </div>
      </div>
      <Image
        src={Industry}
        alt="Imagem de referência"
        height={700}
        width={600}
        className="rounded-b-4xl shadow-lg/20"
      />
    </section>
  )
}
