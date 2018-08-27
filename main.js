import VenderController from './src/components/vender/VenderController.js';

class App {
  constructor() {
    this.controllers = {
      venderController: new VenderController()
    };
  }
}

const app = new App();

document
  .querySelectorAll('.money > button')
  .forEach(button =>
    button.addEventListener('click', event =>
      app.controllers.venderController.addMoneyToTotal(event.target.value)
    )
  );

const foodItemsContainer = document.getElementById('food-items');

foodItemsContainer.addEventListener('click', event => {
  if (event.target === foodItemsContainer) {
    return;
  }
  let target = event.target;
  if (target.parentNode !== foodItemsContainer) {
    target = target.parentNode;
  }
  app.controllers.venderController.vend(target.getAttribute('value'));
});

const vendOutput = document.getElementById('vend-output');
vendOutput.addEventListener('click', event => {
  if (event.target === vendOutput) {
    return;
  }
  vendOutput.removeChild(event.target);
});

document
  .getElementById('give-change')
  .addEventListener('click', app.controllers.venderController.giveChange);
