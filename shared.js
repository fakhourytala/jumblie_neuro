function playJumblie(str) {
	window.location.href = `https://neurojumblie.com/?utm_campaign=${str}&utm_source=${str}`;
}

function suggestAgain() {
	window.location.href = `https://neurojumblie.com/suggest/`;
}

function shareLink() {
	if (navigator.share) {
		navigator
			.share({
				title: "Neuro Jumblie",
				text: "Check out Jumblie, a fun word search game!",
				url: "https://neurojumblie.com",
			})
			.then(() => console.log("Successful share"))
			.catch((error) => console.log("Error sharing", error));
	} else {
		console.log("Share not supported");
	}
}
