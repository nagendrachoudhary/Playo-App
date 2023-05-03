import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.common['token'] = localStorage.getItem('token');
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
export async function LoginApi(data){
    return axios.post('/login',{...data})
}

export async function getLoggedInUser(){
    return axios.get('/getloggedinuser')
}
 
export async function CreateAccount(data){
    delete data.confrompassword
    console.log(data)
    return axios.post('/signup',{...data})
}
export async function getAllTables(){
    return axios.get('/sports')
}