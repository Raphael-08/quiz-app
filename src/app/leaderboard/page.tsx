"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const leaderboardData = [
  {
    name: "Davis Curtis",
    points: 2847,
    avatar: "/placeholder.svg",
    position: 1,
  },
  {
    name: "Alena Donin",
    points: 1409,
    avatar: "/placeholder.svg",
    position: 2,
  },
  {
    name: "Craig Gouse",
    points: 1055,
    avatar: "/placeholder.svg",
    position: 3,
  },
  {
    name: "Madelyn Dias",
    points: 590,
    avatar: "/placeholder.svg",
    position: 4,
  },
  {
    name: "Zain Vaccaro",
    points: 438,
    avatar: "/placeholder.svg",
    position: 5,
  },
];

export default function Leaderboard() {
  const [view, setView] = useState<"weekly" | "allTime">("weekly");

  return (
    <div className="min-h-screen bg-primary pb-24">
      <div className="p-4">
        <div className="mb-6 flex items-center gap-4">
          <button className="text-white" onClick={() => history.back()}>
            <Image height={23} width={23} src={"/back.svg"} alt={"b"} />
          </button>
          <h1 className="text-xl font-bold text-white mx-auto pr-10">
            Learderboard
          </h1>
        </div>

        <Tabs
          value={view}
          onValueChange={(v) => setView(v as "weekly" | "allTime")}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 bg-primary text-white/60">
            <TabsTrigger
              value="weekly"
              className="font-bold data-[state=active]:bg-[#9087E5] data-[state=active]:text-white"
            >
              Weekly
            </TabsTrigger>
            <TabsTrigger
              value="allTime"
              className="font-bold data-[state=active]:bg-[#9087E5] data-[state=active]:text-white"
            >
              All Time
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <Card className="mt-6 bg-[#FFB380] flex border-none p-4 gap-4 rounded-3xl">
          <div className="bg-[#FF9B57] h-5/6 w-1/6 px-4 py-3 text-white font-bold rounded-2xl">#4</div>
          <div className="text-white">
            
            <span className="text-sm font-bold">You are doing better than 60% of other players!</span>
          </div>
        </Card>

        <div className="mt-8 flex items-end justify-center gap-4">
          {leaderboardData.slice(0, 3).map((user) => (
            <div
              key={user.name}
              className={`flex flex-col items-center ${
                user.position === 1
                  ? "order-2"
                  : user.position === 2
                  ? "order-1"
                  : "order-3"
              }`}
            >
              <Avatar
                className={`${
                  user.position === 1 ? "h-20 w-20" : "h-16 w-16"
                } border-4 border-white`}
              >
                <AvatarImage src={user.avatar} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="mt-2 text-center">
                <div className="font-medium text-white">{user.name}</div>
                <div className="text-sm text-white/80">{user.points}p</div>
              </div>
              <div
                className={`mt-4 flex h-${
                  user.position === 1 ? "32" : "24"
                } w-20 items-center justify-center rounded-t-lg ${
                  user.position === 1
                    ? "bg-yellow-400"
                    : user.position === 2
                    ? "bg-gray-300"
                    : "bg-orange-400"
                }`}
              >
                <span className="text-2xl font-bold text-white">
                  {user.position}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {leaderboardData.slice(3).map((user) => (
            <div
              key={user.name}
              className="flex items-center gap-4 rounded-lg bg-white/10 p-4"
            >
              <div className="text-lg font-medium text-white">
                {user.position}
              </div>
              <Avatar>
                <AvatarImage src={user.avatar} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-white">{user.name}</div>
                <div className="text-sm text-white/80">{user.points}p</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
