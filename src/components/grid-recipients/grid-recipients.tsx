import { RecipientsFilters } from "./recipients-filters";
import { RecipientsTitle } from "./recipients-title";
import { RecipientsList } from "./recipients-list";

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
