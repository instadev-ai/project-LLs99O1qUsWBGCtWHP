export function ActionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-950 to-indigo-900 overflow-hidden">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Take Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <img 
              src="https://img.freepik.com/free-vector/gradient-dashboard-template_52683-77078.jpg"
              alt="Analytics Dashboard"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <div className="bg-white/[0.02] backdrop-blur-sm rounded-xl p-4">
              <img 
                src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"
                alt="Code Interface"
                className="w-full rounded-lg"
              />
            </div>
            <div className="bg-white/[0.02] backdrop-blur-sm rounded-xl p-4">
              <img 
                src="https://img.freepik.com/free-vector/gradient-infographic-template_23-2149161911.jpg"
                alt="Analytics Interface"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}