import axios from 'axios';
var host = 'http://192.168.85.69:8080/notes';

export async function getNotes() {
    return new Promise((resolve, reject) => {
        axios.get(host).then(response => {
            resolve(response)
        }).catch(e => {
            reject(e)
        })
    })
}

export async function getNote(id) {
    return new Promise((resolve, reject) => {
        axios.get(host+"/"+id).then(response => {
            resolve(response)
        }).catch(e => {
            reject(e)
        })
    })
}

export async function createNote(noteContent) {
    return new Promise((resolve, reject) => {
        var bodyFormData = new FormData();
        bodyFormData.append("contents",noteContent)
        axios({
            method: "POST",
            url: host,
            data: bodyFormData,
            headers: { 'Content-Type': 'multipart/form-data; charset=utf-8' }
        }).then(response => resolve(response))
            .catch(e => reject(e))
    })
}

export async function searchNote(searchValue) {
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: host+"?contents="+searchValue,
            headers: { 'Content-Type': 'multipart/form-data; charset=utf-8' }
        }).then(response => resolve(response))
            .catch(e => reject(e))
    })
}

export async function deleteNote(id) {
    return new Promise((resolve, reject) => {
        axios({
            method: "DELETE",
            url: host+"/"+id,
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        }).then(response => resolve(response))
            .catch(e => reject(e))
    })
}

export async function updateNote(id, noteContent) {
    return new Promise((resolve, reject) => {
        var bodyFormData = new FormData();
        bodyFormData.append("contents",noteContent)
        axios({
            method: "PUT",
            url: host+"/"+id,
            data: bodyFormData,
            headers: { 'Content-Type': 'multipart/form-data; charset=utf-8'}
        }).then(response => resolve(response))
            .catch(e => reject(e))
    })
}


