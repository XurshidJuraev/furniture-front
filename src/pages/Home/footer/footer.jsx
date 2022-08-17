import '../css/open-iconic-bootstrap.min.css';
import '../css/animate.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/magnific-popup.css';
import '../css/aos.css';
import '../css/ionicons.min.css';
import '../css/bootstrap-datepicker.css';
import '../css/jquery.timepicker.css';
import '../css/flaticon.css';
import '../css/icomoon.css';
import '../css/style.css';

function Footer() {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Feliciano</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li className="ftco-animate"><a href="apple.com"><span className="icon-twitter"></span></a></li>
                <li className="ftco-animate"><a href="apple.com"><span className="icon-facebook"></span></a></li>
                <li className="ftco-animate"><a href="apple.com"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Open Hours</h2>
              <ul className="list-unstyled open-hours">
                <li className="d-flex"><span>Monday</span><span>9:00 - 24:00</span></li>
                <li className="d-flex"><span>Tuesday</span><span>9:00 - 24:00</span></li>
                <li className="d-flex"><span>Wednesday</span><span>9:00 - 24:00</span></li>
                <li className="d-flex"><span>Thursday</span><span>9:00 - 24:00</span></li>
                <li className="d-flex"><span>Friday</span><span>9:00 - 02:00</span></li>
                <li className="d-flex"><span>Saturday</span><span>9:00 - 02:00</span></li>
                <li className="d-flex"><span>Sunday</span><span> 9:00 - 02:00</span></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Newsletter</h2>
            	<p>Far far away, behind the word mountains, far from the countries.</p>
              <form action="apple.com" className="subscribe-form">
                <div className="form-group">
                  <input type="text" className="form-control mb-2 text-center" placeholder="Enter email address" />
                  <input type="submit" value="Subscribe" className="form-control submit px-3" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
