import Image from "next/image";

import Logo from "/Logo.svg"

export function Header() {
  return (
    <header>
      <Image
        src={Logo}
        alt="Logo"
        width={70}
        height={70}
      />
      <p>Indústria</p>
      <nav>
        <ul>
          <li><a href="">Início</a></li>
          <li><a href="">Formatos</a></li>
          <li><a href="">Benefícios</a></li>
          <li><a href="">Contato</a></li>
        </ul>
      </nav>
      <button>Falar com o Comercial</button>
    </header>
  );
}