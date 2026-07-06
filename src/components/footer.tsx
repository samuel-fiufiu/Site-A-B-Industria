"use client";

import { useState, useCallback } from "react";
import { Share2Icon, CheckIcon } from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const handleShare = useCallback(async () => {
    const url = window.location.origin;
    const shareData = {
      title: "Indústria Fiu-Fiu",
      text: "Indústria de Bebidas Fiu-Fiu. Agilidade operacional e confiança em cada envase.",
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") return;
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        const textarea = document.createElement("textarea");
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  }, []);

  return (
    <div className="bg-[var(--soft-white)]">
      <div className="mx-auto grid gap-8 rounded-t-[2.75rem] border border-[#ECE5E1] bg-white px-8 py-10 shadow-[0_10px_30px_rgba(27,28,28,0.04)] md:grid-cols-[1.2fr_auto_auto] md:items-center md:px-10 md:py-14">
        <div className="flex flex-col gap-4">
          <h3 className="font-jakarta text-3xl font-bold text-[var(--foreground)]">
            Indústria Fiu-Fiu
          </h3>
          <p className="max-w-[540px] font-manrope text-xl font-light leading-[1.45] text-[#7A7E8A]">
            &copy; 2024 Indústria de Bebidas Fiu-Fiu. Agilidade operacional e confiança em
            cada envase.
          </p>
        </div>

        <nav className="justify-self-center">
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-4 font-manrope text-xl font-medium text-[#6F7380]">
            <li>
              <a href="https://wa.me/556299800313" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--foreground)]">
                Contato
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ind.aeb/" className="transition-colors hover:text-[var(--foreground)]">
                Instagram
              </a>
            </li>
            <li className="relative">
              <button
                type="button"
                onClick={() => setShowEmail(true)}
                className="transition-colors hover:text-[var(--foreground)]"
              >
                Email
              </button>
              {showEmail && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowEmail(false)} />
                  <div className="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 rounded-lg border border-[#ECE5E1] bg-white p-2 shadow-lg">
                    <a
                      href="mailto:claudio@bebidafiufiu.com.br"
                      onClick={() => setShowEmail(false)}
                      className="block whitespace-nowrap rounded-md px-4 py-2 font-manrope text-lg text-[#6F7380] transition-colors hover:bg-[#F3F0EF] hover:text-[var(--foreground)]"
                    >
                      claudio@bebidafiufiu.com.br
                    </a>
                    <a
                      href="mailto:contato@bebidafiufiu.com.br"
                      onClick={() => setShowEmail(false)}
                      className="block whitespace-nowrap rounded-md px-4 py-2 font-manrope text-lg text-[#6F7380] transition-colors hover:bg-[#F3F0EF] hover:text-[var(--foreground)]"
                    >
                      contato@bebidafiufiu.com.br
                    </a>
                  </div>
                </>
              )}
            </li>
          </ul>
        </nav>

        <div className="relative justify-self-start md:justify-self-end">
          <button
            type="button"
            onClick={handleShare}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F3F0EF] text-[#6A514E] transition-colors hover:bg-[#E8E2E0]"
            aria-label="Compartilhar contato"
          >
            {copied ? <CheckIcon className="h-6 w-6" /> : <Share2Icon className="h-6 w-6" />}
          </button>
          {copied && (
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[var(--foreground)] px-2 py-1 font-manrope text-xs text-white">
              Link copiado!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
