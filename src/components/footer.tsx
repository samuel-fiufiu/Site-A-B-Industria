import { Share2Icon } from "lucide-react";

export function Footer() {
  return (
    <div className="bg-[var(--soft-white)]">
      <div className="mx-auto grid gap-8 rounded-t-[2.75rem] border border-[#ECE5E1] bg-white px-8 py-10 shadow-[0_10px_30px_rgba(27,28,28,0.04)] md:grid-cols-[1.2fr_auto_auto] md:items-center md:px-10 md:py-14">
        <div className="flex flex-col gap-4">
          <h3 className="font-jakarta text-3xl font-bold text-[var(--foreground)]">
            Indústria Fiu-Fiu
          </h3>
          <p className="max-w-[540px] font-manrope text-xl font-light leading-[1.45] text-[#7A7E8A]">
            © 2024 Indústria de Bebidas Fiu-Fiu. Agilidade operacional e confiança em
            cada envase.
          </p>
        </div>

        <nav className="justify-self-center">
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-4 font-manrope text-xl font-medium text-[#6F7380]">
            <li>
              <a href="#contato" className="transition-colors hover:text-[var(--foreground)]">
                Contato
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-[var(--foreground)]">
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:contato@fiufiuindustria.com.br" className="transition-colors hover:text-[var(--foreground)]">
                Email
              </a>
            </li>
          </ul>
        </nav>

        <div className="justify-self-start md:justify-self-end">
          <button
            type="button"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F3F0EF] text-[#6A514E] transition-colors hover:bg-[#E8E2E0]"
            aria-label="Compartilhar contato"
          >
            <Share2Icon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
