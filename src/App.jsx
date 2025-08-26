import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import {InputBox} from "./components/index.js";

function App() {
  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyData = useCurrencyInfo(from)
  const options = Object.keys(currencyData) 

  const convert = () => {
    setConvertedAmount(amount * currencyData[to]);
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const returnDeclimal = (amount) => {
      if(amount % 1 == 0) 
        return parseInt(amount)
      else
        return amount.toFixed(2)
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{backgroundImage: `url(https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg  )`}}
    >

        <div className="w-full mx-3">
          <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-md bg-white/30 mb-35 md:mb-auto">
            <form onSubmit={(e) => {e.preventDefault() 
              convert()
            }}>
                <div className="w-full mb-1">
                  <InputBox 
                    label="from"
                    amount={returnDeclimal(amount)}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setFrom(currency)}                  
                    onAmountChange={(amount) => setAmount(amount)}
                    selectdCurrency={from}
                  />
                </div>
                <div className="relative w-full h-0.5">
                  <button className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-blue-700" onClick={swap}>Swap</button>
                </div>

                <div className="w-full mb-1">
                  <InputBox 
                    label="to"
                    currencyOptions={options}
                    amount={returnDeclimal(convertedAmount)}
                    onCurrencyChange={(curr) => setTo(curr)}
                    selectdCurrency={to}
                    amountDisabled 
                  />
                </div>
                <button type="submit" className="w-full cursor-pointer bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition duration-200 ease-linear">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
          </div>
        </div>
        
    </div>
  )
}

export default App;
