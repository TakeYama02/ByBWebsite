const handleBurgerMenu = () => {
	const linksState = document.getElementById("links");
	if (linksState.style.display === "block") {
		linksState.style.display = "none";
	} else {
		linksState.style.display = "block";
	}
};
