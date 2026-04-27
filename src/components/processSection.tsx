"use client";

import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Alinhamento",
    description: "Definição de volumes, prazos e especificidades técnicas do produto.",
  },
  {
    id: 2,
    title: "Planejamento",
    description: "Cronograma detalhado e reserva de slots na linha industrial.",
  },
  {
    id: 3,
    title: "Preparação",
    description: "Setup de máquinas e recebimento de insumos para o envase.",
  },
  {
    id: 4,
    title: "Envase Industrial",
    description: "Execução da produção com monitoramento técnico contínuo.",
  },
  {
    id: 5,
    title: "Entrega",
    description: "Expedição dos lotes com garantia de padronização final.",
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="processo" className="bg-[var(--soft-white)] px-4 py-18">
      <div className="mx-auto flex max-w-[1540px] flex-col items-center gap-10">
        <h2 className="text-center font-jakarta text-4xl font-bold text-[var(--foreground)] md:text-5xl">
          Jornada Operacional
        </h2>

        <div className="w-full overflow-x-auto pb-4">
          <div className="flex min-w-max items-stretch gap-0 px-1 xl:min-w-0 xl:justify-center">
            {cards.map((card, index) => {
              const isActive = activeStep === card.id;
              const connectorIsActive = activeStep !== null && card.id >= activeStep;

              return (
                <div key={card.id} className="flex items-center">
                  <article
                    className={`flex min-h-[250px] w-[220px] flex-col gap-5 rounded-[1.75rem] bg-white px-7 py-8 transition-all duration-300 xl:w-[228px] ${
                      isActive
                        ? "border border-[#C9CED1] shadow-[0_10px_24px_rgba(27,28,28,0.08)]"
                        : "border border-[#F1ECE8] shadow-[0_6px_18px_rgba(27,28,28,0.04)]"
                    }`}
                    onMouseEnter={() => setActiveStep(card.id)}
                    onMouseLeave={() => setActiveStep(null)}
                    onFocus={() => setActiveStep(card.id)}
                    onBlur={() => setActiveStep(null)}
                    onClick={() => setActiveStep(card.id)}
                    tabIndex={0}
                  >
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full font-jakarta text-xl font-bold text-white transition-colors duration-300 ${
                        isActive ? "bg-[var(--soft-blue)]" : "bg-[#102A3B]"
                      }`}
                    >
                      {card.id}
                    </span>

                    <div className="flex flex-col gap-4">
                      <h3 className="font-jakarta text-[1.1rem] font-bold leading-tight text-[#1A2F3D] xl:text-[1.2rem]">
                        {card.title}
                      </h3>
                      <p className="font-manrope text-[0.95rem] font-light leading-[1.5] text-[#6A514E]">
                        {card.description}
                      </p>
                    </div>
                  </article>

                  {index < cards.length - 1 && (
                    <span
                      aria-hidden="true"
                      className={`hidden h-[8px] w-[26px] -translate-y-2 xl:block ${
                        connectorIsActive ? "bg-[var(--soft-blue)]" : "bg-[#102A3B]"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
