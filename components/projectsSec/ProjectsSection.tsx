import React from "react";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

function ProjectsSection() {
  return (
    <div id="projects" className="mt-8 mb-20">
      <div>
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          My Projects
        </h1>
        <Separator className="h-[2px] my-2" />
        <p className="text-muted-foreground">
          I have made many projects in my life but these are the only once I
          have now!
        </p>
      </div>
      <div>
        <Tabs defaultValue="feedGrasp" className="mt-5">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="feedGrasp">FeedGrasp</TabsTrigger>
            <TabsTrigger value="password">PassVault</TabsTrigger>
          </TabsList>
          <TabsContent value="feedGrasp">
            <Card className="mt-2">
              <CardHeader>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  FeedGrasp
                </h1>
                <p className="max-sm:text-sm">
                  FeedGrasp is one of my most recent projects, It's a SaaS app
                  where which helps you collect feedbacks of people!
                </p>
              </CardHeader>
              <CardContent>
                <figure className=" aspect-video  w-full   relative rounded-lg">
                  <Image
                    src={"/FeedGrasp.png"}
                    alt="FeedGrasp"
                    fill
                    className="rounded-lg"
                  />
                </figure>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                    <Link href={'https://feed-grasp.vercel.app'} target="_blank">
                    Visit Website
                    </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card className="mt-2">
              <CardHeader>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  PassVault
                </h1>
                <p className="max-sm:text-sm">
                  PassVault is one of my first NextJs projects, It's an app where you can save your passwords so you dond forget them.
                </p>
              </CardHeader>
              <CardContent>
                <figure className="aspect-video  w-full   relative rounded-lg">
                  <Image
                    src={"/PassVault.png"}
                    alt="FeedGrasp"
                    fill
                    className="rounded-lg h-auto"
                  />
                </figure>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                    <Link href={'https://passvault-next-gztl.vercel.app'} target="_blank">
                    Visit Website
                    </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default ProjectsSection;
