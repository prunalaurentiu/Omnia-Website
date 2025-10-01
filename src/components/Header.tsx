export function Header() {
  return (
    <header className="bg-white border-b" style={{borderColor: 'var(--sage-medium)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="text-card-title" style={{color: 'var(--forest-deep)', letterSpacing: '0.1em'}}>
              NEXUS CAPITAL
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-12">
            <a 
              href="#home" 
              className="text-body transition-colors hover:opacity-80"
              style={{color: 'var(--forest-light)'}}
            >
              Home
            </a>
            <a 
              href="#strategy" 
              className="text-body transition-colors hover:opacity-80"
              style={{color: 'var(--forest-light)'}}
            >
              Strategy
            </a>
            <a 
              href="#team" 
              className="text-body transition-colors hover:opacity-80"
              style={{color: 'var(--forest-light)'}}
            >
              Team
            </a>
            <a 
              href="#insights" 
              className="text-body transition-colors hover:opacity-80"
              style={{color: 'var(--forest-light)'}}
            >
              Insights
            </a>
            <a 
              href="#results" 
              className="text-body transition-colors hover:opacity-80"
              style={{color: 'var(--forest-light)'}}
            >
              Results
            </a>
            <a 
              href="#contact" 
              className="text-body transition-colors hover:opacity-80"
              style={{color: 'var(--forest-light)'}}
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu placeholder - can be expanded later if needed */}
          <div className="md:hidden">
            <button 
              className="p-2 rounded-md"
              style={{color: 'var(--forest-light)'}}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}