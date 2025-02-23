import { Button } from "./ui/button"

export function ActionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-950 to-indigo-900">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Take Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-xl shadow-2xl p-4">
            {/* Left side dashboard mockup */}
            <div className="aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src="/dashboard-mockup.png" 
                alt="Dashboard Interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            {/* Right side code snippets */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="h-20 bg-white/5 rounded"></div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="h-20 bg-white/5 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}