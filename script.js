var totalAmount = 0;
var income = 0;
var expense = 0;
var histor = [];
function add() {
    var classN;
    let txt = document.getElementById("text").value;
    let amt = document.getElementById("amount").value;
    amt = parseInt(amt);
if (amt > 0) {
        income = amt;
        classN = "plus";

    }
    else if (amt < 0) {
        expense = amt;
        classN = "minus";
    }
    else {
        alert("enter valid amount for record.");
        return true;
    }
    let obj1 = { 'text': txt, 'amount': amt, 'classname': classN };
    histor.push(obj1);
    showCase();
    console.log(histor);

    document.getElementById("text").value = "";
    document.getElementById("amount").value = "";
}


function showCase() {
    let hist = "";
    for (let i = 0; i < histor.length; i++) {
        hist += '<li class="' + histor[i].classname + '">' + histor[i].text + '<span>' + histor[i].amount + '$</span><button index="' + i + '" onclick="deletor(this.index)" class="delete-btn">x</button></li>';
    }
    document.getElementById("list").innerHTML = hist;
    tracking();


}
function tracking() {
    let sum = 0;
    let income = 0;
    let expence = 0;
    let camt = 0;
    for (let i = 0; i < histor.length; i++) {
        console.log("dfhg");
        camt = parseInt(histor[i]["amount"]);
        if (camt > 0)
            income += camt;
        if (camt < 0)
            expence -= camt;
    }
    sum = income - expence;
    // alert(sum);
    let temp=expence;
    let sign = "";
    document.getElementById('money-minus').innerText = "-$" + Math.abs(temp);

    document.getElementById('money-plus').innerText = "+$" + income;
    (sum < 0) ? sign = "-$" : sign = "$";
  
    document.getElementById('balance').innerText = sign + Math.abs(sum);
    console.log();
}

function deletor(index) {
    histor.splice(index, 1);
    showCase();
}
