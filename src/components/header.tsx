"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Logo from "/Logo.svg";

const NAV_ITEMS = [
  { id: "inicio", label: "Início" },
  { id: "estrutura", label: "Estrutura" },
  { id: "formatos", label: "Formatos" },
  { id: "beneficios", label: "Benefícios" },
  { id: "processo", label: "Processo" },
  { id: "contato", label: "Contato" },
] as const;

export function Header() {
  const [activeSection, setActiveSection] = useState<string>(NAV_ITEMS[0].id);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(
      Boolean,
    ) as HTMLElement[];

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const nav = navRef.current;

    if (!nav) {
      return;
    }

    const updateIndicator = () => {
      const currentSection = hoveredSection ?? activeSection;
      const activeLabel = nav.querySelector<HTMLElement>(
        `[data-section="${currentSection}"] [data-nav-label]`,
      );

      if (!activeLabel) {
        return;
      }

      const navRect = nav.getBoundingClientRect();
      const labelRect = activeLabel.getBoundingClientRect();

      nav.style.setProperty("--indicator-left", `${labelRect.left - navRect.left}px`);
      nav.style.setProperty("--indicator-width", `${labelRect.width}px`);
      nav.style.setProperty("--indicator-opacity", "1");
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeSection, hoveredSection]);

  const handleNavigation = (sectionId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveSection(sectionId);

    const target = document.getElementById(sectionId);

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="bg-white font-manrope fixed w-full top-0 left-0 z-10 grid grid-cols-[auto_1fr_auto] gap-6 items-center py-4 px-8 shadow-md">
      <div className="flex items-center gap-2">
        <Image src={Logo} alt="Logo" width={60} height={60} />
        <span className="font-bold text-2xl">Indústria</span>
      </div>

      <nav
        ref={navRef}
        className="animate-nav relative mx-auto flex w-fit items-center gap-2 text-sm font-semibold"
        onMouseLeave={() => setHoveredSection(null)}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-section={item.id}
            onClick={handleNavigation(item.id)}
            onMouseEnter={() => setHoveredSection(item.id)}
            onFocus={() => setHoveredSection(item.id)}
            onBlur={() => setHoveredSection(null)}
            className={activeSection === item.id ? "active" : ""}
          >
            <span data-nav-label>{item.label}</span>
          </a>
        ))}
        <span aria-hidden="true" className="nav-indicator" />
      </nav>

      <a href="#contato" onClick={handleNavigation("contato")} className="button-1">
        Falar com o Comercial
      </a>
    </header>
  );
}
