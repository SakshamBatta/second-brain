import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { ContentModal } from "../components/ContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";

function Dashboard() {
  const contents = useContent();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 bg-slate-100 min-h-screen border-2">
        <ContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end gap-4">
          <Button
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon />}
            onClick={() => {
              setModalOpen(true);
            }}
          />
          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
        </div>

        <div className="flex gap-4">
          {contents.map(({ title, link, type }) => (
            <Card type={type} title={title} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
