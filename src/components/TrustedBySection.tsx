export function TrustedBySection() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-xl font-semibold text-center mb-12">
          Trusted by developers at companies worldwide:
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
          <div className="h-8">
            <img 
              src="/company-logo-1.png" 
              alt="Company Logo" 
              className="h-full grayscale"
            />
          </div>
          <div className="h-8">
            <img 
              src="/company-logo-2.png" 
              alt="Company Logo" 
              className="h-full grayscale"
            />
          </div>
          <div className="h-8">
            <img 
              src="/company-logo-3.png" 
              alt="Company Logo" 
              className="h-full grayscale"
            />
          </div>
          <div className="h-8">
            <img 
              src="/company-logo-4.png" 
              alt="Company Logo" 
              className="h-full grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  )
}