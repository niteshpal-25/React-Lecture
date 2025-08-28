import React, { useState } from "react";
function BankAccount() {
  let name = "Nitesh";
  const [balance, setBalance] = useState(1500);
  const [inputAmount, setInputAmount] = useState("");
  const [message, setMessage] = useState("");

  function balanceStatus(balance) {
    if (balance >= 0) {
      return "Positive";
    } else {
      return "Negative";
    }
  }

  function handleTransaction(amount) {
    let numAmount = Number(amount);
    if (isNaN(numAmount)) {
      setMessage("Please enter a valid number");
      return;
    }
    const newBalance = balance + numAmount;
    setBalance(newBalance);
    setMessage(
      `Transaction successful! Your new balance is $${newBalance} (${balanceStatus(
        newBalance
      )})`
    );
    setInputAmount("");
  }
  return (
    <div>
      <h2>Welcome, {name}</h2>
      <p>Current Balance:${balance}</p>
      <input
        type="text"
        placeholder="Enter amount (+ deposit, - withdraw)"
        value={inputAmount}
        onChange={(e) => setInputAmount(e.target.value)}
      ></input>
      <button onClick={() => handleTransaction(inputAmount)}>Submit</button>
      <p>{message}</p>
    </div>
  );
}

export default BankAccount;
