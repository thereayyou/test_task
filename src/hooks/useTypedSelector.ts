import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../redux/Reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector