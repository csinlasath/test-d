import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer class="page-footer fixed-bottom font-small special-color-dark pt-4">
      <div class="container">
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a class="btn-floating btn-fb mx-1"
              href="https://github.com/DKILGORE79">
              <i class="fab fa-github"> </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-li mx-1"
              href= "https://www.linkedin.com/in/derek-kilgore-56304425/">
              <i class="fab fa-linkedin-in"></i>
            </a>
            </li>
              <li class="list-inline-item">
            <a class="btn-floating btn-li mx-1"
              href="mailto:Derek.kilgore@gmail.com">
              <i class="fas fa-envelope"></i>
              </a>
            </li>
          
        </ul>
      </div>

      <div class="footer-copyright text-center py-3">
        © 2022 Copyright: Derek Kilgore
        
      </div>
    </footer>
  )
};

export default Footer;
