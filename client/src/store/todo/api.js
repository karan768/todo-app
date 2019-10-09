import axios from 'axios'
//********************( api for getting all the data )***********************************
export const getTodos = () => {
  return axios.get('/notes')
    .then(res => {
      console.log(res.data.items);
      return res.data.items
    })
      .then(payload => {
      console.log(payload,"payload new")
      return payload
      
    })
    .catch(error => {
      throw error
    })
}
//********************( api for adding any the data )***********************************
export const addTodos = data => {
  const value = data.name
  console.log(value,"value")
  return axios.post('/add',{value})
    .then(res => {
      console.log(res);
      return res.data
    })
      .then(payload => {
      console.log(payload,"payload")
      return payload
      
    })
    .catch(error => {
      throw error
    })
}
//********************( api for deleting any the data )***********************************
export const deleteTodos = data => {
  const id = data.ID
  console.log(id,"$$")
  return axios.delete('/delete_item/'+id)
    .then(res => {
      console.log(res);
      return res.data
    })
      .then(payload => {
      console.log(payload,"payload")
      return payload
      
    })
    .catch(error => {
      throw error
    })
}
//********************( api for updating any the data )***********************************
export const updateTodos = data1 => {
  const id = data1.ID
  const name = data1.DATA
  return axios.put('/update_item/'+id,{name})
    .then(res => {
      console.log(res);
      return res.data
    })
      .then(payload => {
      console.log(payload,"payload")
      return payload
      
    })
    .catch(error => {
      throw error
    })
}