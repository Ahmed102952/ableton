import { activeMenu } from "./util/activeMenu";

(document.querySelector("[data-header-img]") as HTMLDivElement).style.backgroundImage = `url(https://ik.imagekit.io/b85lgzght1m/tr:w-${document.querySelector("[data-header-img]")?.clientWidth}/ableton/header.jpg)`;

(
	document.querySelectorAll("[data-poster]") as NodeListOf<HTMLImageElement>
).forEach((img, i) => {
	img.src = `https://ik.imagekit.io/b85lgzght1m/ableton/poster-${i + 1}.jpg`;
	img.srcset = `
	https://ik.imagekit.io/b85lgzght1m/tr:w-500/ableton/poster-${i + 1}.jpg 500, 
	https://ik.imagekit.io/b85lgzght1m/tr:w-1000/ableton/poster-${i + 1}.jpg 1000
	https://ik.imagekit.io/b85lgzght1m/tr:w-1366/ableton/poster-${i + 1}.jpg 1366`;
});

(
	document.querySelectorAll(
		"[data-collage-img]"
	) as NodeListOf<HTMLDivElement>
).forEach((div, i) => {
	div.style.backgroundImage = `url(https://ik.imagekit.io/b85lgzght1m/tr:w-${
		div.clientWidth
	}/ableton/photo-${i + 1}.jpg)`;
});

document.querySelector("[data-menu-btn]")?.addEventListener("click", () => {
	activeMenu(
		document.querySelector("[data-menu-btn]") as Element,
		document.querySelector("[data-menu]") as Element
	);
});

document.querySelector("[data-more-btn]")?.addEventListener("click", () => {
	activeMenu(
		document.querySelector("[data-more-btn]") as Element,
		document.querySelector("[data-desktop-menu]") as Element
	);
});
