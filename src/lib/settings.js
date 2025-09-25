export const defaultSettings = {
	minCentury: 1400,
	maxCentury: 2200,
	allowStats: true,
};
export function getSettings() {
	const settings =
		window.localStorage.getItem("settings");

	if (!settings) {
		window.localStorage.setItem(
			"settings",
			JSON.stringify(defaultSettings)
		);
		return defaultSettings;
	}

	return JSON.parse(settings);
}

