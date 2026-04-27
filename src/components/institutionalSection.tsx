import { Shield, Zap, Factory  } from "lucide-react"

const cards = [
  {
    Icon: Shield,
    Title: "Segurança Operacional",
    Text: "Protocolos Rigorosos que garantem a integridade do seu produto em cada etapa do envase."
  },
  {
    Icon: Zap,
    Title: "Agilidade & Prazo",
    Text: "Sincronia perfeita entre seu planejamento de vendas e nossa capacidade de produção industrial."
  },
  {
    Icon: Factory,
    Title: "Consistência de Lote",
    Text: "Tecnologia de envase que assegura a mesma qualidade e padronização do primeiro ao último frasco."
  }
]

export function Institutional() {
  return (
    <section id="estrutura" className="py-6 max-w-[1540px] flex flex-col mx-auto gap-8 items-start">
      <div className="items-start flex flex-col gap-4 max-w-[700px]">
        <h1 className="text-5xl font-bold font-jakarta">Estrutura industrial para marcas que precisam envasar com eficiência e confiança</h1>
        <p className="font-manrope text-lg font-semilight">Operamos como o braço logístico e industrial do seu negócio. Segurança operacional, agilidade e consistência são as bases da nossa entrega.</p>
      </div>
      <div className="grid grid-cols-3 gap-4 justify-center w-full">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-start gap-4 max-w-[450px] bg-[var(--soft-white)] p-6 rounded-xl">
            <card.Icon className="bg-[var(--dark-blue)] p-3 rounded-lg text-white w-12 h-12"/>
            <h3 className="text-3xl font-bold font-jakarta">{card.Title}</h3>
            <p className="font-light font-manrope text-lg ">{card.Text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
