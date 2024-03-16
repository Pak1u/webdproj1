function calc(){
    const billinput = document.getElementById("Bill");
    const bill = parseInt(document.getElementById("Bill").value);
    const tip = document.getElementById("Tip").value;
    const people = document.getElementById("people").value;
    if(isNaN(bill)){
        alert("Enter your Bill Correctly");
        return;
    }
    const tips = Math.round((((tip/100)*bill)/people)*10)/10;
    const totals = Math.round(((bill + tips)/people)* 10)/10;
    const totaltip = document.getElementById("totaltip").innerText = "$"+tips;
    const total = document.getElementById("total").innerText = "$"+totals;
    billinput.value = bill;
}