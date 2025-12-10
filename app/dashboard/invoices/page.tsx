"use client";

import { useMemo, useState } from "react";
import { Invoice, initialInvoices } from "@/lib/invoices";

export default function InvoicesPage() {
  // state
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices);
  const [search, setSearch] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newStatus, setNewStatus] = useState<Invoice["status"]>("Paid");

  // filter by search
  const filteredInvoices = useMemo(() => {
    const keyword = search.toLowerCase();
    return invoices.filter((inv) =>
      inv.customer.toLowerCase().includes(keyword)
    );
  }, [search, invoices]);

  // Add new invoice
  const handleAdd = () => {
    if (!newAmount) return;

    const newInvoice: Invoice = {
      id: invoices.length + 1,
      customer: `Customer ${invoices.length + 1}`,
      amount: Number(newAmount),
      status: newStatus,
    };

    setInvoices([...invoices, newInvoice]);

    setNewAmount("");
    setNewStatus("Paid");
  };

  // Delete invoice
  const handleDelete = (id: number) => {
    setInvoices(invoices.filter((inv) => inv.id !== id));
  };

  return (
    <main>
      <h1>Invoices</h1>
      <p>Manage invoice records for the dashboard project.</p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by customer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />

      {/* Add New Invoice */}
      <h2>Add New Invoice</h2>

      <input
        type="number"
        placeholder="Amount"
        value={newAmount}
        onChange={(e) => setNewAmount(e.target.value)}
        min={0}
      />

      {/* Status Select with Label (アクセシビリティOK) */}
      <label style={{ marginLeft: "8px" }}>
        Status
        <select
          value={newStatus}
          onChange={(e) =>
            setNewStatus(e.target.value as Invoice["status"])
          }
        >
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Overdue">Overdue</option>
        </select>
      </label>

      <button onClick={handleAdd} style={{ marginLeft: "8px" }}>
        Add
      </button>

      {/* Invoice Table */}
      <table style={{ marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvoices.map((inv) => (
            <tr key={inv.id}>
              <td>{inv.id}</td>
              <td>{inv.customer}</td>
              <td>${inv.amount}</td>
              <td>{inv.status}</td>
              <td>
                <button onClick={() => handleDelete(inv.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
