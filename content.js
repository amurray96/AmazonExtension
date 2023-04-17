const deliveryCards = document.querySelectorAll(".deliveries-container > .delivery-card");

deliveryCards.forEach(deliveryCard => {
  const targetElement = deliveryCard.querySelector('.delivery-information-container');
  const itemsElement = deliveryCard.querySelector('.subscription-list-container');
  const subscriptionCards = itemsElement.querySelectorAll('div > .subscription-card');

  let totalPrice = 0
  subscriptionCards.forEach(subscriptionCard => {
    const subscriptionPrice = subscriptionCard.querySelector('.subscription-price') || false;
    if (subscriptionPrice) {
      let price = parseFloat(subscriptionPrice.textContent.slice(1));
      const qty = subscriptionCard.querySelector('.subscription-quantity-message') || false;
      if (qty) {
        price *= parseFloat(qty.textContent.slice(5));
      }
      totalPrice += price;
    }
  });

  const newDiv = document.createElement('div');
  newDiv.textContent = 'Total: $' + totalPrice.toFixed(2);
  newDiv.style.marginTop = '10px';
  newDiv.style.backgroundColor = '#34eb43';
  newDiv.style.fontWeight = 'bold';
  newDiv.style.fontSize = '18px';
  newDiv.style.padding = '5px';
  targetElement.appendChild(newDiv);
});
