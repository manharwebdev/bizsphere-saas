import { LayoutDashboard, ShoppingBag, FileText, BarChart2, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col border-r border-slate-800">
      {/* Logo Section */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
          <span className="font-bold text-lg">B</span>
        </div>
        <span className="text-xl font-bold tracking-tight">BizSphere</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-6 px-3 space-y-1">
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
        <SidebarItem icon={<ShoppingBag size={20} />} text="Inventory" />
        <SidebarItem icon={<FileText size={20} />} text="Invoices" />
        <SidebarItem icon={<BarChart2 size={20} />} text="Reports" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center w-full px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
          <LogOut size={20} className="mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

// Internal Component for DRY (Don't Repeat Yourself) principle
// We use 'active' prop to style the selected tab differently
const SidebarItem = ({ icon, text, active = false }) => {
  return (
    <div
      className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-all ${
        active
          ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
          : "text-slate-400 hover:bg-slate-800 hover:text-white"
      }`}
    >
      <div className="mr-3">{icon}</div>
      <span className="font-medium">{text}</span>
    </div>
  );
};

export default Sidebar;