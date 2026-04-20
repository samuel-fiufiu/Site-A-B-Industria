import { CircleCheck as Check} from "lucide-react"

const Formats = [
  {
    Volume: '275ml',
    Category: ['Carbonatados', 'Não Carbonatados'],
    Text: 'ideal para drinks prontos, refrigerantes artesanais e águas saborizadas. Envase com pressão controlada para manter a refrescância.',
    infos: ['Garrafa de Vidro', 'Tampa Coroa']
  },
  {
    Volume: '275ml',
    Category: ['Não Carbonatados'],
    Text: 'Ideal para drinks prontos, refrigerantes artesanais e águas saborizadas. Envase com pressão controlada para manter a refrescância.',
    infos: ['Garrafa de Vidro', 'Tampa Rosca/Rolha']
  }
]

export function Format() {
  return (
    <section>
      <h1>Formatos de Envase</h1>
      <p>Estrutura preparada para diferentes volumetrias e especificidades de produto.</p>
      {Formats.map((format, index) => (
        <div key={index}>
          <h2>Volume {format.Volume}</h2>
          {format.Category.map((category, catIndex) => (
            <div key={catIndex}>
              <p>{category}</p>
            </div>
          ))}
          <p>{format.Text}</p>
          {format.infos.map((info, infoIndex) => (
            <div key={infoIndex}>
              <Check />
              <p>{info}</p>
            </div>
          ))}
        </div>
      ))}

    </section>
  )
}