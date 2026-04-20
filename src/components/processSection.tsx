

const cards = [
  {
    id: 1,
    title: "Alinhamento",
    description: "Definição de volumes, prazos e especificidades técnicas do produto.",
  },
  {
    id: 2,
    title: "Planejamento",
    description: "Cronograma detalhado e reserva de slots na linha industrial.",
  },
  {
    id: 3,
    title: "Preparação",
    description: "Setup de máquinas e recebimento de insumos para o envase.",
  },
  {
    id: 4,
    title: "Envase Industrial",
    description: "Execução da produção com monitoramento técnico contínuo.",
  },
  {
    id: 5,
    title: "Entrega",
    description: "Expedição dos lotes com garantia de padronização final.",
  },
]

export function Process() {
  return (
    <section>
      <h2>jornada Operacional</h2>
      {cards.map(cards => (
        <ol key={cards.id}>
          <li>
            <div>
              <span>{cards.id}</span>
              <h3>{cards.title}</h3>
              <p>{cards.description}</p>
            </div>
          </li>
        </ol>
      ))}
    </section>
  )
}