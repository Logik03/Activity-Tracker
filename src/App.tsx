import React from 'react';
import { ActivityProvider } from './context/ActivityContext';
import { ActivityList } from './components/ActivityList';
import { Activity, Sparkles, Globe } from 'lucide-react';

const App: React.FC = () => {
  return (
    <ActivityProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, #6366f1 1px, transparent 1px),
              linear-gradient(180deg, #6366f1 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Header */}
        <header className="relative z-10 pt-8 pb-6">
          <div className="max-w-6xl mx-auto px-6">
            {/* Main Title Section */}
            <div className="text-center space-y-6">
              {/* Icon and Title */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Activity className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Sparkles className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="text-left">
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                    Real-Time Activity Tracker
                  </h1>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600 font-medium">Live monitoring active</span>
                  </div>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Monitor user activities in real-time with this powerful tracking dashboard. 
                Stay informed about every interaction as it happens.
              </p>

              {/* Status Bar */}
              <div className="inline-flex items-center gap-4 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700">Connected</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Real-time sync</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 pb-12">
          <div className="max-w-6xl mx-auto px-6">
            {/* Content Card */}
            <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-6 md:p-8">
              <ActivityList />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-8 mt-12 border-t border-white/20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Activity className="h-4 w-4" />
                <span>Activity Tracker © 2025</span>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span>Designed By Pipey</span>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span>Real-time updates</span>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span>Secure & Fast</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ActivityProvider>
  );
};

export default App;