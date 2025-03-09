import { ChevronRight } from "lucide-react";
import Image from "next/image";

const recipientsList = [
  {
    id: 1,
    name: "Amelia R.",
    account: "5583",
    currency: "BRL",
    flag: "/BRL.webp",
    avatar: "/Avatar-1.webp",
  },
  {
    id: 2,
    name: "Oliver P.",
    account: "5742",
    currency: "AUD",
    flag: "/AUD.webp",
    avatar: "/Avatar-2.webp",
  },
  {
    id: 3,
    name: "Chloe M.",
    account: "4748",
    currency: "EUR",
    flag: "/EUR.webp",
    avatar: "/Avatar-3.webp",
  },
  {
    id: 4,
    name: "Henry I.",
    account: "3312",
    currency: "USD",
    flag: "/USD.webp",
    avatar: "/Avatar-4.webp",
  },
  {
    id: 5,
    name: "Mia T.",
    account: "4495",
    currency: "AUD",
    flag: "/AUD.webp",
    avatar: "/Avatar-5.webp",
  },
];

export const RecipientsList = () => {
  return recipientsList.map((recipient) => {
    return (
      <div
        key={recipient.id}
        className="flex p-4 items-center justify-between hover:bg-gray-300 rounded cursor-pointer"
      >
        <div className="flex gap-4 items-center relative">
          <Image
            src={recipient.avatar}
            alt={recipient.name}
            width={70}
            height={70}
            className="rounded-full"
          />
          <Image
            src={recipient.flag}
            alt={recipient.currency}
            width={30}
            height={30}
            className="absolute rounded-full outline-2 outline-white bottom-[-8] left-14"
          />

          <div className="ml-4">
            <p>{recipient.name}</p>
            <p className="text-sm text-gray-900">
              {recipient.currency} account ending in {recipient.account}
            </p>
          </div>
        </div>

        <ChevronRight size={24} className="mr-[-8]" />
      </div>
    );
  });
};
