function getInputValue(inputId) {
  const inputFeild = document.getElementById(inputId);
  const newInputText = inputFeild.value;
  const newAmount = parseFloat(newInputText);
  //   clear input feild
  inputFeild.value = "";
  return newAmount;
}
function updateTotalFeild(totalFeildId, newAmount) {
  const totalAmount = document.getElementById(totalFeildId);
  const previousAmountText = totalAmount.innerText;
  const previousAmount = parseFloat(previousAmountText);
  const totalNewAmount = previousAmount + newAmount;
  totalAmount.innerText = totalNewAmount;
}

function getCurrentBalance() {
  const previousTotalBalanceText = totalBalance.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceText);
  return previousTotalBalance;
}

function updateBalance(newAmount, isAdd) {
  const totalBalance = document.getElementById("totalBalance");
  const previousTotalBalance = getCurrentBalance();
  if (isAdd == true) {
    const totalNewBalance = previousTotalBalance + newAmount;
    totalBalance.innerText = totalNewBalance;
  } else {
    const totalNewBalance = previousTotalBalance - newAmount;
    totalBalance.innerText = totalNewBalance;
  }
}
// this is for deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDepositAmount = getInputValue("deposit-amount");
  if (newDepositAmount > 0) {
    updateTotalFeild("totalDeposit", newDepositAmount);
    updateBalance(newDepositAmount, true);
  }
});

// this is for withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawAmount = getInputValue("withdraw-amount");
  const currentBalance = getCurrentBalance();
  if (newWithdrawAmount > 0 && newWithdrawAmount <= currentBalance) {
    updateTotalFeild("totalWithdraw", newWithdrawAmount);
    updateBalance(newWithdrawAmount, false);
  }
  if (newWithdrawAmount > currentBalance) {
    alert("You don't have enough money..!");
  }
});
