// components/TestimonialCard.tsx
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatarId?: number;
}

export default function ReviewCard({
  quote,
  name,
  title,
  avatarId = 1,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col md:p-6  items-center md:items-start gap-4 text-white p-6 rounded-xl border border-gray-600  w-80">

      <div className="flex flex-col text-center md:text-left">
        <p className="font-arial leading-relaxed text-gray-600 mb-3">{quote}</p>
       
      </div>

      <div className="flex items-center gap-4 mt-4">
        <Image
          src={`https://i.pravatar.cc/100?img=${avatarId}`}
          alt={name}
          width={64}
          height={64}
          className="rounded-full"
        />

        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        <span className="font-arial">{name}</span>
        <span className="text-sm text-gray-600">{title}</span>
      </div>
    </div>
  );
}
