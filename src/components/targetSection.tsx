import Image from "next/image";

import Delivery from "/Images/Delivery.jpg";
import Machine from "/Images/industrial machine.jpg";

const targets = [
  {
    id: 1,
    title: "Marcas de Bebidas",
    description: "Indústrias que já possuem sua fórmula e precisam de braço industrial para produção em massa.",
    color: "#0E4D73",
  },
  {
    id: 2,
    title: "Distribuidores & Private Labels",
    description: "Parcerias para marcas próprias que buscam confiança e constância no abastecimento.",
    color: "#0E5F8C",
  },
  {
    id: 3,
    title: "Projetos em Expansão",
    description: "Bebidas que ganharam tração e agora precisam sair do envase artesanal para o industrial.",
    color: "#1375A6",
  },
];

export function Target() {
  return (
    <section className="bg-white px-4 py-12 md:py-18">
      <div className="mx-auto grid max-w-[1540px] gap-10 lg:grid-cols-1 xl:grid-cols-[720px_1fr] xl:items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <article className="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-[#080808] shadow-[0_18px_50px_rgba(0,0,0,0.14)] md:min-h-[350px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_58%)]" />
            <Image
              src={Delivery}
              alt="Linha industrial de envase"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/6" />
          </article>

          <article className="flex min-h-[180px] items-end rounded-[2rem] bg-[#FAF1F1] p-8 md:min-h-[196px]">
            <span className="font-jakarta text-[1.95rem] font-bold text-[var(--soft-blue)] md:text-[2.05rem]">
              Garantia de Entrega
            </span>
          </article>

          <article className="flex min-h-[180px] items-end rounded-[2rem] bg-[#F6FAF8] p-8 md:min-h-[196px]">
            <span className="font-jakarta text-[1.95rem] font-bold text-[#1F3242] md:text-[2.05rem]">
              Escalabilidade Industrial
            </span>
          </article>

          <article className="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_center,#113F52_0%,#0A1E2B_48%,#071118_100%)] shadow-[0_18px_50px_rgba(0,0,0,0.14)] md:min-h-[350px]">
            <div className="absolute inset-x-0 top-[18%] mx-auto h-32 w-32 rounded-full bg-[#4FDBFF]/30 blur-2xl md:h-40 md:w-40" />
            <Image
              src={Machine}
              alt="Máquina industrial para produção escalável"
              fill
              className="object-cover"
            />
          </article>
        </div>

        <div className="flex flex-col gap-8 md:gap-10 xl:pl-12">
          <h1 className="max-w-[560px] font-jakarta text-3xl sm:text-4xl font-bold leading-tight text-[var(--foreground)] md:text-6xl">
            Para quem envasamos
          </h1>

          <div className="flex flex-col gap-8 md:gap-12">
            {targets.map((target) => (
              <article
                key={target.id}
                className="grid gap-2 md:gap-3 md:grid-cols-[74px_1fr] md:gap-6"
              >
                <span
                  className="font-jakarta text-2xl md:text-3xl font-bold leading-none md:text-5xl"
                  style={{ color: target.color }}
                >
                  {String(target.id).padStart(2, "0")}
                </span>

                <div className="flex flex-col gap-2 md:gap-3">
                  <h2 className="font-jakarta text-xl md:text-2xl font-bold text-[var(--foreground)] md:text-4xl">
                    {target.title}
                  </h2>
                  <p className="max-w-[720px] font-manrope text-base md:text-lg font-light leading-7 md:leading-9 text-[var(--dark-soft-blue)] md:text-[clamp(1.1rem,1.2vw,1.35rem)] md:leading-[1.55]">
                    {target.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
