showcards()
balanceamt()

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addtext");
  let addAmt = document.getElementById('addamount')
  let cards = localStorage.getItem("cards");
  if (cards == null) {
    cardsObj = [];
  }
  else {
    cardsObj = JSON.parse(cards);
  }
  let myObj = {
    text : addTxt.value,
    amount : addAmt.value,
  }
  cardsObj.push(myObj);
  localStorage.setItem("cards", JSON.stringify(cardsObj));
  addTxt.value= "";
  addAmt.value= "";
  operations(parseInt(myObj.amount))
  balanceamt()
  showcards();
});

function showcards() {
  let cards = localStorage.getItem("cards");
  if (cards == null) {
    cardsObj = [];
  }
  else {
    cardsObj = JSON.parse(cards);
  }
  let html = "";
  cardsObj.forEach(function (element, index) {
    html += `
    <div class="card">
                <p>${element.text}</p>
                <p>${element.amount}</p>
            </div>`
  });
  let cardselm = document.getElementById('cards');
  if (cardsObj.length != 0) {
    cardselm.innerHTML = html;
  }
  else{
    cardselm.innerHTML = `<h4 style='color: black;margin-bottom: 5vh'>No Transactions to show</h4>`;
  }
}

incrementincome = (a) => {
  let incomeamt = document.getElementById('incomeamt')
  let income = incomeamt.innerHTML
  income = income.replace('$','')
  income = parseInt(income)
  income = income + a
  incomeamt.innerHTML = "$" + parseInt(income)
}

incrementexpense = (a) => {
  let expenseamt = document.getElementById('expenseamt')
  let expense = expenseamt.innerHTML
  expense = expense.replace('$','')
  expense = parseInt(expense)
  expense = expense + a
  expenseamt.innerHTML = "$" + parseInt(expense)
}

function balanceamt(){
  let incomeamt = document.getElementById('incomeamt')
  let expenseamt = document.getElementById('expenseamt')
  let balanceamt = document.getElementById('balanceamt')
  let income = incomeamt.innerHTML
  let expense = expenseamt.innerHTML
  income = income.replace('$','')
  expense = expense.replace('$','')
  income = parseInt(income)
  expense = parseInt(expense)
  let balance = income - expense
  balanceamt.innerHTML = "$" + parseInt(balance)
}
operations = (a) => {
  if(a == 0){
    alert('Please enter a valid amount')
  }
  else if(a<0){
    incrementexpense(a);
  }
  else{
    incrementincome(a);
  }
}
