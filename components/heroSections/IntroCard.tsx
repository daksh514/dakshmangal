import React from "react";
import {
  Card,
  CardContent,
} from "../ui/card";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["600", "500"],
});

function IntroCard() {
  return (
    <div>
      <Card className="bg-muted">
        <CardContent className="py-4 flex max-sm:flex-col gap-5 items-center">
            <div className="relative w-full aspect-video">

          <Image
            src={"/Daksh.png"}
            alt="ss"
            fill
            className="border-2 border-muted-foreground rounded-lg "
          />
            </div>
          <div className="">
            <p className="text-xs text-muted-foreground/50">Hello there,</p>
            <h1 className={`text-4xl font-bold text-gray-900 dark:text-gray-100  ${roboto.className}`}>
              I am Daksh
            </h1>
            <p className="text-md text-muted-foreground ">
              I am a Full Stack Developer who uses NextJs and ReactJs to build some of the most amazing websites out there!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default IntroCard;
