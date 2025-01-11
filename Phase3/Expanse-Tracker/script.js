// Variables
let transactions = [];

// Selectors
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeSelect = document.getElementById('type');
const addBtn = document.getElementById('addBtn');
const transactionList = document.getElementById('transactionList');
const totalIncome = document.getElementById('totalIncome');
const totalExpense = document.getElementById('totalExpense');
const balance = document.getElementById('balance');

// Add transaction
addBtn.addEventListener('click', () => {
  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const type = typeSelect.value;

  if (description === '' || isNaN(amount) || amount <= 0) {
    alert('Please enter valid details');
    return;
  }

  const transaction = { description, amount, type };
  transactions.push(transaction);
  updateUI();
  clearInputs();
});

// Update UI
function updateUI() {
  // Reset lists and totals
  transactionList.innerHTML = '';
  let income = 0, expense = 0;

  transactions.forEach((transaction, index) => {
    // Update income or expense
    if (transaction.type === 'income') {
      income += transaction.amount;
    } else {
      expense += transaction.amount;
    }

    // Add transaction to the list
    const li = document.createElement('li');
    li.className = transaction.type;
    li.innerHTML = `
      ${transaction.description} - $${transaction.amount.toFixed(2)}
      <button onclick="deleteTransaction(${index})">X</button>
    `;
    transactionList.appendChild(li);
  });

  // Update totals
  totalIncome.textContent = income.toFixed(2);
  totalExpense.textContent = expense.toFixed(2);
  balance.textContent = (income - expense).toFixed(2);
}

// Delete transaction
function deleteTransaction(index) {
  transactions.splice(index, 1);
  updateUI();
}

// Clear input fields
function clearInputs() {
  descriptionInput.value = '';
  amountInput.value = '';
  typeSelect.value = 'income';
}
