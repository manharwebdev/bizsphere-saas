import AppLayout from './components/layout/AppLayout';

function App() {
  return (
    <AppLayout>
      {/* This is the "children" content */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Welcome back, Developer!</h2>
        <p className="text-slate-600">
          This is your professional dashboard. The sidebar on the left is fixed, 
          and this content area is scrollable.
        </p>
        <div className="mt-6 flex gap-4">
          <div className="h-32 w-64 bg-blue-50 rounded-lg border border-blue-100 p-4">
            <h3 className="text-blue-600 font-bold">Total Sales</h3>
            <p className="text-3xl font-bold mt-2">$24,500</p>
          </div>
          <div className="h-32 w-64 bg-green-50 rounded-lg border border-green-100 p-4">
            <h3 className="text-green-600 font-bold">Active Orders</h3>
            <p className="text-3xl font-bold mt-2">12</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default App;