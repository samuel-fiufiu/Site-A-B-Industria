import Image from "next/image"

import Industry from "/Images/Industrial Bottling Line.png"

export function Hero() {
  return(
    <section>
      <div>
        <h1>Sua bebida pronta para ganhar escala com um envase parceiro</h1>
        <p>Focamos na excelência operacional para marcas com produtos definidos que buscam estrutura industrial de ponta, agilidade e segurança em cada lote.</p>
        <button>Falar com o Comercial</button>
        <button>Conhecer Formatos</button>
      </div>
      <Image
        src={Industry}
        alt="Imagem de referência"
        height={700}
        width={500}
      />
    </section>
  )
}