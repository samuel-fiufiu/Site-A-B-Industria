

const cards = [
  {
    Title: 'Estrutura pronta para envasar',
    Text: 'Maquinário de última geração pronto para entrar em operação imediata para seu produto.',
    Color: '#002A44',
  },
  {
    Title: 'Agilidade no processo',
    Text: 'Processos otimizados para maximizar a eficiência e reduzir tempos de produção.',
    Color: '#004169',
  },
  {
    Title: 'Padronização de lote',
    Text: 'Controle de qualidade rigoroso para que cada unidade mantenha a integridade da marca.',
    Color: '#00598F',
  },
  {
    Title: 'Parceira para crescer junto',
    Text: 'Flexibilidade para acompanhar o aumento da sua demanda industrial conforme o mercado exige.',
    Color: '#0070B5',
  }
]

export function Benefits() {
  return (
    <section>
      <h1>Por que a Fiu-Fiu Indústria?</h1>
      <p>Elimine os gargalos de produção e foque no crescimento da sua marca.</p>
      {cards.map((card, index) => (
        <div key={index}>
          <h2>{card.Title}</h2>
          <p>{card.Text}</p>
        </div>
      ))}
    </section>
  )
}