// app/dashboard/page.tsx
import { initialCustomers } from "@/lib/customers";
import { initialInvoices } from "@/lib/invoices";

export default function DashboardHomePage() {
  const totalCustomers = initialCustomers.length;
  const activeCustomers = initialCustomers.filter(
    (c) => c.status === "Active"
  ).length;

  const totalInvoices = initialInvoices.length;
  const totalAmount = initialInvoices.reduce(
    (sum, invoice) => sum + invoice.amount,
    0
  );

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Simple summary for the group project dashboard.</p>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Summary</h2>
        <ul>
          <li>Total customers: {totalCustomers}</li>
          <li>Active customers: {activeCustomers}</li>
          <li>Total invoices: {totalInvoices}</li>
          <li>Total invoice amount: ${totalAmount}</li>
        </ul>
      </section>
    </div>
  );
}
