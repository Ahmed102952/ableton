import { activeMenu } from "./util/activeMenu";

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
