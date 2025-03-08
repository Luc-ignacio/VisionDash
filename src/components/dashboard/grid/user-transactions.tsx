import { ArrowUpRight, Ellipsis, HandCoins } from "lucide-react";
import React from "react";

const data = [
  {
    transactionId: "ca5d407d",
    userId: 6933,
    amount: "$ 36.32",
    status: "Completed",
    order: 1,
  },
  {
    transactionId: "723a0fef",
    userId: 6626,
    amount: "$ 45.55",
    status: "Pending",
    order: 2,
  },
  {
    transactionId: "7b8c82da",
    userId: 6986,
    amount: "$ 484.51",
    status: "Completed",
    order: 3,
  },
  {
    transactionId: "1edcd36b",
    userId: 5328,
    amount: "$ 373.39",
    status: "Pending",
    order: 4,
  },
  {
    transactionId: "296d3cf4",
    userId: 9883,
    amount: "$ 117.56",
    status: "Pending",
    order: 5,
  },
  {
    transactionId: "eaa47421",
    userId: 6195,
    amount: "$ 210.65",
    status: "Completed",
    order: 6,
  },
  {
    transactionId: "e9a12e9e",
    userId: 2668,
    amount: "$ 161.22",
    status: "Failed",
    order: 7,
  },
];

export const UserTransactions = () => (
  <div className="col-span-4 lg:col-span-12 overflow-auto  rounded border border-gray-300">
    <div className="p-4 flex justify-between">
      <h3 className="flex items-center gap-2 font-semibold">
        <HandCoins size={18} />
        User Transactions
      </h3>
      <button className="flex text-xs items-center gap-2 bg-gray-300/50 transition-colors hover:text-pumpkin px-3 py-2 rounded cursor-pointer">
        See all
      </button>
    </div>

    <table className="w-full table-auto">
      <TableHead />
      <tbody>
        {data.map((user) => {
          return (
            <TableRow
              key={user.userId}
              userId={user.userId}
              transactionId={user.transactionId}
              amount={user.amount}
              status={user.status}
              order={user.order}
            />
          );
        })}
      </tbody>
    </table>
  </div>
);

const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm text-gray-900">
        <th className="text-start p-2">User ID</th>
        <th className="text-start p-2">Transaction ID</th>
        <th className="text-start p-2">Amount</th>
        <th className="text-start p-2">Status</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({
  userId,
  transactionId,
  amount,
  status,
  order,
}: {
  userId: number;
  transactionId: string;
  amount: string;
  status: string;
  order: number;
}) => {
  return (
    <tr className={order % 2 ? "bg-gray-300/50 text-sm" : "text-sm"}>
      <td className="p-2">
        <a
          href="#"
          className="flex items-center gap-1 text-pumpkin hover:underline cursor-pointer"
        >
          {userId}
          <ArrowUpRight size={16} />
        </a>
      </td>
      <td className="p-2">
        <a
          href="#"
          className="flex items-center gap-1 text-pumpkin hover:underline cursor-pointer"
        >
          {transactionId}
        </a>
      </td>
      <td className="p-2">{amount}</td>
      <td
        className={`p-2 ${
          status === "Completed" && "text-green-500 font-semibold"
        } ${status === "Failed" && "text-red-500 font-semibold"}`}
      >
        {status}
      </td>
      <td className="w-8">
        <button
          className="text-sm text-pumpkin hover:scale-150 cursor-pointer
        "
        >
          <Ellipsis size={18} />
        </button>
      </td>
    </tr>
  );
};
