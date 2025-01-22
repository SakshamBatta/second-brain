import { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex items-center text-gray-700 py-2 cursor-pointer hover:bg-gray-200 max-w-48 rounded-md pl-4 transition-all duration-150  ">
      <div className="pr-2 mt-1">{icon}</div>
      <div className="">{text}</div>
    </div>
  );
}
