import React from "react";
import { Separator } from "../ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

function ContactSection() {
  return (
    <div className="mt-5 mb-20" id="contact">
      <div>
        <Card className=" mt-2">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>Conact me by filling this form!</CardDescription>
          </CardHeader>
          <CardContent>
            <form action="https://formspree.io/f/mjvnnbjk" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="4a5544bd-15f1-450b-95fb-284e8d7d919b"
              />

              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input
                    id="name"
                    placeholder="johndoe@mail.com"
                    name="Email"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Message</Label>
                  <Textarea
                    placeholder="Type your message here."
                    name="Message"
                  />
                </div>
              </div>
              <Button className="mt-4">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ContactSection;
