import { Command } from "cmdk";
import { Eye, Link, LogOut, Phone, Plus } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const CommandMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 bg-gray-300/50"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-xl border border-gray-500 overflow-hidden w-full max-w-lg mx-auto mt-12"
      >
        <Command.Input
          value={value}
          onValueChange={setValue}
          placeholder="What do you need?"
          className="bg-gray-100 border-b border-gray-500 p-3 w-full placeholder:text-gray-900 focus:outline-none"
        />
        <Command.List className="p-3">
          <Command.Empty>
            No results for{" "}
            <span className="text-pumpkin font-semibold">{value}</span>
          </Command.Empty>

          <Command.Group heading="Team" className="text-sm mb-3 text-gray-900">
            <Command.Item className="flex p-2 text-black rounded items-center gap-2 cursor-pointer transition-colors hover:bg-gray-300">
              <Plus size={14} />
              Invite Member
            </Command.Item>

            <Command.Item className="flex p-2 text-black rounded items-center gap-2 cursor-pointer transition-colors hover:bg-gray-300">
              <Eye size={14} />
              See Members
            </Command.Item>
          </Command.Group>

          <Command.Group
            heading="Integrations"
            className="text-sm mb-3 text-gray-900"
          >
            <Command.Item className="flex p-2 text-black rounded items-center gap-2 cursor-pointer transition-colors hover:bg-gray-300">
              <Link size={14} />
              Link Services
            </Command.Item>

            <Command.Item className="flex p-2 text-black rounded items-center gap-2 cursor-pointer transition-colors hover:bg-gray-300">
              <Phone size={14} />
              Contact Support
            </Command.Item>
          </Command.Group>

          <Command.Item className="flex p-2 text-sm rounded items-center gap-2 cursor-pointer transition-colors bg-black text-white hover:bg-gray-300 hover:text-black">
            <LogOut size={14} />
            Logout
          </Command.Item>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};
