import Sidebar from './Sidebar';

const AppLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Left Side */}
      <Sidebar />

      {/* Right Side (Content Area) */}
      <div className="flex-1 ml-64 transition-all duration-300">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-10 px-8 flex items-center justify-between shadow-sm">
          <h1 className="text-xl font-semibold text-slate-800">Overview</h1>
          
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border border-blue-200">
                JS
             </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;