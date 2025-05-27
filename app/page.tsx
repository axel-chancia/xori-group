<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cce40a7 (version 4)
=======
>>>>>>> cb7f32a (version 3)
import SectionServices from "@/components/Section-service"; // Ensure the case matches
import Galeries from "@/components/Galeries";
>>>>>>> 9dcb365 (Ajout des sections Section-service et Galeries)

import Heroe from '@/components/Heroe'
import  Apropos from '@/components/Apropos'


export default function HomePage() {
  return (
<<<<<<< HEAD
    <main className="flex flex-col space-y-32">
      <Heroe />
      <Apropos />
    </main>
)
=======
    <div>
  <SectionServices />
  <Galeries/>
    </div>
      
  );
>>>>>>> 9dcb365 (Ajout des sections Section-service et Galeries)
}

=======
>>>>>>> d929c3e (version 4)
=======
import { HeroSection } from '@/components/HeroSection'


export default function HomePage() {
  return (
    <main className="flex flex-col space-y-32">
      <HeroSection />

    </main>
  )
}
>>>>>>> 8f9a1c7 (version 3)
