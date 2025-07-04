import Image from "next/image";
import Link from "next/link";
interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}
const CompanionCard = ({id , name,topic,subject,duration,color}:CompanionCardProps) => {
  return (
   <article className="companion-card"style = {{backgroundColor:color}}>
       <div className="flex justify-between items-center">
        <div className="subject-badge"> 
           {subject}
        </div>
        <button className="companinon-bookmark">
          <Image src="/icons/bookmark.svg" alt="bookmark" width={24} height={24} />
        </button>
        </div>

        <h2 className="companion-name font-bold text-2xl">{name}</h2>
        <p className="companion-topic text-sm">{topic}</p>
        <div className="companion-duration flex items-center gap-2">
          <Image src="/icons/clock.svg" alt="clock" width={16} height={16} />
        <p className="text-sm">
          {duration} minutes
        </p>
        </div>
        <Link href={`/companions/${id}`} className="w-full">
          <button className="btn-primary w-full justify-center">
            Launch Lesson
          </button>
        </Link>
   </article>
  )
}

export default CompanionCard
