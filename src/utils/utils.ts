export const setLocalItems = (key: string, data: unknown): void => {
	localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalItems = (key: string): unknown | null => {
	return localStorage.getItem(key);
};

export const removeLocalItems = (key: string): void => {
	localStorage.removeItem(key);
};
