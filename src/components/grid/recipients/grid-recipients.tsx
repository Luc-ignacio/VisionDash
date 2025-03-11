import { RecipientsList } from "./recipients-list";
import { UsersRound } from "lucide-react";

export const GridRecipients = () => {
  return (
    <div className="px-4">
      <div className="w-full rounded border border-gray-300 mb-4">
        <div className="flex p-4">
          <h3 className="flex items-center gap-2 font-semibold">
            <UsersRound size={18} />
            Recipients
          </h3>
        </div>

        <RecipientsList />
      </div>
    </div>
  );
};
