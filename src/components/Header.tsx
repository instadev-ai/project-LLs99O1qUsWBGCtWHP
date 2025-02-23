import { Button } from "./ui/button"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="font-semibold text-lg">Copilot.ai</Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/pricing" className="text-sm text-slate-600 hover:text-slate-900">
              Pricing
            </Link>
            <Link to="/blog" className="text-sm text-slate-600 hover:text-slate-900">
              Blog
            </Link>
            <Link to="/docs" className="text-sm text-slate-600 hover:text-slate-900">
              Documentation
            </Link>
            <Link to="/changelog" className="text-sm text-slate-600 hover:text-slate-900">
              Changelog
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-slate-600 hover:text-slate-900"
          >
            Sign in
          </Button>
          <Button 
            size="sm"
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}