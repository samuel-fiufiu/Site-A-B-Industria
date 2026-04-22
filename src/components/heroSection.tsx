import Image from "next/image"

import Industry from "/Images/Industrial Bottling Line.png"

export function Hero() {
  return(
    <section className="hero">
      <div className="hero-content">
        <h1>Sua bebida pronta para ganhar escala com um <span className="text-[var(--soft-blue)]">envase parceiro</span></h1>
        <p>Focamos na excelência operacional para marcas com produtos definidos que buscam estrutura industrial de ponta, agilidade e segurança em cada lote.</p>
        <div className="hero-actions">
          <button className="button-1">Falar com o Comercial</button>
          <button className="button-2">Conhecer Formatos</button>
        </div>
      </div>
      <Image
        src={Industry}
        alt="Imagem de referência"
        height={700}
        width={600}
        className="hero-image rounded-[20px] object-cover object-center shadow-lg"
      />
    </section>
  )
}
