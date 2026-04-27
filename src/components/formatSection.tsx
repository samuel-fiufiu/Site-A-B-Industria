import Image from "next/image";
import { CircleCheck as Check } from "lucide-react";

import image275ml from "/Images/275ml.png";
import image750ml from "/Images/750ml.png";

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
    <section id="formatos" className="bg-[var(--light-gray)] py-8">
      <div className=" max-w-[1540px] flex flex-col mx-auto gap-8 items-start">
        <h1 className="font-jakarta text-5xl font-bold">Formatos de Envase</h1>
        <p className="font-manrope text-lg font-semilight">
          Estrutura preparada para diferentes volumetrias e especificidades de produto.
        </p>
        <div className="grid w-full grid-cols-2 gap-6 justify-center">
          {Formats.map((format, index) => (
            <div
              key={index}
              className="grid grid-cols-[220px_1fr] items-center gap-6 rounded-[24px] bg-white shadow-sm"
            >
              <div className="flex justify-center">
                <Image
                  src={format.Image}
                  alt={`Garrafa formato ${format.Volume}`}
                  className="h-auto max-h-[320px] w-auto object-contain rounded-l-[24px]"
                />
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-jakarta text-3xl font-bold text-[var(--dark-blue)]">
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

                <p className="font-manrope text-base text-[var(--dark-blue)]">{format.Text}</p>

                <div className="flex flex-col gap-2">
                  {format.infos.map((info, infoIndex) => (
                    <div
                      key={infoIndex}
                      className="flex items-center gap-2 text-[var(--dark-blue)]"
                    >
                      <Check className="size-5 text-[var(--soft-blue)]" />
                      <p className="font-manrope text-base">{info}</p>
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
