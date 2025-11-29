export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-slate-900 text-white p-4">
        <nav className="flex flex-col gap-4">
          <a href="/dashboard">Home</a>
          <a href="/dashboard/customers">Customers</a>
          <a href="/dashboard/invoices">Invoices</a>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-slate-50">{children}</main>
    </div>
  );
}
