import axios from 'axios'


//defines initial state
const initialAuthState = {
    isAuthenticated: false,
    email: null,
    password: null
}
//define action types
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'


export const checkAuthentication = async (dispatch) => {
    dispatch({type:LOGOUT})
    let authenticated = await axios.get('/api/auth').then(res => res.data)
    dispatch({type: LOGIN_SUCCESS, payload: authenticated})
}

// app.get('/', async (req, res) => {
//     req.session.userId = user.userId
//     if(req.session.userId) {
//         res.status(200).json({loggedIn: true})
//     } else {

//     }
// }) 


export default function authReducer (state = initialAuthState, action) {
    switch(action.type) {
        case LOGOUT:
            return {
                ...state, 
                isAuthenticated: false, 
                email: null,
                password: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                 isAuthenticated: true, 
                 email: action.payload,
                 password: action.payload
                }
        default:
            return state
        }   
}