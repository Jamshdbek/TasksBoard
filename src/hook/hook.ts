import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState,  AddDispach } from '../redux/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () =>  AddDispach = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector