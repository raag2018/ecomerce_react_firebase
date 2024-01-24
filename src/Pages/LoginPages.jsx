
import Login from "../Components/Login"
const LoginPages = () => {
  return (
    <>
      <div className="container m-auto d-flex p-5 justify-content-center">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3 className="text-center me-3 text-white">Welcome, Login User!</h3>
          </div>
          <div className="col-sm-12"></div>
          <Login />
        </div>
      </div >
    </>
  )
}

export default LoginPages
