export function HeroSection() {
  return (
    <section 
      className="pt-24 pb-12 md:pt-32 md:pb-20 bg-cover bg-center bg-no-repeat min-h-[600px] relative"
      style={{
        backgroundImage: `url('https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/66765c88-9ffe-433e-b88a-37d269532bc8/LLs99O1qUsWBGCtWHP/1740339351511-pasted-image-1740339347466.png')`
      }}
    >
      <div className="container relative z-10">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
            AI Copilots for your product.
            <br />
            Build fast, customize effortlessly.
          </h1>
          <p className="text-xl leading-relaxed text-white/80">
            Build a virtual colleague into your product
            <br />
            that fully understands your application & your users.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="h-11 px-8 rounded-full bg-white hover:bg-white/90 text-indigo-600 font-medium">
              Get Started
            </button>
            <button className="h-11 px-8 rounded-full border-2 border-white/20 hover:bg-white/10 text-white font-medium">
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}