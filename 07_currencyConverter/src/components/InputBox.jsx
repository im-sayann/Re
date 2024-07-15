import { useId } from "react"; // Importing the useId hook from React

function InputBox({
  label, // Label for the input field
  amount, // Amount value
  onAmountChange, // Function to handle amount change
  onCurrencyChange, // Function to handle currency change
  currencyOptions = [], // Array of currency options, default is an empty array
  selectCurrency = "usd", // Selected currency, default is "usd"
  amountDisable = false, // Boolean to disable amount input, default is false
  currencyDisable = false, // Boolean to disable currency select, default is false
  className = "", // Additional class names for styling, default is an empty string
}) {
  const amountInputId = useId(); // Generate a unique ID for the amount input

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* Container div with background color, padding, rounded corners, text size, and additional class names */}
      <div className="w-1/2">
        {/* Container for the label and input */}
        <label 
          htmlFor={amountInputId} // Link the label to the input using the unique ID
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-1.5" // Styling for the input
          type="number" // Input type is number
          placeholder="Amount" // Placeholder text
          id={amountInputId} // Set the unique ID for the input
          disabled={amountDisable} // Disable the input if amountDisable is true
          value={amount} // Set the value of the input
          onChange={(e) => 
            onAmountChange && onAmountChange(Number(e.target.value))
            // Call onAmountChange function with the new value if it exists
          }
        />
      </div>
      {/* Select currency list */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        {/* Container for the currency select */}
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          onChange={onCurrencyChange} // Call onCurrencyChange function when the value changes
          value={selectCurrency} // Set the selected value
          disabled={currencyDisable} // Disable the select if currencyDisable is true
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" // Styling for the select
        >
          {currencyOptions.map((currency) => (
            <option
              value={currency} // Set the value for the option
              key={currency} // Set the key for the option
            >
              {currency} // Display the currency name
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox; // Export the InputBox component
