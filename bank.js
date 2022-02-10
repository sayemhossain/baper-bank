// this is for deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
  // get the amount deposit
  const depositInput = document.getElementById("deposit-amount");
  const newDepositText = depositInput.value;
  const newDepositAmount = parseFloat(newDepositText);
  //   showing in deposit
  const totalDeposit = document.getElementById("totalDeposit");
  const previousDepositText = totalDeposit.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);
  // add money
  const totalNewDeposit = previousDepositAmount + newDepositAmount;
  totalDeposit.innerText = totalNewDeposit;

  // update account balance
  const totalBalance = document.getElementById("totalBalance");
  const previousTotalBalanceText = totalBalance.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceText);
  const totalNewBalance = previousTotalBalance + newDepositAmount;
  totalBalance.innerText = totalNewBalance;

  //   clear deposit input feild
  depositInput.value = "";
});

// this is for withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // get the amount withdraw
  const withdrawInput = document.getElementById("withdraw-amount");
  const newWithdrawText = withdrawInput.value;
  const newWithdrawAmount = parseFloat(newWithdrawText);
  //   showing in withdraw
  const totalWithdraw = document.getElementById("totalWithdraw");
  const previousWithdrawText = totalWithdraw.innerText;
  const previousWithdrawAmount = parseFloat(previousWithdrawText);
  // add money
  const totalNewWithdraw = previousWithdrawAmount + newWithdrawAmount;
  totalWithdraw.innerText = totalNewWithdraw;

  // update account balance
  const totalBalance = document.getElementById("totalBalance");
  const previousTotalBalanceText = totalBalance.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceText);
  const totalNewBalance = previousTotalBalance - newWithdrawAmount;
  totalBalance.innerText = totalNewBalance;

  //   clear whithdraw input feild
  withdrawInput.value = "";
});
