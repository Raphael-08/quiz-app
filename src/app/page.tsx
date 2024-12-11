import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronRight,
  Home,
  Search,
  BarChart2,
  User,
  Plus,
} from "lucide-react";
import Image from "next/image";

export default function QuizApp() {
  return (
    <div className="min-h-screen bg-primary text-white relative">
      {/* Header */}
      <div className="px-4 pt-4">
        <div className="flex justify-between items-start mb-6">
          <div className="w-1/2">
            <p className="text-sm text-[#FFD6DD] font-bold font-sans opacity-90 flex items-center gap-2">
              <Image
                height={23}
                width={23}
                src={"/Sun.svg"}
                alt={"Recent Quiz Icon"}
              />
              GOOD MORNING
            </p>
            <h1 className="text-2xl font-bold mt-1">Madelyn Dias</h1>
          </div>
          <div className="flex items-center justify-end w-1/2">
            <Avatar className="h-12 w-12 mt-1.5">
              <AvatarImage src="/Avatar.svg" alt="@A" />
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Recent Quiz Card */}
        <Card className="bg-accent p-4 rounded-2xl mb-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col w-3/4 gap-1 pl-1">
              <p className="text-[#aa6571] text-xs pl-1 font-bold">
                RECENT QUIZ
              </p>
              <div>
                <div className="flex items-center gap-2">
                  <Image
                    height={24}
                    width={24}
                    src={"/Icon.svg"}
                    alt={"Recent Quiz Icon"}
                  />
                  <h3 className="text-[#660012] font-bold text-md">
                    A Basic Music Quiz
                  </h3>
                </div>
              </div>
            </div>
            <Image height={43} width={43} src={"/pie.svg"} alt={"p"} />
          </div>
        </Card>

        {/* Featured Section */}
        <Card className="bg-white/25 backdrop-blur-sm border-none p-6 relative flex flex-col justify-center items-center rounded-2xl mb-6">
          <div className="flex items-center gap-4 mb-3">
            <Image
              height={50}
              width={50}
              src={"/1.svg"}
              alt={"bi"}
              className="absolute top-3 left-3"
            />
            <span className="text-sm font-bold opacity-90 text-white/90">
              FEATURED
            </span>
          </div>
          <h2 className="text-lg mb-4 text-center px-8 text-white font-bold">
            Take part in challenges with friends or other players
          </h2>
          <Button
            variant="secondary"
            className="bg-white h-11 flex text-primary font-extrabold rounded-3xl mb-3"
          >
            <Image height={20} width={20} src={"/Button_icon.svg"} alt={"bi"} />
            Find Friends
          </Button>
          <Image
            height={65}
            width={65}
            src={"/2.svg"}
            alt={"bi"}
            className="absolute bottom-12 right-3"
          />
          <Image
            height={80}
            width={80}
            src={"/rings.svg"}
            alt={"bi"}
            className="absolute bottom-0 left-0 rounded-bl-lg"
          />
          <Image
            height={80}
            width={80}
            src={"/ringst.svg"}
            alt={"bi"}
            className="absolute top-0 right-0 rounded-tr-lg"
          />
        </Card>
      </div>

      <div className="bg-white rounded-t-[1.8rem] p-5 h-full">
        {/* Live Quizzes */}
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl text-black font-bold">Live Quizzes</h2>
          <Button
            variant="link"
            className="text-primary font-bold p-1 opacity-90"
          >
            See all
          </Button>
        </div>

        {/* Quiz List */}
        <div className="space-y-3 px-2 mb-16">
          <Card className="bg-white p-2 rounded-3xl shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center p-0">
                  <Image
                    height={63}
                    width={63}
                    src={"/m-quiz.svg"}
                    alt={"bi"}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-black font-bold">Statistics Math Quiz</h3>
                  <p className="text-xs text-gray-500">Math • 12 Quizzes</p>
                </div>
              </div>
              <ChevronRight className="text-primary" />
            </div>
          </Card>
          <Card className="bg-white p-2 rounded-3xl shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center p-0">
                  <Image
                    height={63}
                    width={63}
                    src={"/I-quiz.svg"}
                    alt={"bi"}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-black font-bold">Integers Quiz</h3>
                  <p className="text-xs text-gray-500">Math • 10 Quizzes</p>
                </div>
              </div>
              <ChevronRight className="text-primary" />
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white h-16 flex items-center justify-around px-6 rounded-t-3xl shadow-custom-b">
        <Button variant="ghost" size="icon" className="text-purple-600">
          <Home className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400">
          <Search className="h-6 w-6" />
        </Button>
        <div className="relative -top-8">
          <Button
            size={"icon"}
            className="h-12 w-12 rounded-full bg-primary hover:bg-primary"
          >
            <Image height={23} width={23} src={"/plus.svg"} alt={"bi"} />
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-400">
          <BarChart2 className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-400">
          <User className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}