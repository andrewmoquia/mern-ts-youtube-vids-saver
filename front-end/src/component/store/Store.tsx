import { useReducer, createContext } from 'react'
import { IState, IAction } from '../interfaces/Interface'

const initialState: IState = {
    videos: [],
    editMenu: {
        isEditMenuActivated: false,
        video: {}
    },
}

export const Store = createContext<IState | any>(initialState)

function reducer(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, videos: action.payload }
        case 'CREATE_DATA': 
            return { ...state, videos: [...action.payload] }
        case 'DELETE_DATA':
            return { ...state, videos: [...action.payload] }
        case 'UPDATE_DATA':
            return { ...state, videos: [...action.payload] }
        case 'EDIT_MENU_STATE':
            return { ...state, editMenu: {
                isEditMenuActivated: action.payload.isEditMenuActivated,
                video: action.payload.video
            }}
        default:
            return state
    }
}

export function StoreProvider(props: JSX.ElementChildrenAttribute): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Store.Provider value={{ state, dispatch }}>
            {props.children}
        </Store.Provider>
    )
}