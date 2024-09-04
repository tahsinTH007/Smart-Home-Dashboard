import { useNavigate } from 'react-router-dom'
import axios from 'axios'
 const ApiLoginCalls = async (userCredential, dispatch) => {
    const navigate = useNavigate()
    dispatch({type: "LOGIN_START"})
    try {
        const res = await axios.post('/api/auth/login', userCredential)
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        navigate('/')
    } catch (err) {
        dispatch({type: "LOGIN_FAILURE", payload: err})
    }
}

export default ApiLoginCalls;