import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="font-semibold text-lg">Copilot.ai</Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground">
              Documentation
            </Link>
            <Link to="/changelog" className="text-sm text-muted-foreground hover:text-foreground">
              Changelog
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            Sign in
          </Button>
          <Button 
            size="sm"
            className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}