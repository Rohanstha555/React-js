import { useState, useEffect } from "react";
import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState();
  const [from, setForm] = useState("usd");
  const [to, setTO] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  console.log("from:", from)
  console.log("to:", to)

  const currencyInfo = useCurrencyInfo(from);
  console.log("info:",currencyInfo);
  
  const options = Object.keys(currencyInfo);
  console.log("options:", options);
  

  const swap = () => {
    setForm(to);
    setTO(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  // const convert = () => {
  //   setConvertedAmount(amount * currencyInfo[to]);
  // };


  useEffect(() => {
       setConvertedAmount(amount * currencyInfo[to]);
  }, [amount, from, to])

  return (
    
    <div className="w-full h-screen flex justify-center items-center">
      {/* LEFT - Image */}
      <div
        className="w-96 h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/18804129/pexels-photo-18804129.jpeg')",
        }}
      />

      {/* RIGHT - Form */}
      <div className=" flex items-center justify-center bg-gray-600">
        <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-6 shadow-lg bg-gray-600">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
            Currency Converter
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setForm(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5 my-4">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTO(currency)}
                selectCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
