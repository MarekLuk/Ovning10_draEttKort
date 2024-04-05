const element = document.getElementById("fetchDataBtn");

element.addEventListener("click", function getApi() {
	// const inputText = document.getElementById("input").value;
	const fullUri = `https://deckofcardsapi.com/api/deck/new/draw/?count=1`;
	// const fullUri = `https://www.swapi.tech/api/people`;
	// textArea.value = "Fetchig data....";

	fetch(fullUri)
		.then((res) => res.json())
		.then((data) => {
			console.log(data.cards[0].image);
			// let s = data.result[0].properties;
			// console.log(s);
			// console.log(
			// 	`Height: ${s.height}, Mass: ${s.mass}, Hair color: ${s.hair_color}, Eye color: ${s.eye_color}, Gender: ${s.gender}.`
			// );
			// textArea.value = `Height: ${s.height}\nMass: ${s.mass}\nHair color: ${s.hair_color}\nEye color: ${s.eye_color}\nGender: ${s.gender}`;
		})
		.catch((err) => {
			console.log(err);
			// textArea.value = `Error: ${err.message}`;
		});
});
