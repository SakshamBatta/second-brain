import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(username);
    console.log(password);

    const response = await axios.post(`${BACKEND_URL}/users/register`, {
      username,
      password,
    });
    if (response) {
      alert("Signed Up");
    }

    navigate("/signin");
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border min-w-48 p-8">
        <Input reference={usernameRef} placeholder="Username" />
        <Input reference={passwordRef} placeholder="Password" />
        <div className="flex justify-center pt-4">
          <Button
            onClick={signup}
            variant="primary"
            text="Signup"
            fullWidth={true}
            loading={false}
          />
        </div>
      </div>
    </div>
  );
}
