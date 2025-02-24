import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="font-semibold text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Copilot.ai
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:-translate-y-0.5 inline-block">
              Pricing
            </Link>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:-translate-y-0.5 inline-block">
              Blog
            </Link>
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:-translate-y-0.5 inline-block">
              Documentation
            </Link>
            <Link to="/changelog" className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:-translate-y-0.5 inline-block">
              Changelog
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="sm"
            className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-0.5"
          >
            Sign in
          </Button>
          <Button 
            size="sm"
            className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}