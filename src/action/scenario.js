import axios from 'axios'

const host = 'https://skamoney.ru/';

export const auth = async (login, pass) => {
  try{
        const response = await axios.post(`${host}api/user`, {
            login,
            pass
        })
    return response.data
  }catch(e){
      console.log(e)
  }
}
export const dellUser = async (_id) => {
    try{
        const response = await axios.delete(`${host}api/user`, {
            _id
        })
    return response.data
    }catch(e){
        console.log(e)
    } 
}
export const setName = async (_id, name) => {
    try{
          const response = await axios.put(`${host}api/set-name`, {
              _id,
              name
          })
      return response.data
    }catch(e){
        console.log(e)
    }
}
export const getLevel = async (level) => {
    try{
          const response = await axios.post(`${host}api/get-level`, {
              level
          })
      return response.data
    }catch(e){
        console.log(e)
    }
}
export const completeLevel = async (_id) => {
    try{
          const response = await axios.post(`${host}api/get-level`, {
              _id
          })
      return response.data
    }catch(e){
        console.log(e)
    }
}
