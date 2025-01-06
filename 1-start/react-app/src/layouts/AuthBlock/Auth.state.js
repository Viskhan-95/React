import { saveDataLocalStorage } from "../../hooks/use-localstorage.hook";

export const init = (localStorageData) => {    
    return {
        isLogined: localStorageData.find(user => user.isLogined),
        user: localStorageData.find(user => user.isLogined ? user.name : null),
        users: localStorageData
        // loading: false,
        // error: null
    } || {
        isLogined: false,
        user: null,
        users: []
        // loading: false,
        // error: null
    }
};

export function authReducer(state, action) {
    // const [users, setUsers] = useLocalstorage('user');
    switch(action.type) {
        // case 'LOGIN_REQUEST' : {
        //     return { ...state, loading: true, error: null };
        // }
        // case 'LOGIN_FAILURE' : {
        //     return { ...state, loading:false, error: action.payload };
        // }
        case 'LOGIN_SUCCESS' : {
            let userFound = false;

            const updatedUsers = state.users.map(user => {
                if(user.name === action.payload.name) {
                    userFound = true;
                    return {...user, isLogined: true}
                }
                return {...user, isLogined: false}
            });
            if(!userFound) {
                saveDataLocalStorage(updatedUsers);
                updatedUsers.push({...action.payload, isLogined: true})
            }
            saveDataLocalStorage(updatedUsers);
            return {
                ...state,
                isLogined: true,
                user: action.payload,
                users: updatedUsers,
                // loading: false,
                // error: null
            };
        }
        case 'LOGOUT' : {
            console.log(state.users)
            const updatedUsers = state.users.map(user => user.name === state.user.name
                ? {...user, isLogined: false}
                : user
            ) 
            saveDataLocalStorage(updatedUsers);
            return {
                ...state,
                isLogined: false,
                user: null,
                users: updatedUsers,
                // loading: false,
                // error: null
            };
        }
        default: {
            return state;
        }
    };
}