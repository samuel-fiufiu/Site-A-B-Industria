import { Header } from "@/components/header";
import { Hero } from "@/components/heroSection"
import { Institutional } from "@/components/institutionalSection";
import { Format } from "@/components/formatSection";
import { Benefits } from "@/components/benefitsSection";
import { Target } from "@/components/targetSection";
import { Process } from "@/components/processSection";
import { Cta } from "@/components/ctaSection";
import { Footer } from "@/components/footer";

export default function Home() {
	return (
		<div>
			<Header/>

			<main>
				<Hero/>
				<Institutional/>
				<Format/>
				<Benefits/>
				<Target/>
				<Process/>
				<Cta/>
			</main>

			<footer>
				<Footer/>
			</footer>
		</div>
	);
}
