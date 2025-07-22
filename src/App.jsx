import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const length = 12;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Random Password Generator</h1>
        <div className="mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md text-center"
            placeholder="Your password will appear here"
          />
        </div>
        <button
          onClick={generatePassword}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Generate Password
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(password);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mt-2"
        >
          Copy to Clipboard
        </button>
        {copied && <p className="text-green-600 mt-2">Copied!</p>}
      </div>
    </div>
  );
}

export default App;
