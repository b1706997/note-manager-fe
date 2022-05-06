import axios from 'axios';
   export async function getNotes () {
        axios.get('http://192.168.85.69:8080/notes?content=sadsad').then(response=>{
            console.log(response)
        }).catch(e=>{
            console.log(e)
        })
    }
