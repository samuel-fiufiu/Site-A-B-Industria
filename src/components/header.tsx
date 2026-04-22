import Image from "next/image";

import Logo from "/Logo.svg"

export function Header() {
  return (
    <header className="header">
      <div>
        <Image
          src={Logo}
          alt="Logo"
          width={60}
          height={60}
        />
        <strong>Indústria</strong>
      </div>
      <nav>
          <a href="">Início</a>
          <a href="">Formatos</a>
          <a href="">Benefícios</a>
          <a href="">Contato</a>
      </nav>
      <button className="button-1">Falar com o Comercial</button>
    </header>
  );
}