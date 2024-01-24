import SignIn from '../Components/SingIn'

const  HomePages = () => {
  return (
    <>
      <div className="container m-auto d-flex p-5 justify-content-center">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3 className="text-center me-3 text-white">Welcome, Create new User!</h3>
          </div>
          <div className="col-sm-12">
            <SignIn/>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePages
