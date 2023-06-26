export const setLocalItems = (key: string, data: any): void => {
	localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalItems = (key: string): any | null => {
	return localStorage.getItem(key);
};

export const removeLocalItems = (key: string): void => {
	localStorage.removeItem(key);
};
