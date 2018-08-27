import VendingMachine from '../../models/VendingMachine.js';

let total = 0;
const vendingMachine = new VendingMachine();

class VenderService {
  constructor() {}

  addMoneyToTotal(coin) {
    return vendingMachine.addMoneyToTotal(coin);
  }

  getItems() {
    return vendingMachine.getItems();
  }

  getTotal() {
    return vendingMachine.getTotal();
  }

  vend(foodIndex) {
    return vendingMachine.vend(foodIndex);
  }

  giveChange() {
    vendingMachine.giveChange();
  }

  restockItem(foodIndex, quantity) {
    vendingMachine.restockItem(foodIndex, quantity);
  }
}

export default VenderService;
