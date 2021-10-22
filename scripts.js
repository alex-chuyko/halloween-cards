let wasSelected = false;
const wishes = [
	'What I love most about Halloween is, I get to eat a lot of the candy my kids collect. Life is good. Halloween makes it better. Have a sweet one.',
	'Do you know, some people believe the deceased come back from the dead to visit the living on Halloween? I hope all who come to visit you put a smile on your face this Halloween.', // 
	'Halloween is a holiday that children of all ages can enjoy. I hope you and your inner child have loads of fun. Best Halloween wishes from someone who never wants to grow up.',
	'If you see a pumpkin in my window, then you know it’s Halloween. I hope that it’s the kind of day that really makes you scream.',
	'There’s a black cat in the window and a pumpkin on my stoop. On the lawn are a ghost and a witch. This tells me Halloween is very near, so Happy Halloween to you.',
	'I hope your Halloween is all treats and no tricks…enjoy the candy and festivities!',
	'When witches go riding, and black cats are seen, the moon laughs and whispers, ’tis near Halloween.',
	'I wish you have a spooky time on Halloween. But don’t get too scared though.',
	'Whether you dress like Garfield, Odie, or Pookie, I hope that your Halloween is spectacularly spooky! Happy Halloween.'
];

const shuffleArray = (array) => {
	let currentIndex = array.length;

	while (currentIndex !== 0) {

		const randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
};

window.addEventListener('load', () => {
	const cardsContainer = document.querySelector(".cards-container");

	cardsContainer.addEventListener("click", (event) => {
		const isOpened = cardsContainer.querySelector('.card.card_opened');
		const cardNode = event.target.closest('.card');
		if (!cardNode || (isOpened && !cardNode.classList.contains('card_opened'))) {
			return;
		}

		if (cardNode.classList.contains('card_opened')) {
			cardNode.style.zIndex = 0;
			cardNode.classList.toggle('card_big');
			cardNode.classList.toggle('card_opened');
			cardNode.style.removeProperty('transform');
			return;
		}

		// if (wasSelected) {
		// 	errorContainer.classList.toggle('error-conteiner_visible');
		// 	return;
		// }
		cardNode.style.zIndex = 20;
		cardNode.classList.toggle('card_big');
		const containerRect = cardsContainer.getBoundingClientRect();
		const centerX = containerRect.x + 80;
		const centerY = containerRect.y + 100;
		const clientRect = cardNode.getBoundingClientRect();
		const cardX = clientRect.x;
		const cardY = clientRect.y;
		cardNode.style.transform = `translate(${centerX - cardX}px, ${centerY - cardY}px)`;
		wasSelected = true;
		cardNode.classList.toggle('card_opened');

		// if (cardNode.classList.contains('card_opened')) {
		// 	const cardGhost = document.createElement('div');
		// 	cardGhost.className = 'card-ghost';
		// 	cardNode.parentNode.insertBefore(cardGhost, cardNode.nextSibling);
		// 	if (cardNode.classList.contains('card_big')) {
		// 		const cardGhost = document.querySelector('.card-ghost');
		// 		cardGhost.parentNode.removeChild(cardGhost);
		// 	} else {
		// 	}
		// }
	});

	const firstCard = document.querySelector('.cards-container .card');
	const fragment = document.createDocumentFragment();
	shuffleArray(wishes);
	wishes.forEach((wish, index) => {
		if (index === 0) {
			firstCard.querySelector('.card__back-wish').textContent = wish;
			return;
		}

		const cloneCard = firstCard.cloneNode(true);
		cloneCard.querySelector('.card__back-wish').textContent = wish;
		fragment.appendChild(cloneCard);
	});

	cardsContainer.appendChild(fragment);
});
