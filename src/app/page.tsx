import { QuizCard } from "@/components/quiz-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { quizzes } from "@/data/quiz";
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
        <Card className="relative bg-accent p-4 rounded-2xl mb-4">
          <div className="absolute top-0 left-0">
            <Image
              height={100}
              width={300}
              src={"/lines.svg"}
              alt={"Recent Quiz Icon"}
            />
          </div>
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
          {quizzes.slice(0, 6).map((quiz) => (
            <QuizCard key={quiz.title} {...quiz} />
          ))}
        </div>
      </div>
    </div>
  );
}
