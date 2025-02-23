export function FeaturesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          <span className="text-blue-500 font-medium">FEATURES</span>
        </div>
        <h2 className="text-3xl font-bold mb-16">
          Explore advanced features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Feature 1 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              An AI Copilot in your application
            </h3>
            <div className="space-y-4">
              <p className="text-slate-600">
                Trained on your documentation and customizable per user.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-green-500">Self Control & management</span>
                <span className="text-slate-400">|</span>
                <span className="text-slate-600">Realtime suggestions</span>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>
                  // Example code here
                </code>
              </pre>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <img 
              src="/feature-screenshot.png" 
              alt="Feature Screenshot"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}