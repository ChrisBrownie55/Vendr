import VenderService from './VenderService.js';
// Private
const venderService = new VenderService();

function drawTotal(total) {
  total = total.toString().split('.');
  if (total[0].length < 2) {
    total[0] = '0' + total[0];
  }
  if (total[1]) {
    if (total[1].length < 2) {
      total[1] += '0';
    }
  } else {
    total.push('00');
  }
  document.getElementById('total').textContent = total.join('.');
}

function drawItems() {
  document.getElementById('food-items').innerHTML = venderService
    .getItems()
    .map(
      (item, index) => `
        <article value='${index}' class='food-item'>
          <img src='${item.img}' />
          <h3>${item.price}</h3>
        </article>
      `
    )
    .join('');
}

function showModal(id, duration) {
  const modal = document.getElementById(id);

  modal.showModal();
  setTimeout(() => modal.close(), duration);
}

function drawVend(img) {
  const vendedItem = document.createElement('img');

  vendedItem.classList.add('vended-item');
  vendedItem.src = img;

  document.getElementById('vend-output').appendChild(vendedItem);
}

// Public
class VenderController {
  constructor() {}
  addMoneyToTotal(coin) {
    const total = venderService.addMoneyToTotal(coin);
    if (total === 'invaid coin') {
      return showModal('invalid-coin-modal', 1000);
    }
    drawTotal(total);
  }

  vend(foodIndex) {
    const result = venderService.vend(foodIndex);
    if (result === 'out of stock') {
      return showModal('out-of-stock-modal', 1000);
    }
    if (result === 'insufficient funds') {
      return showModal('insufficient-funds-modal', 1000);
    }
    drawTotal(venderService.getTotal());
    drawVend(result);
  }

  giveChange() {
    venderService.giveChange();
    drawTotal(0);
  }
}

drawItems();

export default VenderController;
