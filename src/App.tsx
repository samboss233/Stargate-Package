import { useMemo, useState, useEffect } from 'react';
import { Container, Theme } from './settings/types';
import { StargateWebsite } from './components/generated/StargateWebsite';
import { ContactPage } from './components/generated/ContactPage';

let theme: Theme = 'light';
// only use 'centered' container for standalone components, never for full page apps or websites.
let container: Container = 'none';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');

  useEffect(() => {
    // Handle initial page load
    const path = window.location.pathname;
    if (path === '/contact') {
      setCurrentPage('contact');
    }

    // Listen for browser navigation
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPage(path === '/contact' ? 'contact' : 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  const generatedComponent = useMemo(() => {
    // THIS IS WHERE THE TOP LEVEL GENRATED COMPONENT WILL BE RETURNED!
    if (currentPage === 'contact') {
      return <ContactPage />;
    }
    return <StargateWebsite />; // %EXPORT_STATEMENT%
  }, [currentPage]);

  if (container === 'centered') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        {generatedComponent}
      </div>
    );
  } else {
    return generatedComponent;
  }
}

export default App;