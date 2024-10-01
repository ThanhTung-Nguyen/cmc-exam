import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./index";
import { RootState } from "../redux/reducer";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
