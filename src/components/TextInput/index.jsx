import './styles.css'

export const TextInput = ({searchValue, handleChange})=>{
  return(
    <input 
    placeholder='type your post'
    className='text-input'
    onChange={handleChange}
    value = {searchValue}
    type="search" />
  )
  
}