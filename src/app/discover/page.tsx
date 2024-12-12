"use client";

import { useState } from "react";
import { friends } from "@/data/friends";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuizCard } from "@/components/quiz-card";
import { FriendCard } from "@/components/friend-card";
import { quizzes } from "@/data/quiz";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Discover() {
  const [search, setSearch] = useState("");

  const filterItems = (items: any[], query: string) => {
    return items.filter((item) =>
      item.title?.toLowerCase().includes(query.toLowerCase())
    );
  };



  const filteredQuizzes = filterItems(quizzes, search);
  const filteredFriends = filterItems(friends, search);


  return (
    <div className="p-4 pb-24 bg-primary">
      <div className="mb-6 flex items-center gap-4">
        <button className="text-white" onClick={() => history.back()}>
          <Image height={23} width={23} src={"/back.svg"} alt={"b"} />
        </button>
        <h1 className="text-xl font-bold text-white mx-auto pr-10">Discover</h1>
      </div>

      <div className="relative mb-16">
        <Image height={20} width={20} src={"/search.svg"} alt={"s"} className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform" />
        <Input
          className="pl-10 h-12 text-white border-white/40 bg-[#5B4EC3]"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex bg-white rounded-[2rem] p-2">
        <Tabs defaultValue="top">
          <TabsList className="relative mb-6 grid w-full grid-cols-4 bg-transparent">
            {["Top", "Quiz", "Categories", "Friends"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab.toLowerCase()}
                className="relative h-12 bg-transparent text-base data-[state=active]:bg-transparent data-[state=active]:text-[#5B21B6] data-[state=active]:shadow-none"
              >
                {tab}
                <div className="absolute -bottom-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary opacity-0 transition-opacity data-[state=active]:opacity-100" />
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="top" className="space-y-4 p-4">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl text-black font-bold">Quiz</h2>
              <Button
                variant="link"
                className="text-primary font-bold p-1 opacity-90"
              >
                See all
              </Button>
            </div>
            {filteredQuizzes.slice(0, 2).map((quiz) => (
              <QuizCard key={quiz.title} {...quiz} />
            ))}
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl text-black font-bold">Friends</h2>
              <Button
                variant="link"
                className="text-primary font-bold p-1 opacity-90"
              >
                See all
              </Button>
            </div>
            {filteredFriends.slice(0, 3).map((friend) => (
              <FriendCard key={friend.name} {...friend} />
            ))}
          </TabsContent>
          <TabsContent value="quiz" className="space-y-4">
            {filteredQuizzes.map((quiz) => (
              <QuizCard key={quiz.title} {...quiz} />
            ))}
          </TabsContent>
          <TabsContent value="friends" className="space-y-4 p-5">
          {filteredFriends.map((quiz) => (
              <FriendCard key={quiz.title} {...quiz} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
