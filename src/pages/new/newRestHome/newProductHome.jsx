import { NavLink } from 'react-router-dom';

function NewREstHome() {
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
        <NavLink className='tdn' to={'/newMilRest'}>
          <button className='batn affa2 nmadr'>Milliy Taomlar</button>
        </NavLink>
        <NavLink className='tdn' to={'/newRest'}>
          <button className='batn affa'>Fast Food</button>
        </NavLink>
      </div>
      </div>


    </div>
  );
}

export default NewREstHome;
