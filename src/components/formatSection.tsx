import Image from "next/image";
import { CircleCheck as Check } from "lucide-react";

import image275ml from "/Images/275ml.jpg";
import image750ml from "/Images/750ml.jpg";

const Formats = [
  {
    Volume: "275ml",
    Image: image275ml,
    Category: ["Carbonatados", "Não Carbonatados"],
    Text: "Ideal para drinks prontos, refrigerantes artesanais e águas saborizadas. Envase com pressão controlada para manter a refrescância.",
    infos: ["Garrafa de Vidro", "Tampa Coroa"],
  },
  {
    Volume: "750ml",
    Image: image750ml,
    Category: ["Não Carbonatados"],
    Text: "Ideal para drinks prontos, refrigerantes artesanais e águas saborizadas. Envase com pressão controlada para manter a refrescância.",
    infos: ["Garrafa de Vidro", "Tampa Rosca/Rolha"],
  },
];

export function Format() {
  return (
    <section id="formatos" className="scroll-mt-[88px] md:scroll-mt-[92px] bg-[var(--light-gray)] px-4 py-8">
      <div className="max-w-[1540px] flex flex-col mx-auto gap-6 md:gap-8 items-start">
        <h1 className="font-jakarta text-3xl sm:text-4xl md:text-5xl font-bold">Formatos de Envase</h1>
        <p className="font-manrope text-base md:text-lg font-semilight">
          Estrutura preparada para diferentes volumetrias e especificidades de produto.
        </p>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6 justify-center">
          {Formats.map((format, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-[180px_1fr] md:grid-cols-[220px_1fr] items-start sm:items-center gap-4 md:gap-6 rounded-[24px] bg-white shadow-sm border border-[#ECE5E1] p-4 sm:p-0"
            >
              <div className="flex justify-center">
                <Image
                  src={format.Image}
                  alt={`Garrafa formato ${format.Volume}`}
                  className="h-auto max-h-[200px] sm:max-h-[320px] w-auto object-contain sm:rounded-l-[24px]"
                />
              </div>

              <div className="flex flex-col gap-3 md:gap-4">
                <h2 className="font-jakarta text-2xl md:text-3xl font-bold text-[var(--dark-blue)]">
                  Volume {format.Volume}
                </h2>

                <div className="flex flex-wrap gap-2">
                  {format.Category.map((category, catIndex) => (
                    <div
                      key={catIndex}
                      className="rounded-full bg-[var(--soft-gray)] px-3 py-1 text-sm font-medium text-[var(--dark-soft-blue)]"
                    >
                      <p>{category}</p>
                    </div>
                  ))}
                </div>

                <p className="font-manrope text-sm md:text-base text-[var(--dark-blue)]">{format.Text}</p>

                <div className="flex flex-col gap-2">
                  {format.infos.map((info, infoIndex) => (
                    <div
                      key={infoIndex}
                      className="flex items-center gap-2 text-[var(--dark-blue)]"
                    >
                      <Check className="size-4 md:size-5 text-[var(--soft-blue)]" />
                      <p className="font-manrope text-sm md:text-base">{info}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
