import React from "react";

const ResturentFooter = () => {
  return (
    <>
      <footer class="bg-dark text-light pt-5 pb-4">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Company Name
              </h5>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Products
              </h5>
              <p>
                <a
                  href="#"
                  class="text-light"
                  style={{ textDecoration: " none" }}
                >
                  Product 1
                </a>
              </p>
              <p>
                <a
                  href="#"
                  class="text-light"
                  style={{ textDecoration: " none" }}
                >
                  Product 2
                </a>
              </p>
              <p>
                <a
                  href="#"
                  class="text-light"
                  style={{ textDecoration: " none" }}
                >
                  Product 3
                </a>
              </p>
              <p>
                <a
                  href="#"
                  class="text-light"
                  style={{ textDecoration: " none" }}
                >
                  Product 4
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Useful links
              </h5>
              <p>
                <a
                  href="#"
                  class="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Your Account
                </a>
              </p>
              <p>
                <a
                  href="#"
                  class="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a
                  href="#"
                  class="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Shipping Rates
                </a>
              </p>
              <p>
                <a
                  href="#"
                  class="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Help
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Contact
              </h5>
              <p>
                <i class="fas fa-home mr-3"></i> New York, NY 2333, US
              </p>
              <p>
                <i class="fas fa-envelope mr-3"></i> info@example.com
              </p>
              <p>
                <i class="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i class="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>

          <hr class="mb-4" />

          <div class="row align-items-center">
            <div class="col-md-7 col-lg-8">
              <p class="text-center text-md-left">
                © 2024 Copyright:
                <a
                  href="#"
                  class="text-warning"
                  style={{ textDecoration: "none" }}
                >
                  <strong> yoursite.com</strong>
                </a>
              </p>
            </div>

            <div class="col-md-5 col-lg-4">
              <div class="text-center text-md-right">
                <ul class="list-unstyled list-inline">
                  <li class="list-inline-item">
                    <a
                      href="#"
                      class="btn-floating btn-sm text-light"
                      style={{ fontSize: "23px" }}
                    >
                      <i class="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="#"
                      class="btn-floating btn-sm text-light"
                      style={{ fontSize: "23px" }}
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="#"
                      class="btn-floating btn-sm text-light"
                      style={{ fontSize: "23px" }}
                    >
                      <i class="fab fa-google-plus"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="#"
                      class="btn-floating btn-sm text-light"
                      style={{ fontSize: "23px" }}
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="#"
                      class="btn-floating btn-sm text-light"
                      style={{ fontSize: "23px" }}
                    >
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ResturentFooter;
