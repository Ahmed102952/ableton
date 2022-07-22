export const activeMenu = (menuBtn: Element, menu: Element) => {
	menuBtn?.classList.toggle("active");
	menu?.classList.toggle("active");
};
