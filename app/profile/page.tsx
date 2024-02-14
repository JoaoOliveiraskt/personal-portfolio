import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <main className="min-h-screen w-full sm:p-4 flex items-center justify-center">
      <div className="flex flex-col space-y-5">
        <h1 className="text-xl text-primary font-bold">Coming soon</h1>
        <a href="/"><Button>Return to Home</Button></a>
      </div>
    </main>
  );
}
