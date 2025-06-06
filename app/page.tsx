import { Button } from '@/components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import CTA from '@/components/CTA'
import CompanionsList from '@/components/CompanionList'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className=''>Popular Companions</h1>
      <section className='home-section'>
         <CompanionCard id="1" name="John Doe" topic="Math" subject="Algebra" duration={10} color="red" />
         <CompanionCard id="2" name="Jane Doe" topic="Math" subject="Algebra" duration={10} color="blue" />
         <CompanionCard id="3" name="John Doe" topic="Math" subject="Algebra" duration={10} color="green" />
      </section>
      <section className='home-section'>
        <CompanionsList 
        title="Recently completed lessons"
        companions={recentSessions}
        classNames="w-2/3 max"  
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page