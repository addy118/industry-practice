function BankAccount(accNumber, accHolder, balance) {
  let _accNumber = accNumber;
  let _accHolder = accHolder;
  let _balance = balance;

  function showAccDetails() {
    console.log(`Account Number: ${_accNumber}`);
    console.log(`Account Holder Name: ${_accHolder}`);
    console.log(`Balance: ${_balance}`);
  }

  function deposit(amount) {
    _balance += amount;
    showAccDetails();
  }

  function withdraw(amount) {
    if (balance >= amount) {
      _balance -= amount;
      showAccDetails();
    } else {
      console.log("Insufficient Balance");
    }
  }

  return {
    deposit,
    withdraw,
  };
}
