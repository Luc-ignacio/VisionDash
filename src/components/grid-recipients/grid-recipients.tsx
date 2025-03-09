import Image from "next/image";
import { RecipientsFilters } from "./recipients-filters";
import { RecipientsTitle } from "./recipients-title";
import { ChevronRight } from "lucide-react";
import { RecipientsList } from "./recipients-list";

const recipientsList = [
  {
    name: "Amelia R.",
    account: "5583",
    currency: "BRL",
    flag: "/BRL.webp",
    avatar: "/Avatar-1.webp",
  },
  {
    name: "Oliver P.",
    account: "5742",
    currency: "AUD",
    flag: "/AUD.webp",
    avatar: "/Avatar-2.webp",
  },
  {
    name: "Chloe M.",
    account: "4748",
    currency: "EUR",
    flag: "/EUR.webp",
    avatar: "/Avatar-3.webp",
  },
  {
    name: "Henry I.",
    account: "3312",
    currency: "USD",
    flag: "/USD.webp",
    avatar: "/Avatar-4.webp",
  },
  {
    name: "Mia T.",
    account: "4495",
    currency: "AUD",
    flag: "/AUD.webp",
    avatar: "/Avatar-5.webp",
  },
];

export const GridRecipients = () => {
  return (
    <div className="px-4">
      <div className="w-full rounded border border-gray-300 mb-4">
        <RecipientsTitle />
        <RecipientsFilters />

        <div className="px-4 mb-4">
          <RecipientsList />
        </div>
      </div>
    </div>
  );
};
