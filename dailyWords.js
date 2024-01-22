// Date of start, gonna just say October 4, 2023 for now
const startDate = new Date("January 21, 2024");

function getCurrentDate() {
	let now = new Date();
	let localDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	document.getElementById("today").textContent = localDate.toLocaleDateString();

	return localDate;
}

function getDayDifference() {
	let currentDate = getCurrentDate();
	let adjustedStartDate = new Date(
		startDate.getFullYear(),
		startDate.getMonth(),
		startDate.getDate()
	);
	let timeDifference = currentDate - adjustedStartDate;
	return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
}

let dayDifference = getDayDifference();

// let wordsForTheDay = wordList[dayDifference % wordList.length];
let wordsForTheDay = wordList[0];
let puzzleNumber = (dayDifference % wordList.length) + 1;
