import { cn } from "@/lib/cn";

export function Hairline({ className }: { className?: string }) {
  return <div aria-hidden className={cn("h-px w-full bg-current/18", className)} />;
}
