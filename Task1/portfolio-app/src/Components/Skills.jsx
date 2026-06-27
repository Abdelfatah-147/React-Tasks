function Skills() {
    return (
      <section className="bg-dark text-white py-5">
        <div className="container">
  
          <h2 className="text-center mb-5"> My Skills </h2>
  
          <div className="mb-4">
            <label>HTML</label>

            <div className="progress">
              <div className="progress-bar" style={{ width: "100%" }}> 100% </div>
            </div>
          </div>
  
          <div className="mb-4">
            <label>CSS</label>
  
            <div className="progress">
              <div className="progress-bar bg-success" style={{ width: "97%" }}> 97% </div>
            </div>
          </div>
  
          <div className="mb-4">
            <label>JavaScript</label>
  
            <div className="progress">
              <div className="progress-bar bg-warning" style={{ width: "95%" }}> 95% </div>
            </div>
          </div>
  
          <div className="mb-4">
            <label>React</label>
  
            <div className="progress">
              <div className="progress-bar bg-info" style={{ width: "75%" }}> 75% </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;