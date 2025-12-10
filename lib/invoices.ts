// lib/invoices.ts

export type InvoiceStatus = "Paid" | "Pending" | "Overdue"

export type Invoice = {
  id: number
  customer: string
  amount: number
  status: InvoiceStatus
}

export const initialInvoices: Invoice[] = [
  {
    id: 1,
    customer: "Alice Tanaka",
    amount: 12000,
    status: "Paid",
  },
  {
    id: 2,
    customer: "Bob Suzuki",
    amount: 8000,
    status: "Pending",
  },
  {
    id: 3,
    customer: "Carol Yamada",
    amount: 15000,
    status: "Overdue",
  },
  {
    id: 4,
    customer: "David Ito",
    amount: 6000,
    status: "Paid",
  },
]
