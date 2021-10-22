window.addEventListener('load', () => {
	let wasSelected = false;
	const prizes = [
		'BIG COOKIE',
		'SMALL COOKIE', // 
		'CUPCAKE',
		'CARAMELS',
		'CHOCO CANDIES',
		'CHERRY BLOOD',
		'WORMS',
		'DIRT',
		'EYES'
	];
	const cardsContainer = document.querySelector(".cards-container");

	cardsContainer.addEventListener("click", (event) => {
		const isOpened = cardsContainer.querySelector('.card.card_opened');
		const cardNode = event.target.closest('.card');
		if (!cardNode || (isOpened && !cardNode.classList.contains('card_opened'))) { // || window.localStorage.getItem('wasSelected')
			return;
		}

		cardNode.classList.toggle('card_opened');
		wasSelected = true;
		window.localStorage.setItem('wasSelected', true);
	});

	const firstCard = document.querySelector('.cards-container .card');
	const fragment = document.createDocumentFragment();
	prizes.forEach((prize, index) => {
		if (index === 0) {
			firstCard.querySelector('.card__back-wish').textContent = prize;
			return;
		}

		const cloneCard = firstCard.cloneNode(true);
		cloneCard.querySelector('.card__back-wish').textContent = prize;
		fragment.appendChild(cloneCard);
	});

	cardsContainer.appendChild(fragment);
});
