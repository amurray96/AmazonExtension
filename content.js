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
  newDiv.style.margin = '20px 0px';
  targetElement.appendChild(newDiv);

  const totalDiv = document.createElement('div');
  totalDiv.textContent = 'Total: $' + totalPrice.toFixed(2) + '*';
  totalDiv.style.marginBottom = '5px';
  totalDiv.style.backgroundColor = '#388E3C';
  totalDiv.style.maxWidth = '150px';
  totalDiv.style.color = 'white';
  totalDiv.style.fontWeight = 'bold';
  totalDiv.style.fontSize = '18px';
  totalDiv.style.padding = '5px';
  totalDiv.style.borderRadius = '5px';
  totalDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  totalDiv.style.fontFamily = "'Roboto', sans-serif";
  totalDiv.style.textAlign = 'center';
  newDiv.appendChild(totalDiv);


  const newSpan = document.createElement('span');
  newSpan.textContent = '*Estimated Total';
  newSpan.style.fontFamily = "'Roboto', sans-serif";
  newSpan.style.fontSize = '12px';
  newDiv.appendChild(newSpan);
});
