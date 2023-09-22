const deliveryCards = document.querySelectorAll(".deliveries-container > .delivery-card");

deliveryCards.forEach(deliveryCard => {
  const targetElement = deliveryCard.querySelector('.delivery-information-container');
  const itemsElement = deliveryCard.querySelector('.subscription-list-container');
  const subscriptionCards = itemsElement.querySelectorAll('div > .subscription-card');

  let totalPrice = 0;
  let totalSavings = 0;
  subscriptionCards.forEach(subscriptionCard => {
    const subscriptionName = subscriptionCard.querySelector('.subscription-product-title');
    let name = subscriptionName ? subscriptionName.textContent : 'No Name';

    let price = 0;
    const subscriptionPrice = subscriptionCard.querySelector('.subscription-price');
    if (subscriptionPrice) {
      /* price = parseFloat(subscriptionPrice.textContent.slice(1)); */
      price = Math.floor(subscriptionPrice.textContent.slice(1) * 100) / 100;
    }

    let itemSavings = 0;
    let originalPrice = 0;
    let discountRate = subscriptionCard.querySelector('.subscription-discount-message');
    discountRate = discountRate.textContent;
    const regex = /\d+/;
    const match = discountRate.match(regex);
    if (match) {
      const numberRate = parseInt(match[0], 10) / 100;
      originalPrice = price / (1 - numberRate);
      originalPrice = Math.floor(originalPrice * 100) / 100;
      itemSavings = originalPrice - price;
      itemSavings = Math.floor(itemSavings * 100) / 100;

    }

    let qty = 0;
    let itemTotalPrice = price;
    const itemQty = subscriptionCard.querySelector('.subscription-quantity-message');
    qty = itemQty ? parseFloat(itemQty.textContent.slice(5)) : 1;
    /* itemTotalPrice *= qty; */ //Fix ----------
    itemSavings *= qty;


    totalSavings += itemSavings;
    totalSavings = Math.floor(totalSavings * 100) / 100;

    totalPrice += itemTotalPrice;
    totalPrice = Math.floor(totalPrice * 100) / 100;


    const nameRegex = /(,|-)/;
    const nameMatch = name.match(nameRegex);

    if (nameMatch) {
      const index = nameMatch.index;
      name = name.substring(0, index);
    }


    console.log("%c" + name, 'color: yellow;');
    console.log('Price:', originalPrice, 'Discount:', price);
    console.log('Quantity:', qty, 'Item Total:', itemTotalPrice);
    console.log('Savings:', itemSavings);
    console.log('Subscription Total:', totalPrice);
    console.log('Subscription Savings:', totalSavings)
    console.log('%c---------------------', 'color: red;');
  });



  const newDiv = document.createElement('div');
  newDiv.style.margin = '20px 0px';
  targetElement.appendChild(newDiv);

  const totalSpan = document.createElement('span');
  totalSpan.textContent = 'TOTAL*';
  totalSpan.style.fontFamily = 'inherit';
  totalSpan.style.fontSize = '14px';
  totalSpan.style.fontWeight = 'bold';
  totalSpan.style.textAlign = 'center';
  newDiv.appendChild(totalSpan);


  const totalDiv = document.createElement('div');
  totalDiv.textContent = '$' + totalPrice;
  totalDiv.style.marginBottom = '10px';
  totalDiv.style.backgroundColor = '#3784ad';
  totalDiv.style.maxWidth = '130px';
  totalDiv.style.color = 'white';
  totalDiv.style.fontWeight = 'bold';
  totalDiv.style.fontSize = '18px';
  totalDiv.style.padding = '5px';
  totalDiv.style.borderRadius = '5px';
  totalDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  /* totalDiv.style.fontFamily = "'Roboto', sans-serif"; */
  totalDiv.style.fontFamily = 'inherit';
  totalDiv.style.textAlign = 'center';
  newDiv.appendChild(totalDiv);


  const savingsSpan = document.createElement('span');
  savingsSpan.textContent = 'SAVINGS*';
  savingsSpan.style.fontFamily = 'inherit';
  savingsSpan.style.fontSize = '14px';
  savingsSpan.style.fontWeight = 'bold';
  savingsSpan.style.textAlign = 'center';
  newDiv.appendChild(savingsSpan);



  const savingsDiv = document.createElement('div');
  savingsDiv.textContent = '$' + totalSavings;
  savingsDiv.style.marginBottom = '5px';
  /* savingsDiv.style.backgroundColor = '#388E3C'; */
  savingsDiv.style.backgroundColor = '#FF8F00';
  savingsDiv.style.maxWidth = '130px';
  savingsDiv.style.color = 'black';
  savingsDiv.style.fontWeight = 'bold';
  savingsDiv.style.fontSize = '18px';
  savingsDiv.style.padding = '5px';
  savingsDiv.style.borderRadius = '5px';
  savingsDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  savingsDiv.style.fontFamily = 'inherit';
  savingsDiv.style.textAlign = 'center';
  newDiv.appendChild(savingsDiv);



  const newSpan = document.createElement('span');
  newSpan.textContent = '*Amounts estimated';
  newSpan.style.fontFamily = 'inherit';
  newSpan.style.fontSize = '13px';
  newSpan.style.fontWeight = 'bold';
  newDiv.appendChild(newSpan);
});