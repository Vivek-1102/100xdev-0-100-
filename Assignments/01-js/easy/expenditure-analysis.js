/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  if (transactions == 0) {
    return [];
  }
  let ans = [];
  let categoryAndAmount = {};

  transactions.forEach((transaction) => {
    let transactions = transaction.category;
    if (categoryAndAmount[transactions]) {
      console.log(categoryAndAmount);
      // console.log(categoryAndAmount[categories]);
      categoryAndAmount[transactions] += transaction.price;
    } else {
      categoryAndAmount[transactions] = transaction.price;
    }
  });
  for (let transactions in categoryAndAmount) {
    ans.push({
      category: transactions,
      totalSpent: categoryAndAmount[transactions],
    });
  }

  return ans;
}

// calculateTotalSpentByCategory([
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: "Food",
//     itemName: "Pizza",
//   },
//   {
//     id: 2,
//     timestamp: 1656259600000,
//     price: 20,
//     category: "Food",
//     itemName: "Burger",
//   },
//   {
//     id: 3,
//     timestamp: 1656019200000,
//     price: 15,
//     category: "Clothing",
//     itemName: "T-Shirt",
//   },
//   {
//     id: 4,
//     timestamp: 1656364800000,
//     price: 30,
//     category: "Electronics",
//     itemName: "Headphones",
//   },
//   {
//     id: 5,
//     timestamp: 1656105600000,
//     price: 25,
//     category: "Clothing",
//     itemName: "Jeans",
//   },
// ]);

module.exports = calculateTotalSpentByCategory;
