import { getTranslations } from '@/lib/getTranslations'

export default async function Page() {
  const t = await getTranslations('en')

  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">{t.hero_title}</h1>
    </main>
  )
}
