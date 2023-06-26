import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { reducer } from "./slice";

export const orderByName = (
	data: string,
): ThunkAction<void, RootState, unknown, AnyAction> => {
	return (dispatch) => {
		dispatch(reducer.sortAlphabetically(data));
	};
};
