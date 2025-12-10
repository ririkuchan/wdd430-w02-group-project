// app/dashboard/customers/page.tsx
"use client";

import { useMemo, useState } from "react";
import { Customer, initialCustomers } from "@/lib/customers";

export default function CustomersPage() {
  // 顧客リストの state
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);

  // 検索用の state
  const [search, setSearch] = useState("");

  // 新規追加用の state
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  // 検索キーワードでフィルタ
  const filteredCustomers = useMemo(() => {
    const keyword = search.toLowerCase();
    return customers.filter((c) =>
      c.name.toLowerCase().includes(keyword)
    );
  }, [customers, search]);

  // 顧客を追加
  const handleAddCustomer = () => {
    if (!newName.trim() || !newEmail.trim()) return;

    const nextId = customers.length
      ? Math.max(...customers.map((c) => c.id)) + 1
      : 1;

    const newCustomer: Customer = {
      id: nextId,
      name: newName.trim(),
      email: newEmail.trim(),
      status: "Active",
    };

    setCustomers((prev) => [...prev, newCustomer]);
    setNewName("");
    setNewEmail("");
  };

  // 顧客を削除
  const handleDelete = (id: number) => {
    setCustomers((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <main className="p-6 space-y-6">
      <header className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Customers</h1>
          <p className="text-sm text-slate-500">
            Manage customer records for the dashboard project.
          </p>
        </div>

        {/* 検索ボックス */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search by name..."
            className="border rounded-md px-3 py-1 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      {/* 追加フォーム */}
      <section className="border rounded-lg p-4 space-y-3 bg-slate-50">
        <h2 className="font-medium text-slate-700 text-sm">
          Add New Customer
        </h2>
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Name"
            className="border rounded-md px-3 py-1 text-sm flex-1 min-w-[140px]"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-md px-3 py-1 text-sm flex-1 min-w-[180px]"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <button
            type="button"
            onClick={handleAddCustomer}
            className="bg-emerald-600 text-white text-sm px-4 py-1 rounded-md hover:bg-emerald-700"
          >
            Add
          </button>
        </div>
      </section>

      {/* テーブル表示 */}
      <section className="border rounded-lg overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left px-4 py-2">ID</th>
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Email</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-right px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id} className="border-t">
                <td className="px-4 py-2">{customer.id}</td>
                <td className="px-4 py-2">{customer.name}</td>
                <td className="px-4 py-2">{customer.email}</td>
                <td className="px-4 py-2">
                  <span
                    className={
                      customer.status === "Active"
                        ? "text-emerald-700 font-medium"
                        : "text-slate-500"
                    }
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-right">
                  <button
                    type="button"
                    onClick={() => handleDelete(customer.id)}
                    className="text-xs text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredCustomers.length === 0 && (
              <tr>
                <td
                  className="px-4 py-4 text-center text-slate-500"
                  colSpan={5}
                >
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}
