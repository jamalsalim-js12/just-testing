import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Eye, LockKeyhole, Mail, UserRound } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";

const SignupForm = () => {
  return (
    <Card className="h-fit w-[360px] my-5 min-w-[360px] max-w-sm lg:max-w-[520px] xl:max-w-[550px] md:w-full md:max-w-[550px]">
      <CardHeader className="flex flex-col gap-y-2 items-center">
        <CardTitle className="w-fit  border rounded-full p-4 bg-gray-300">
          <UserRound size={30} />
        </CardTitle>
        <CardDescription className="xl:text-2xl text-black font-semibold">
          Your Hotel Operations with Ease
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          <div className="flex gap-x-3 justify-center">
            <div className="flex gap-x-2 items-center">
              <Checkbox id="hotel-manager" />
              <Label htmlFor="hotel-manager">Hotel Manager</Label>
            </div>
            <div className="flex gap-x-2 items-center">
              <Checkbox id="renter" defaultChecked />
              <Label htmlFor="renter">Renter</Label>
            </div>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-y-2 md:gap-x-2">
            <div className="grid gap-2">
              <Label htmlFor="first-name" className="text-sm">
                First Name<span className="text-blue-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="first-name"
                  type="text"
                  placeholder="Barbara"
                  required
                  className="text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name" className="text-sm">
                Last Name<span className="text-blue-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="last-name"
                  type="text"
                  placeholder="Boadu"
                  required
                  className="text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-y-2 md:gap-x-2">
            <div className="grid gap-2">
              <Label htmlFor="company-name" className="text-sm">
                Company Name<span className="text-blue-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="company-name"
                  type="text"
                  placeholder="Barbara"
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company-website" className="text-sm">
                Company Website<span className="text-blue-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="company-website"
                  type="text"
                  placeholder="Boadu"
                  required
                  className="text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-y-2 md:gap-x-2">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-sm">
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
                  className="pl-10 text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="phone" className="text-sm">
                  Phone Number<span className="text-blue-500">*</span>
                </Label>
              </div>
              <div className="relative">
                <Input
                  id="phone"
                  type="phone"
                  required
                  placeholder=" +1 (555) 000-0000"
                  className="w-full text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-y-2 md:gap-x-2">
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-sm">
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
                  className="pl-10 pr-10 py-2 w-full text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="confirm-password" className="text-sm">
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
                  className="pl-10 pr-10 py-2 w-full text-sm"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center my-1">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-xs md:text-sm text-gray-500">
              I agree to the{" "}
              <Link href="#" className="underline text-black">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline text-black">
                Privacy Policy
              </Link>
            </Label>
          </div>
          <Button type="submit" className="w-full">
            Create Account
          </Button>
          <Button variant="outline" className="w-full text-blue-500">
            Login using Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline text-blue-500">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignupForm;
