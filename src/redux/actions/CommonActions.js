import { SHOW_LOADING } from "./ActionTypes";

export const showLoading = (show = false) => ({
	type: SHOW_LOADING,
	payload: show
})