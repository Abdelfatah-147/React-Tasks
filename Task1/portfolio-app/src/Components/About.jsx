function About() {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
              
            <div className="col-md-4 text-center">
              <img src="Hero.jpeg" alt="about" className="img-fluid rounded-circle" style={{ width: "250px", height: "250px" }} />
            </div>
  
            <div className="col-md-8">
              <h2>About Me</h2>
  
              <p className="mt-3">
                I am a Full Stack .NET Developer passionate
                about building modern web applications.
                I enjoy learning new technologies and creating
                user-friendly solutions.
              </p>
  
              <button className="btn btn-primary"> Download CV </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;