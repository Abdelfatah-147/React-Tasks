function Hero() {
    return (
      <section className="bg-dark text-white min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
  
              <h1 className="display-3 fw-bold"> Abdelfatah Ahmed </h1>
  
              <h4 className="text-secondary mt-3"> Full Stack .NET Developer </h4>
  
              <p className="mt-4">
                Passionate about building modern web
                applications using ASP.NET Core,
                SQL Server and React.
              </p>
  
              <button className="btn btn-light me-2"> Contact Me </button>
              <button className="btn btn-outline-light"> Download CV </button>
  
            </div>
  
            <div className="col-md-6 text-center">
  
              <img src="Hero.jpeg" alt="profile" className="img-fluid rounded" style={{ maxWidth: "400px" }} />
  
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;