import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const ContentModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  enum ContentType {
    YOUTUBE = "youtube",
    TWITTER = "twitter",
  }
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.YOUTUBE);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/content/create`,
      {
        title,
        link,
        type,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }

  return (
    <div>
      {open && (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
          {/* Background */}
          <div className="w-full h-full bg-slate-500 opacity-70 absolute top-0 left-0"></div>

          {/* Modal */}
          <div className="bg-white p-4 rounded-md z-10">
            <div className="flex justify-end">
              <div onClick={onClose}>
                <CrossIcon />
              </div>
            </div>
            <div>
              <Input reference={titleRef} placeholder="Title" />
              <Input reference={linkRef} placeholder="Link" />
            </div>
            <div>
              <h2>Type</h2>
              <div className="flex gap-2 p-4">
                <Button
                  text="Youtube"
                  variant={
                    type === ContentType.YOUTUBE ? "primary" : "secondary"
                  }
                  onClick={() => {
                    setType(ContentType.YOUTUBE);
                  }}
                />
                <Button
                  onClick={() => {
                    setType(ContentType.TWITTER);
                  }}
                  text="Twitter"
                  variant={
                    type === ContentType.TWITTER ? "primary" : "secondary"
                  }
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button variant="primary" text="Submit" onClick={addContent} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
