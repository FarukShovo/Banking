//handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited

    const depositInput = document.getElementById('deposit-input');

    const newDepositAmount = depositInput.value;
    //Update deposit total
    const depositTotal = document.getElementById('deposit-total');

    const priviousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(priviousDepositAmount) + parseFloat(newDepositAmount);

    depositTotal.innerText = newDepositTotal;

    //update account balance

    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;

    const priviousBalanceTotal = parseFloat(balanceTotalText);

    const newbalanceTotal = priviousBalanceTotal + parseFloat(newDepositAmount);

    balanceTotal.innerText = newbalanceTotal;



    //clear the deposit input field
    depositInput.value = '';
})

//Handle withdraw event handler

document.getElementById('Withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('Withdraw-input');

    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    console.log(newWithdrawAmount);
    //set withdraw total

    const withdrawTotal = document.getElementById('Withdraw-total');

    const priviousWithdrawText = withdrawTotal.innerText;
    const priviousWithdrawTotal = parseFloat(priviousWithdrawText);

    const newWithdrawTotal = priviousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const priviousBalanceText = balanceTotal.innerText;
    const priviousBalanceTotal = parseFloat(priviousBalanceText);
    const newbalanceTotal = priviousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newbalanceTotal;
    //clear withdraw input

    withdrawInput.value = '';

})