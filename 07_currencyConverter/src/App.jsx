import { useState } from "react"; 
import { InputBox } from "./components"; 
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0); // State for the amount input
  const [from, setFrom] = useState("usd"); // State for the source currency
  const [to, setTo] = useState("inr"); // State for the target currency
  const [convertedAmount, setConvertedAmount] = useState(0); // State for the converted amount

  const currencyInfo = useCurrencyInfo(from); // Get currency information based on the source currency
  const options = Object.keys(currencyInfo); // Get currency options from the currency information

  const swap = () => {
    setFrom(to); // Swap the source currency with the target currency
    setTo(from); // Swap the target currency with the source currency
    setConvertedAmount(amount); // Set the converted amount to the current amount
    setAmount(convertedAmount); // Set the amount to the current converted amount
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]); 
    // Convert the amount using the exchange rate for the target currency
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      // Styling for the background and container
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        // Background image
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          
          <form
            onSubmit={(e) => { 
              e.preventDefault(); // Prevent form submission
              convert(); // Call the convert function
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount} // Current amount
                currencyOptions={options} // Currency options from the API
                onCurrencyChange={() => setAmount(amount)} // Handle currency change
                selectCurrency={from} // Source currency
                onAmountChange={(amount) => setAmount(amount)} // Handle amount change
              />
            </div>
            {/* Swap button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap} // Call the swap function
              >
                swap
              </button>
            </div>
            {/* Next input field */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount} // Converted amount
                currencyOptions={options} // Currency options from the API
                onCurrencyChange={(passingCurrency) => setTo(passingCurrency)} // Handle currency change
                selectCurrency={to} // Target currency
                amountDisable // Disable the amount input
              />
            </div>
            <button
              type="submit" // Submit event
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()} {/* Button text */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App; // Export the App component
