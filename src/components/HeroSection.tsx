import { Button } from "./ui/button"

export function HeroSection() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            AI Copilots for your product.
            <br />
            Build fast, customize effortlessly.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Build a virtual colleague into your product
            <br />
            that fully understands your application & your users.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 hover:bg-slate-50"
            >
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}