"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Trophy, User, Plus } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const routesleft = [
  { href: "/", icon: Home },
  { href: "/discover", icon: Search },
];

const routesright = [
  { href: "/leaderboard", icon: Trophy },
  { href: "/profile", icon: User },
];

const routescenter = [
  { href: "/create", icon: Plus },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white h-16 flex items-center justify-around px-6 rounded-t-3xl shadow-custom-b">
      {routesleft.map((route) => {
        const Icon = route.icon;
        const isActive = pathname === route.href;
        return (
          <Link
            key={route.href}
            href={route.href}
            className={`flex flex-col items-center p-2 ${
              isActive ? "text-[#5B21B6]" : "text-gray-500"
            }`}
          >
            <Icon className="h-6 w-6" />
          </Link>
        );
      })}
      <div className="relative -top-8">
        <Button
          size={"icon"}
          className="h-12 w-12 rounded-full bg-primary hover:bg-primary"
        >
          <Image height={23} width={23} src={"/plus.svg"} alt={"bi"} />
        </Button>
      </div>
      {routesright.map((route) => {
        const Icon = route.icon;
        const isActive = pathname === route.href;
        return (
          <Link
            key={route.href}
            href={route.href}
            className={`flex flex-col items-center p-2 ${
              isActive ? "text-[#5B21B6]" : "text-gray-500"
            }`}
          >
            <Icon className="h-6 w-6" />
          </Link>
        );
      })}
    </div>
  );
}
