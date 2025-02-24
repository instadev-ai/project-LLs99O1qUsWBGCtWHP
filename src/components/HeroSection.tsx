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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-slate-900 dark:text-slate-50">
            AI Copilots for your product.
            <br />
            Build fast, customize effortlessly.
          </h1>
          <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300">
            Build a virtual colleague into your product
            <br />
            that fully understands your application & your users.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="h-11 px-8 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium dark:bg-indigo-500 dark:hover:bg-indigo-600">
              Get Started
            </button>
            <button className="h-11 px-8 rounded-full border-2 border-slate-200 hover:bg-slate-50 text-slate-700 font-medium dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800/50">
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}