export function Cta() {
  return (
    <section id="contato" className="scroll-mt-[88px] md:scroll-mt-[92px] bg-[var(--soft-white)] px-4 py-12 md:py-18">
      <div className="mx-auto max-w-[1540px]">
        <div className="overflow-hidden rounded-[2rem] md:rounded-[3.5rem] bg-[linear-gradient(90deg,#0C5C8D_0%,#0E3247_100%)] px-6 py-14 md:px-16 md:py-28 shadow-[0_24px_60px_rgba(14,50,71,0.18)]">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-6 md:gap-10 text-center">
            <h1 className="font-jakarta text-2xl sm:text-3xl md:text-4xl font-bold leading-tight md:leading-[0.98] text-white md:text-7xl">
              Precisa de um parceiro para envasar sua bebida?
            </h1>
            <p className="max-w-[980px] font-manrope text-base md:text-xl font-light leading-[1.45] text-[#F3F5F6] md:text-[1.25rem]">
              Nossa fábrica está pronta para absorver sua demanda com o máximo rigor técnico e
              eficiência operacional.
            </p>
            <a href="https://wa.me/556299800313" className="button-1 !justify-self-auto !px-8 !py-3 md:!px-12 md:!py-5 !text-[0.95rem] md:!text-[1.05rem] !font-semibold md:!text-[1.25rem]">
              Falar com o comercial
            </a>
          </div>
        </div>
      </div>  
    </section>
  );
}
