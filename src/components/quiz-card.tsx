import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface QuizCardProps {
  title: string;
  category: string;
  quizCount: number;
  imagePath: string;
}

export function QuizCard({
  title,
  category,
  quizCount,
  imagePath,
}: QuizCardProps) {
  return (
    <Card className="bg-white p-2 rounded-3xl shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center p-0">
            <Image height={63} width={63} src={imagePath} alt={"bi"} />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-black font-bold">{title}</h3>
            <p className="text-xs text-gray-500">
              {category} • {quizCount} Quizzes
            </p>
          </div>
        </div>
        <ChevronRight className="text-primary" />
      </div>
    </Card>
  );
}
