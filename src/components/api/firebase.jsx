import * as Axios from 'axios';


const apiFirebase = Axios.create({
    baseURL:'https://movies-85749-default-rtdb.firebaseio.com/'
})

export default apiFirebase;