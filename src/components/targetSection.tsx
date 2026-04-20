

const targets = [
  {
    id: 1,
    title: "Marcas de Bebidas",
    description: "Indústrias que já possuem sua fórmula e precisam de braço industrial para produção em massa."
  },
  {
    id: 2,
    title: "Distribuidores & Private Labels",
    description: "Parcerias para marcas próprias que buscam confiança e constância no abastecimento."
  },
  {
    id: 3,
    title: "Projetos em Expansão",
    description: "Bebidas que ganharam tração e agora precisam sair do envase artesanal para o industrial."
  },
]

export function Target() {
  return (
    <section>
      <div>
        <div>
          <span>Escalabilidade Industrial</span>
        </div>
        <div>
          <span>Garantia de entrega</span>
        </div>
      </div>

      <div>
        <h1>Para Quem envasamos</h1>
        {targets.map(target => (
          <ol key={target.id}>
            <h3>{target.title}</h3>
            <p>{target.description}</p>
          </ol>
        ))}
      </div>
    </section>
  )
}