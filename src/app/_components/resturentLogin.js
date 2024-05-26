const ResturentLogin = () => {
  return (
    <>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://source.unsplash.com/600x300/?password"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="mb-5">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter Email id"
                />
              </div>
              <div class="mb-5">
                <input
                  type="password"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter Password"
                />
              </div>
              <button className="btn btn-success float-end mb-3">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResturentLogin;
