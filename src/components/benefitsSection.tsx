
const cards = [
  {
    title: "Estrutura pronta para envasar",
    text: "Maquinário de última geração pronto para entrar em operação imediata para seu produto.",
    color: "#0E4D73",
  },
  {
    title: "Agilidade no processo",
    text: "Reduzimos o lead time entre o pedido e a entrega, garantindo seu produto na prateleira.",
    color: "#0E5F8C",
  },
  {
    title: "Padronização de lote",
    text: "Controle de qualidade rigoroso para que cada unidade mantenha a integridade da marca.",
    color: "#1375A6",
  },
  {
    title: "Parceira para crescer junto",
    text: "Flexibilidade para acompanhar o aumento da sua demanda industrial conforme o mercado exige.",
    color: "#1692CF",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="scroll-mt-[88px] md:scroll-mt-[92px] bg-[var(--soft-white)] px-4 py-12 md:py-18">
      <div className="mx-auto flex max-w-[1540px] flex-col gap-8 md:gap-12">
        <div className="flex flex-col items-center gap-3 md:gap-4 text-center">
          <h1 className="max-w-[900px] font-jakarta text-3xl sm:text-4xl font-bold text-[var(--foreground)] md:text-5xl">
            Por que a Fiu-Fiu Indústria?
          </h1>
          <p className="max-w-[760px] font-manrope text-base md:text-lg font-light text-[var(--dark-soft-blue)]">
            Elimine os gargalos de produção e foque no crescimento da sua marca.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="relative flex min-h-[240px] md:min-h-[290px] flex-col justify-between overflow-hidden rounded-[2rem] bg-white px-6 py-8 md:px-8 md:py-10 border-b-4"
              style={{ borderBottomColor: card.color }}
            >
              <div className="flex flex-col gap-4 md:gap-6">
                <h2 className="max-w-[260px] font-jakarta text-2xl md:text-3xl font-bold leading-tight text-[var(--foreground)]">
                  {card.title}
                </h2>
                <p className="max-w-[280px] font-manrope text-base md:text-[1.05rem] leading-7 md:leading-8 font-light text-[var(--dark-soft-blue)]">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
