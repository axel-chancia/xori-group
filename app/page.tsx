import { HeroSection } from '@/components/HeroSection'
import  Apropos from '@/components/Apropos'


export default function HomePage() {
  return (
    <main className="flex flex-col space-y-32">
      <HeroSection />
      <Apropos />
      
    </main>
  )
}
