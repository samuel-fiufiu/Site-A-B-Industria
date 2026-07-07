import { MapPin } from "lucide-react";
import Image from "next/image";

export function Location() {
  return (
    <section className="bg-[var(--soft-white)] px-4 pt-16 md:pt-24">
      <div className="mx-auto max-w-[1540px]">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3.5rem] bg-[linear-gradient(135deg,#0E3247_0%,#0C5C8D_50%,#1375A6_100%)] px-6 md:px-16 py-8 md:py-14 shadow-[0_24px_60px_rgba(14,50,71,0.18)]">
          <div className="flex flex-col items-start gap-6 md:gap-8 text-left md:max-w-[55%]">
            <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/15">
              <MapPin className="h-8 w-8 md:h-10 md:w-10 text-white" />
            </div>
            <h1 className="font-jakarta text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white md:leading-[1.1]">
              Onde estamos
            </h1>
            <p className="font-manrope text-base md:text-xl font-light leading-[1.5] text-[#E8EDF0]">
              Nossa indústria está localizada em <strong className="font-semibold text-white">Pirenópolis-GO</strong>, no coração do Brasil, com logística privilegiada para atender todo o território nacional com agilidade e eficiência.
            </p>
            <div className="flex flex-col items-start gap-1 pt-2">
              <span className="font-jakarta text-lg md:text-2xl font-bold text-white">
                Pirenópolis, GO
              </span>
              <span className="font-manrope text-sm md:text-base font-light text-[#B0C4D4]">
                Região Centro-Oeste
              </span>
            </div>
          </div>
          <div className="absolute right-0 top-0 -translate-y-4 md:-translate-y-8 hidden md:block">
            <Image
              width={768}
              height={768}
              src="/Images/mapa samuel.svg"
              alt="Mapa do Brasil destacando a localização de Pirenópolis-GO"
              className="h-auto w-[30rem] md:w-[36rem] lg:w-[48rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
