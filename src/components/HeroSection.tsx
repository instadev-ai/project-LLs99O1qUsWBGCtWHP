export function HeroSection() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <img 
            src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/66765c88-9ffe-433e-b88a-37d269532bc8/LLs99O1qUsWBGCtWHP/1740339351511-pasted-image-1740339347466.png"
            alt="Hero Illustration"
            className="w-full max-w-2xl mx-auto mb-12"
          />
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
            <button className="h-11 px-8 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium">
              Get Started
            </button>
            <button className="h-11 px-8 rounded-full border-2 border-slate-200 hover:bg-slate-50 font-medium">
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}