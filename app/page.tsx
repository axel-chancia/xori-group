
import Heroe from '@/components/Heroe'
import  Apropos from '@/components/Apropos'


export default function HomePage() {
  return (
    <main className="flex flex-col space-y-32">
      <Heroe />
      <Apropos />
    </main>
)
}
