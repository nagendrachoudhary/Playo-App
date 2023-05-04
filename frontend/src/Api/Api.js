import axios from 'axios'
const newurl = 'http://localhost:8080'
axios.defaults.baseURL = 'https://playo-82j6.onrender.com';
axios.defaults.headers.common['token'] = localStorage.getItem('token');
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
export async function LoginApi(data) {
    return axios.post('/login', { ...data })
}
export async function getLoggedInUser() {
    return axios.get('/getloggedinuser')
}
export async function CreateAccount(data) {
    delete data.confrompassword
    return axios.post('/signup', { ...data })
}
export async function getAllTables({ input = 'All', city = "All", active = "All", Rating = "Random" }) {
    return axios.get(`/sports?game=${input}&city=${city}&active=${active}&rating=${Rating}`)
}
export async function Jointable(id) {
    return axios.post(`/sports/join/${id}`)
}
export async function createnewtable(data) {
    return axios.post(`/sports/create`, data)
}
export async function getAllReq() {
    return axios.get('/sports/allreqests')
}
export async function responserequest(data) {
    return axios.post('/sports/responserequest', data)
}
export async function playerInMyTable(id) {
    return axios.get(`/sports/table/players${id}`)
}
