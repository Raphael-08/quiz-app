import { Card } from "@/components/ui/card";
import Image from "next/image";

interface FriendCardProps {
  title: string;
  points: number;
  avatar: string;
  flag: string;
}

export function FriendCard({ title, points, avatar, flag }: FriendCardProps) {
  return (
    <Card className="flex items-center gap-4 border-none shadow-none">
      <div className="relative">
        <Image height={15} width={15} src={flag} alt={"bi"} className="absolute bottom-0 right-0" />
        <Image height={53} width={53} src={avatar} alt={"bi"} />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-sm text-black">{title}</h3>
        <p className="text-xs text-black/40">{points} points</p>
      </div>
    </Card>
  );
}
