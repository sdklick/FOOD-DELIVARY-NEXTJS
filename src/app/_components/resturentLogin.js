import Image from "next/image";
import lockpng from "./images/lock.png";
const ResturentLogin = () => {
  return (
    <>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
          <Image
              src={lockpng} // External image URL
              width={200} // Desired width of the image
              height={200} // Desired height of the image
              className="img-fluid rounded-start" // Use className for adding classes
              alt="Example Image"
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
