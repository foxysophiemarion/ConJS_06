"use strict";

const dataProducts = JSON.parse(feturedItems);
console.log(dataProducts);

const itemFetured = document.querySelector('.fetured');

dataProducts.forEach(element => {
	itemFetured.insertAdjacentHTML('beforeend', `
		<div class="fetured-item">
				<div class="fetured-item__image">
						<img src="${element.image}" alt="">
				</div>
				<div class="fetured-item__content">
						<h6 class="fetured-item__title">${element.title}</h6>
						<div class="fetured-item__text">${element.text}</div>
				</div>
				<div class="fetured-item__price"><button type="button">${element.price}</button></div>
		</div>
`)
});

