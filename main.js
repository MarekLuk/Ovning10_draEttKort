const element = document.getElementById("fetchDataBtn");
const imageview = document.getElementById("viewcard");

element.addEventListener("click", function getApi() {
	const fullUri = `https://deckofcardsapi.com/api/deck/new/draw/?count=1`;

	fetch(fullUri)
		.then((res) => res.json())
		.then((data) => {
			console.log(data.cards[0].image);
			const fetchedImg = data.cards[0].image;
			drawCard(fetchedImg);
		})
		.catch((err) => {
			console.log(err);
		});
});

function drawCard(fetchedImg) {
	imageview.innerHTML = "";
	const newImg = document.createElement("img");
	newImg.setAttribute("src", fetchedImg);
	imageview.appendChild(newImg);
}
