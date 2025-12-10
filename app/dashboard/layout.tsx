// app/dashboard/layout.tsx
import Link from "next/link";
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* シンプルなナビゲーションバー */}
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          padding: "0.75rem 1rem",
          borderBottom: "1px solid #ddd",
          marginBottom: "1rem",
        }}
      >
        <Link href="/dashboard">Home</Link>
        <Link href="/dashboard/customers">Customers</Link>
        <Link href="/dashboard/invoices">Invoices</Link>
      </nav>

      {/* 各ページの内容 */}
      <main style={{ padding: "0 1rem" }}>{children}</main>
    </div>
  );
}
