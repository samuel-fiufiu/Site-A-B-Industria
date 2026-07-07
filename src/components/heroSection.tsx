import Image from "next/image"

import Industry from "/Images/Industrial Bottling Line.png"

export function Hero() {
  return(
    <section id="inicio" className="mt-[88px] md:mt-[92px] scroll-mt-[88px] md:scroll-mt-[92px] bg-[var(--soft-white)] grid grid-cols-1 md:grid-cols-2 items-start md:items-center w-full mx-auto px-4 pt-0 pb-6 md:py-4 gap-6 min-h-[calc(100vh-88px)] md:min-h-[calc(100vh-92px)]">
      <div className="flex flex-col justify-center items-center md:items-start mx-auto max-w-xl gap-4 md:gap-6 order-2 md:order-1">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-7xl font-jakarta text-center md:text-start">Sua bebida pronta para ganhar escala com um <span className="text-[var(--soft-blue)]">envase parceiro</span></h1>
        <p className="font-manrope text-base md:text-lg font-semilight text-center md:text-start">Focamos na excelência operacional para marcas com produtos definidos que buscam estrutura industrial de ponta, agilidade e segurança em cada lote.</p>
        <div className="gap-3 md:gap-4 flex flex-col sm:flex-row w-full sm:w-auto">
          <a href="https://wa.me/556299800313" className="button-1 text-center">Falar com o Comercial</a>
          <a href="#formatos" className="button-2 text-center">Conhecer Formatos</a>
        </div>
      </div>
      <Image
        src={Industry}
        alt="Imagem de referência"
        height={700}
        width={600}
        className="rounded-4xl shadow-lg/20 order-1 md:order-2"
      />
    </section>
  )
}
