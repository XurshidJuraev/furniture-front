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

function Header() {
  return (
    <div>
      <div className="py-1 ftco-bg-dark bg-black top">
    	<div className="container">
    		<div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
	    		<div className="col-lg-12 d-block">
		    		<div className="row d-flex">
		    			<div className="col-md pr-4 d-flex topper align-items-center">
					    	<div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2 text-secondary"></span></div>
							<a className="text text-secondary" href="tel:+998935093552">+998935093552</a>
					    </div>
					    <div className="col-md pr-4 d-flex topper align-items-center">
					    	<div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane text-secondary"></span></div>
							<a className="text text-secondary" href="https://www.instagram.com/_xon_mebel_/">Instagram</a>
					    </div>
					    <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right justify-content-end text-secondary">
						    <p className="mb-0 register-link"><span>Ishlash Vaqti:</span> <span>Dushanbadan - Yakshanbagacha</span> <span>8:00 - 18:00</span></p>
					    </div>
				    </div>
			    </div>
		    </div>
		  </div>
    </div>

    {/* <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <a className="navbar-brand" href="apple.com">Feliciano</a>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="apple.comftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	        	<li className="nav-item active"><a href="apple.com" className="nav-link">Home</a></li>
	        	<li className="nav-item"><a href="apple.com" className="nav-link">About</a></li>
	        	<li className="nav-item"><a href="apple.com" className="nav-link">Menu</a></li>
	        	<li className="nav-item"><a href="apple.com" className="nav-link">Stories</a></li>
	          <li className="nav-item"><a href="apple.com" className="nav-link">Contact</a></li>
	          <li className="nav-item cta"><a href="apple.com" className="nav-link">Book a table</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav> */}
    </div>
  );
}

export default Header;
