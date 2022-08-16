// step 1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
  // step 2: get deposit inputfield
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
 
  // step 3: get the  deposit total Amount
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  // step 4: add number to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;
   // step 4: get balance current total
   const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  // step 5:calculate current total balance
  const currentBalanceTotal = newDepositAmount + previousBalanceTotal;
  balanceTotalElement.innerText = currentBalanceTotal;

  // step 6: clear the deposit field
  depositField.value = '';


})