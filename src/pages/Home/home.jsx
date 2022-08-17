import './home.css';
import Product from '../Food/product/product';
import Footer from './footer/footer';
import Header from './header/header';
import './css/open-iconic-bootstrap.min.css';
import './css/animate.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/magnific-popup.css';
import './css/aos.css';
import './css/ionicons.min.css';
import './css/bootstrap-datepicker.css';
import './css/jquery.timepicker.css';
import './css/flaticon.css';
import './css/icomoon.css';
import './css/style.css';
import Aqua from './aqua/aqua';

function App() {
  return (
    <div>
      
      <Header />
      <Aqua />

      {/* style={{ backgroundImage: 'url(https://as1.ftcdn.net/v2/jpg/04/19/83/42/1000_F_419834203_RixUibPwtxWj1XgofG8aurEcBb8lql28.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} */}
		
		

		<section className="ftco-section bg-light">
			<div className="container">
      <Product />
			</div>
		</section>
		
    <Footer />
    </div>
  );
}

export default App;
