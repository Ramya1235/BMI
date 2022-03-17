import axios from 'axios';


export const register = async (user) => 
    await axios.post(`http://localhost:8000/api/register`, user);

export const login = async (user) => 
    await axios.post(`http://localhost:8000/api/login`, user);

export const Newcal = async (details) => 
    await axios.post(`http://localhost:8000/api/Calc/addCalc`, details);

export const getcal=async()=> await axios.get(`http://localhost:8000/api/Calc/getCalc`)
