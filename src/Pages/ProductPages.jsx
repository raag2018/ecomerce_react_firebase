import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {app} from '../firebase'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export const  ProductPages = () => {
  const auth = getAuth(app)
  const navigate = useNavigate()
  useEffect(() => {
    const authentication = async() => {
      await onAuthStateChanged(auth, (user) => {
        if(user){
          console.log("logueado correctamente")
        }else{
          navigate('/login')
        }
      })
    }
    authentication()

}, [])
    return (
      <>
      product pages
      </>
    )
  }
  
  export default ProductPages
  