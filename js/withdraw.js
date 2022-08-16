// step 1: add event listener to the deposit button
document.getElementById('btn-withdraw').addEventListener('click',function(){
  // step 2: get deposit inputfield
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

   // step 7: clear the deposit field
   withdrawField.value = '';

  if(isNaN(newWithdrawAmount)){
    alert('Please Provide a valid Number');
    return;
  }
 
  // step 3: get the  deposit total Amount
  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
 
   // step 5: get balance current total
   const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if(newWithdrawAmount > previousBalanceTotal){
    alert('তোমার বাপের ব্যাংক এ এতো টাকা নাই মনু !!!');
    return;
  }
   // step 4: add number to set the total deposit
   const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
   withdrawTotalElement.innerText = currentWithdrawTotal;

  // step 6:calculate current total balance
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;



})