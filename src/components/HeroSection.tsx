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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-slate-900 dark:text-slate-50 animate-fade-in">
            AI Copilots for your product.
            <br />
            Build fast, customize effortlessly.
          </h1>
          <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300 animate-fade-in-up delay-100">
            Build a virtual colleague into your product
            <br />
            that fully understands your application & your users.
          </p>
          <div className="flex items-center justify-center space-x-4 animate-fade-in-up delay-200">
            <button className="group h-11 px-8 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
              Get Started
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <button className="group h-11 px-8 rounded-full bg-white/90 hover:bg-white text-indigo-600 font-medium dark:bg-white/10 dark:hover:bg-white/20 dark:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
              Live Demo
              <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}