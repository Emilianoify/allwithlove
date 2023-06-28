import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { reducer } from "./slice";

export const getServices = (): ThunkAction<
	Promise<void>,
	RootState,
	unknown,
	AnyAction
> => {
	return async (dispatch) => {
		try {
			const response = await fetch("../../utils/services.json");
			const data = await response.json();
			dispatch(reducer.getServices(data));
		} catch (error) {
			alert(error);
		}
	};
};

export const orderByName = (
	data: string,
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return (dispatch) => {
		dispatch(reducer.sortAlphabetically(data));
	};
};
