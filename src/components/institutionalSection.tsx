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
    <section>
      <h1>Estrutura industrial para marcas que precisam envasar com eficiência e confiança</h1>
      <p>Operamos como o braço logístico e industrial do seu negócio. Segurança operacional, agilidade e consistência são as bases da nossa entrega.</p>
        {cards.map((card, index) => (
          <div key={index}>
            <card.Icon />
            <h3>{card.Title}</h3>
            <p>{card.Text}</p>
          </div>
        ))}
    </section>
  )
}