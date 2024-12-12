import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/badge";
import { StatsCard } from "@/components/stats-card";
import { PerformanceChart } from "@/components/performance-chart";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="pb-24 bg-primary">
      <div className="relative">
        <div className="absolute right-4 top-4">
          <button className="rounded-full p-2 bg-primary text-white">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
        <div className="relative">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={"/Avatar.svg"}
              alt={"Profile Picture"}
              width={100}
              height={100}
            />
            <h1 className="mt-4 text-2xl font-bold text-white">Madelyn Dias</h1>
          </div>
          <Card className="mx-4 mt-6 grid grid-cols-3 gap-4 bg-white/10 p-4">
            <div className="text-center">
              <div className="text-sm text-white/60">POINTS</div>
              <div className="text-xl font-bold text-white">590</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-white/60">WORLD RANK</div>
              <div className="text-xl font-bold text-white">#1,438</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-white/60">LOCAL RANK</div>
              <div className="text-xl font-bold text-white">#54</div>
            </div>
          </Card>
        </div>

        <div className="p-4">
          <Tabs defaultValue="badge">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="badge">Badge</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="badge" className="mt-6">
              <div className="grid grid-cols-3 gap-4">
                <Badge color="emerald" icon="🎯" />
                <Badge color="yellow" icon="📊" />
                <Badge color="blue" icon="💡" />
                <Badge color="pink" icon="🎨" />
                <Badge color="purple" icon="⭐" />
                <Badge color="gray" icon="🔒" isLocked />
              </div>
            </TabsContent>
            <TabsContent value="stats" className="mt-6 space-y-6">
              <StatsCard />
              <PerformanceChart />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
