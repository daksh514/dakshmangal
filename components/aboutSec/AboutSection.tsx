import React from "react";
import { Separator } from "../ui/separator";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { skills } from "@/utils/skills";

function AboutSection() {
  return (
    <div className="mt-10" id="about">
      <div>
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Who Am I
        </h1>
        <Separator className="my-1 h-[2px]" />
        <p className="text-base text-foreground/80 max-sm:text-sm">
          I am a full stack developer with a passion for creating beautiful and
          functional web applications. I have a strong background in web
          development and have worked with a variety of technologies including:
          HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, MongoDB,
          MySQL, and more. I am continuing web development with my school and I
          plan to pursue this as a full time career in the future.
        </p>
      </div>
      <div>
        <Card className="bg-muted/10 mt-8 ">
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Skills I Know
            </h2>
            {/* <Separator className="my-1 h-[2px]" /> */}
          </CardHeader>
          <CardContent>
            <ul>
              {
                skills.map((skill)=>(
                  <li key={skill.name} className="mb-4">
                    <div className="flex justify-between items-center">
                      <h1 className="mb-1">{skill.name}</h1>
                      <Badge variant={"outline"}>{skill.value}%</Badge>
                    </div>
                    <Progress value={skill.value} className="w-full" />
                  </li>
                ))
              }
              
            </ul>
            <p className="text-muted-foreground text-xs text-center">Note: These scores are givem by myself :D</p>
            
          </CardContent>
          
        </Card>
      </div>
    </div>
  );
}

export default AboutSection;
