// language.js: the language preference changes the window text and persists as a selectable setting.
const result = (name, ok) => `${ok ? "PASS" : "FAIL"} ${name}`;
const navContainers = () => document.querySelector('nav [data-view="containers"] .lbl')?.textContent;

prefs.language = "zh-CN";
ui.view = "containers";
render();
const zhNav = navContainers() === "容器";
ui.view = "settings";
prefs.tab = "appearance";
render();
const zhSettings = document.querySelector('[data-stab="appearance"]')?.textContent === "外观";
const zhSelect = document.querySelector("#pref-language")?.value === "zh-CN";

prefs.language = "en";
render();
const enSettings = document.querySelector('[data-stab="appearance"]')?.textContent === "Appearance";
const enSelect = document.querySelector("#pref-language")?.value === "en";

report([
  result("Chinese translates navigation", zhNav),
  result("Chinese translates settings", zhSettings),
  result("Chinese language selection is retained", zhSelect),
  result("English restores settings", enSettings),
  result("English language selection is retained", enSelect),
]);
