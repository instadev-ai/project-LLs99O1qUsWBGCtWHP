import { Button } from "./ui/button"

export function HeroSection() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            AI Copilots for your product.
            <br />
            Build fast, customize effortlessly.
          </h1>
          <p className="text-xl text-muted-foreground">
            Build a virtual colleague into your product
            <br />
            that fully understands your application & your users.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}