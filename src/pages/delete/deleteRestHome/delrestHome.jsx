import { NavLink } from 'react-router-dom';

function DelRestHome() {
  return (
    <div className="App">
        <header>
        <NavLink className='tdn' to={'/order'}>
          <p className='list'>Order</p>
		</NavLink>
    <NavLink className='tdn' to={'/newRest'}>
          <p className='list'>New Restaruant</p>
		</NavLink>
        <NavLink className='tdn' to={'/newProdHome'}>
          <p className='list'>New Product</p>
		</NavLink>
        <NavLink className='tdn' to={'/delRestHome'}>
          <p className='list'>Delete Restaruant</p>
		</NavLink>
        <NavLink className='tdn' to={'/delHome'}>
          <p className='list'>Delete Product</p>
		</NavLink>
      </header>
      <div className="dead">
      <div className="button">
        <NavLink className='tdn' to={'/delMilliyRest'}>
          <button className='batn affa2 nmadr'>Milliy Taomlar</button>
        </NavLink>
        <NavLink className='tdn' to={'/delRest'}>
          <button className='batn affa'>Fast Food</button>
        </NavLink>
      </div>
      </div>


    </div>
  );
}

export default DelRestHome;
