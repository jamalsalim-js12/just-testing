import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-6">
        Just Click On Any Button
      </h1>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/login">Log In</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
}
