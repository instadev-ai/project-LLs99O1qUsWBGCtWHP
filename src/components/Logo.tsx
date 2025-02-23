import { cn } from "@/lib/utils"

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <img
        src="/lovable.svg"
        alt="Lovable"
        className="h-8 w-auto"
        loading="lazy"
      />
    </div>
  )
}