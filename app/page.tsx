// app/page.tsx
import type { Technology, StrapiResponse,} from '@/types/strapi'


async function getData(): Promise<StrapiResponse<Technology>> {
  const res = await fetch(
    'https://radiant-gorge-89176-9387036e772d.herokuapp.com/api/coffee-apis?populate=*'
  )

  if (!res.ok) {
    throw new Error('Erro ao buscar dados')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()

  return (
    <main className="min-h-screen bg-zinc-100 py-10">
      <section className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-zinc-800 mb-8">
          Tecnologias
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.data
            .sort((a, b) => a.id - b.id) // ordena do menor pro maior ID
            .map((item) => {
              const { id } = item
              const attributes = item.attributes ?? item
              const img = attributes.IMG
              const imgUrl = img?.formats?.medium?.url ?? img?.url
              const altText = img?.alternativeText ?? attributes.Name

              return (
                <div
                  key={id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
                >
                  {imgUrl ? (
                    <img
                      src={imgUrl}
                      alt={altText}
                      className="h-100 w-full object-cover"
                    />
                  ) : (
                    <div className="h-64 w-full bg-zinc-200 flex items-center justify-center text-zinc-500">
                      Sem imagem
                    </div>
                  )}

                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-zinc-800 mb-2">
                      {attributes.Name}
                    </h2>
                    <p className="text-zinc-600 text-sm leading-relaxed whitespace-pre-line">
                      {attributes.Description}
                    </p>
                  </div>
                </div>
              )
            })}
        </div>
      </section>
    </main>
  )
}
