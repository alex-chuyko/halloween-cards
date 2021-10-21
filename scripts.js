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

	const fragment = document.createDocumentFragment();
	prizes.forEach((prize) => {
		const cardNode = document.createElement('div');
		cardNode.classList.add('card');
		const frontNode = document.createElement('div');
		frontNode.classList.add('card__front');
		const imageNode = document.createElement('img');
		imageNode.classList.add('card__front-image');
		imageNode.setAttribute('src', 'resources/frontImage.png');
		frontNode.appendChild(imageNode);
		const text = document.createElement('span');
		text.classList.add('text');
		text.textContent = 'SKYWIND HALLOWEEN';
		frontNode.appendChild(text);
		const prizeNode = document.createElement('div');
		prizeNode.classList.add('card__back');
		prizeNode.textContent = prize;
		cardNode.appendChild(frontNode);
		cardNode.appendChild(prizeNode);
		fragment.appendChild(cardNode);
	});

	cardsContainer.appendChild(fragment);
});
