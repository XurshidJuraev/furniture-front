import { NavLink } from 'react-router-dom';

function DelHome() {
  return (
    <div className="App">
        <header>
        <NavLink className='tdn' to={'/order'}>
          <p className='list'>Order</p>
		</NavLink>
        <NavLink className='tdn' to={'/newProd'}>
          <p className='list'>New Product</p>
		</NavLink>
        <NavLink className='tdn' to={'/delProd'}>
          <p className='list'>Delete Product</p>
		</NavLink>
      </header>
      <div className="dead">
      <div className="button">
        <NavLink className='tdn' to={'/delMilliyProd'}>
          <button className='batn affa2 nmadr'>Bolalar Mebeli</button>
        </NavLink>
        <NavLink className='tdn' to={'/delProd'}>
          <button className='batn affa'>Hammasi</button>
        </NavLink>
      </div>
      </div>


    </div>
  );
}

export default DelHome;
