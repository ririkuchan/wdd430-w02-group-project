// app/lib/customers.ts

export type Customer = {
  id: number;
  name: string;
  email: string;
  status: "Active" | "Inactive";
};

export const initialCustomers: Customer[] = [
  {
    id: 1,
    name: "Alice Tanaka",
    email: "alice@example.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Bob Suzuki",
    email: "bob@example.com",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Carol Yamada",
    email: "carol@example.com",
    status: "Active",
  },
  {
    id: 4,
    name: "David Ito",
    email: "david@example.com",
    status: "Active",
  },
];
