const ResturentSignup = () => {
  return (
    <>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://source.unsplash.com/600x600/?password"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="mb-4">
                <input
                  type="email"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter Email id"
                />
              </div>
              <div class="mb-4">
                <input
                  type="password"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter Password"
                />
              </div>
              <div class="mb-4">
                <input
                  type="password"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter Confirm Password"
                />
              </div>
              <div class="mb-4">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter Resturent Name"
                />
              </div>
              <div class="mb-4">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter City"
                />
              </div>
              <div class="mb-4">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter Full Address"
                />
              </div>
              <div class="mb-4">
                <input
                  type="number"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter Contact No"
                />
              </div>
              <button className="btn btn-success float-end mb-3">Signup</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResturentSignup;
