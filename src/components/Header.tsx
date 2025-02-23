import { Button } from "./ui/button"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="font-semibold">Copilot.ai</Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary">
              Pricing
            </Link>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary">
              Blog
            </Link>
            <Link to="/docs" className="text-sm text-muted-foreground hover:text-primary">
              Documentation
            </Link>
            <Link to="/changelog" className="text-sm text-muted-foreground hover:text-primary">
              Changelog
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}