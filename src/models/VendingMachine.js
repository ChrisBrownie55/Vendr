class VendingMachine {
  constructor(
    transactionTotal = 0,
    acceptableCurrency = {
      '0.25': 0.25,
      '0.10': 0.1,
      '0.05': 0.05
    },
    foodItems = [
      {
        img: 'https://picsum.photos/6858/4574?image=1080',
        price: 2,
        quantity: 10
      },
      {
        img:
          'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/50/1513015699-red-green-grapes.jpg',
        price: 1.25,
        quantity: 4
      },
      {
        img:
          'https://globalassets.starbucks.com/assets/e2f42654ecf74c5b9da0f7d83855ad02.jpg',
        price: 0.5,
        quantity: 1
      }
    ],
    machineTotal = 10
  ) {
    this.transactionTotal = transactionTotal;
    this.acceptableCurrency = acceptableCurrency;
    this.foodItems = foodItems;
    this.machineTotal = machineTotal;
  }

  addMoneyToTotal(coin) {
    coin = this.acceptableCurrency[coin];
    if (!coin) {
      return 'invalid coin';
    }

    this.transactionTotal = parseFloat(
      (this.transactionTotal + coin).toFixed(2)
    );
    return this.transactionTotal;
  }

  vend(foodIndex) {
    const item = this.foodItems[foodIndex];
    if (!item.quantity) {
      return 'out of stock';
    }
    if (this.transactionTotal < item.price) {
      return 'insufficient funds';
    }
    --item.quantity;
    this.transactionTotal -= item.price;
    this.machineTotal += item.price;
    return item.img;
  }

  getTotal() {
    return this.transactionTotal;
  }

  giveChange() {
    this.transactionTotal = 0;
  }

  getItems() {
    return JSON.parse(JSON.stringify(this.foodItems));
  }

  restockItem(foodIndex, quantity) {
    this.foodItems[foodIndex].quantity += quantity;
  }
}

export default VendingMachine;
