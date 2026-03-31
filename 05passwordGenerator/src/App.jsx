import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [allowNumber, setallowNumber] = useState(false);
  const [allowSpecialCharacter, setallowSpecialCharacher] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (allowNumber) string += "0123456789";
    if (allowSpecialCharacter) string += "!@#$%^&*_-+=?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }

    setPassword(pass);
  }, [length, allowNumber, allowSpecialCharacter, setPassword]);

  const CopyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, allowNumber, allowSpecialCharacter, passwordGenerator]);

  return (
    <div className="w-full max-w-lg mx-auto my-8 px-4 py-2 rounded-2xl bg-gray-600">
      <div className="flex justify-center">
        <div className="w-100 h-15 bg-white flex justify-center p-3 rounded-2xl">
          <h1 className="text-3xl font-bold underline ">Password Generator</h1>
        </div>
      </div>

      <div className="flex  px-4 py-2 bg-gray-300 rounded-2xl my-3 overflow-hidden">
        <input
          type="text"
          placeholder="Enter Password"
          value={password}
          className="outline-none w-full px-1 py-2  "
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={CopyPassword}
          className="outline-none bg-red-500 px-4 py-1 rounded-xl"
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={16}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label className="text-indigo-950 font-bold text-lg">
            Length:{length}
          </label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={allowNumber}
            onChange={() => {
              setallowNumber((prev) => !prev);
            }}
          />
          <label className="text-indigo-950 font-bold text-lg">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={allowSpecialCharacter}
            onChange={() => {
              setallowSpecialCharacher((prev) => !prev);
            }}
          />
          <label className="text-indigo-950 font-bold text-lg">
            Special Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
