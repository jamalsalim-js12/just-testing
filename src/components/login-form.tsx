import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, LockKeyhole, Mail, UserRound } from "lucide-react";

export function LoginForm() {
  return (
    <Card className="min-w-[360px] max-w-sm lg:max-w-[500px] w-full md:w-[500px]">
      <CardHeader className="flex flex-col gap-y-2 items-center">
        <CardTitle className="w-fit  border rounded-full p-4 bg-gray-300">
          <UserRound size={30} />
        </CardTitle>
        <CardDescription className="xl:text-3xl text-black font-semibold">
          Welcome Back!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">
              Email Address<span className="text-blue-500">*</span>
            </Label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <Mail size={20} />
              </span>
              <Input
                id="email"
                type="email"
                placeholder="hello@whoever.com"
                required
                className="pl-10"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">
                Password<span className="text-blue-500">*</span>
              </Label>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center justify-center text-gray-400">
                <LockKeyhole size={20} />
              </span>
              <span className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-400">
                <Eye size={20} />
              </span>
              <Input
                id="password"
                type="password"
                required
                placeholder=" • • • • • • • • • • "
                className="pl-10 pr-10 py-2 w-full "
              />
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="confirm-password">
                Confirm Password<span className="text-blue-500">*</span>
              </Label>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center justify-center text-gray-400">
                <LockKeyhole size={20} />
              </span>
              <span className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-400">
                <Eye size={20} />
              </span>
              <Input
                id="confirm-password"
                type="password"
                required
                placeholder=" • • • • • • • • • • "
                className="pl-10 pr-10 py-2  w-full"
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Log In
          </Button>
          <Button variant="outline" className="w-full text-blue-500">
            Login using Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline text-blue-500">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
