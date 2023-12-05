import axios from 'axios'


const baseUrl = 'http://localhost:3001/persons'


const getAll = () => 
    axios.get(baseUrl).then(response => response.data)


const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const createContact = (object) => axios.post(baseUrl, object).then(response => response.data)

const updateContact = (id, object) => axios.put(`${baseUrl}/${id}`, object).then(response => response.data)

export default {
    getAll,
    deletePerson,
    createContact,
    updateContact
}