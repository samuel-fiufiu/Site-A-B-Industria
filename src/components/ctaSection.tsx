export function Cta() {
  return (
    <section id="contato" className="bg-[var(--soft-white)] px-4 py-18">
      <div className="mx-auto max-w-[1540px]">
        <div className="overflow-hidden rounded-[3.5rem] bg-[linear-gradient(90deg,#0C5C8D_0%,#0E3247_100%)] px-6 py-20 shadow-[0_24px_60px_rgba(14,50,71,0.18)] md:px-16 md:py-28">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-10 text-center">
            <h1 className="font-jakarta text-4xl font-bold leading-[0.98] text-white md:text-7xl">
              Precisa de um parceiro para envasar sua bebida?
            </h1>
            <p className="max-w-[980px] font-manrope text-xl font-light leading-[1.45] text-[#F3F5F6] md:text-[1.25rem]">
              Nossa fábrica está pronta para absorver sua demanda com o máximo rigor técnico e
              eficiência operacional.
            </p>
            <a href="#contato" className="button-1 !justify-self-auto !px-12 !py-5 !text-[1.05rem] !font-semibold md:!text-[1.25rem]">
              Falar com o comercial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
