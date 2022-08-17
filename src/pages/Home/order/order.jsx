import React from 'react'
import './order.css'
import { NavLink } from 'react-router-dom';


function Order() {
    const [rest, setRest] = React.useState([]);
    const [app, setApp] = React.useState([]);

    React.useEffect(() => {
      (async () => {
        try {
          const response = await fetch('https://furniture-back.herokuapp.com/order');
          const data = await response.json();
          
          if (data?.length > 0) {
            setRest([...data]);
          }

          console.log(data)

        } catch (err) {
          console.log(err);
        }
      })();
	  }, []);

    console.log(rest)

  return (
    <div>

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

      <div className='frutinuti'><div className='border'>
        All Order:
              {rest.length > 0 &&
                  rest.map((Restaruant) => (
                      <div className="border" key={Restaruant.id}>
                          <div>
                              <p className='border1'>Id: {Restaruant.id}</p>
                              <p className='border1'>Raqam: {Restaruant.nomer}</p>
                              <p className='border1'>Mahsulot: {Restaruant.name}</p>
                              <p className='border1'>Manzil: {Restaruant.addres}</p>
                              <p className='border1'>Vaqt: {Restaruant.createdAt}</p>

                          </div>
                      </div>
                  ))}
          </div></div>
    </div>
  );
}

export default Order;