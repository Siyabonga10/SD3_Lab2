'use strict' // don't forget this, it won't be shown in future code samples

const account = {
  balance: 0,
  withdrawals: 0,
  deposits: 0,

  deposit: function (amount) {
    if (typeof (amount) !== 'number' || amount < 0) { // Ensure that we only handle positive numbers
      console.log('Could not execute transaction') // In actual world you'd use exceptions
    } else {
      this.balance += amount
      this.deposits += amount
    }
  },

  withdraw: function (amount) {
    if (typeof (amount) !== 'number' || amount > this.balance) { // Ensure that we only handle numbers, and the amount withdrawn is less than the balance
      console.log('Could not execute transaction')
    } else {
      this.balance -= amount
      this.withdrawals += amount
    }
  },

  getSummary: function () {
    return `This account has a balance of R ${this.balance}. There have been deposits totalling R ${this.deposis} and withdrawals totalling R${this.withdrawals}.`
  }
}

account.deposit(100)
account.deposit(300)
account.withdraw(800)
account.withdraw(150)
console.log(account.getSummary())
