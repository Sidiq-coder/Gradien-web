import React, { useState, useEffect, useCallback } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Articles } from './components/Articles';
import { Ecommerce } from './components/Ecommerce';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { Overview } from './components/dashboard/Overview';
import { MembersManagement } from './components/dashboard/MembersManagement';
import { ArticlesManagement } from './components/dashboard/ArticlesManagement';
import { EcommerceManagement } from './components/dashboard/EcommerceManagement';
import { ArticlesPage } from './pages/Articles';
import { AddArticlePage } from './pages/AddArticle';
import { ShopPage } from './pages/Shop';
import { Toaster } from './components/ui/sonner';

type Page = 'home' | 'login' | 'register' | 'dashboard' | 'articles' | 'shop' | 'add-article';
type DashboardPage = 'overview' | 'members' | 'articles' | 'ecommerce' | 'settings';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [dashboardPage, setDashboardPage] = useState<DashboardPage>('overview');
  const { user, isAuthenticated, loading } = useAuth();

  // Memoized navigation function to prevent infinite re-renders
  const navigateTo = useCallback((page: Page) => {
    window.location.hash = page;
    setCurrentPage(page);
  }, []);

  // Memoized auth handlers
  const handleAuthNavigation = useCallback(() => {
    navigateTo('home');
  }, [navigateTo]);

  const handleAuthToggle = useCallback(() => {
    setCurrentPage(prev => prev === 'login' ? 'register' : 'login');
  }, []);

  const handleDashboardPageChange = useCallback((page: string) => {
    setDashboardPage(page as DashboardPage);
  }, []);

  // Simple routing system
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (['home', 'login', 'register', 'dashboard', 'articles', 'shop', 'add-article'].includes(hash)) {
        setCurrentPage(hash as Page);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Auto redirect to dashboard after successful login - with proper dependencies
  useEffect(() => {
    if (isAuthenticated && !loading && (currentPage === 'login' || currentPage === 'register')) {
      navigateTo('dashboard');
    }
  }, [isAuthenticated, loading, currentPage, navigateTo]);

  const renderDashboardContent = useCallback(() => {
    switch (dashboardPage) {
      case 'overview':
        return <Overview />;
      case 'members':
        return <MembersManagement />;
      case 'articles':
        return <ArticlesManagement />;
      case 'ecommerce':
        return <EcommerceManagement />;
      case 'settings':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Pengaturan</h1>
              <p className="text-gray-600 mt-1">Kelola pengaturan dashboard dan profil Anda</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">Pengaturan Profil</h3>
              <p className="text-gray-600">Fitur pengaturan akan tersedia segera.</p>
            </div>
          </div>
        );
      default:
        return <Overview />;
    }
  }, [dashboardPage]);

  const renderPage = () => {
    // Show loading state
    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-[#0d7377] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat...</p>
          </div>
        </div>
      );
    }

    switch (currentPage) {
      case 'login':
        return (
          <Login 
            onToggleMode={handleAuthToggle}
            onBack={handleAuthNavigation}
          />
        );
      case 'register':
        return (
          <Register 
            onToggleMode={handleAuthToggle}
            onBack={handleAuthNavigation}
          />
        );
      case 'dashboard':
        // Redirect to login if not authenticated
        if (!isAuthenticated) {
          navigateTo('login');
          return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-[#0d7377] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Redirecting to login...</p>
              </div>
            </div>
          );
        }
        return (
          <DashboardLayout 
            currentPage={dashboardPage}
            onPageChange={handleDashboardPageChange}
            onNavigate={navigateTo}
          >
            {renderDashboardContent()}
          </DashboardLayout>
        );
      case 'add-article':
        // Pastikan hanya user login yang bisa akses
        if (!isAuthenticated) {
          navigateTo('login');
          return null;
        }
        return (
          <AddArticlePage
            onBack={() => window.history.back()}
            onSave={(article) => {
              try {
                const raw = localStorage.getItem('gradien_new_articles');
                const list = raw ? JSON.parse(raw) : [];
                const withId = {
                  id: Date.now(),
                  title: article.title,
                  category: article.category,
                  status: article.status,
                  thumbnail: article.thumbnail,
                  content: article.content,
                  excerpt: '',
                };
                list.unshift(withId);
                localStorage.setItem('gradien_new_articles', JSON.stringify(list));
              } catch (e) {
                console.error('Failed saving article:', e);
              }
              // Kembali ke dashboard dan tab articles
              window.location.hash = 'dashboard';
              setDashboardPage('articles');
            }}
          />
        );
      case 'articles':
        return <ArticlesPage onNavigate={navigateTo} />;
      case 'shop':
        return <ShopPage onNavigate={navigateTo} />;
      case 'home':
      default:
        return (
          <>
            <main>
              <Hero />
              <About />
              <Programs />
              <Articles />
              <Ecommerce />
              <Team />
              <Contact />
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      {/* Show header for all pages except login/register/dashboard/add-article */}
      {!['login', 'register', 'dashboard', 'add-article'].includes(currentPage) && (
        <Header currentPage={currentPage} onNavigate={navigateTo} />
      )}
      {renderPage()}
      <Toaster />
    </div>
  );
}

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-4">Please refresh the page to try again.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#0d7377] text-white px-4 py-2 rounded-lg hover:bg-[#0a5d61]"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ErrorBoundary>
  );
}