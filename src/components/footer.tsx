import { Share2Icon } from "lucide-react";

export function Footer() {
  return (
    <footer>
      <div>
        <h3>A&B Indústria</h3>
        <p>© 2026 Alimentos & Bebidas Indústria</p>
      </div>
      <div>
        <ol>
          <li>
            <a href="">Contato</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Email</a>
          </li>
        </ol>
      </div>
      <div>
        <Share2Icon />
      </div>
    </footer>
  );
}
