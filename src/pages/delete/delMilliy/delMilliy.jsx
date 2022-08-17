import React from 'react'
import { NavLink } from 'react-router-dom';
// import './restaruant.css'

function DeleteProductMilliy() {
    const [users, setUser] = React.useState([]);

    React.useEffect(() => {
      (async () => {
        try {
          const response = await fetch('https://furniture-back.herokuapp.com/milliyProduct');
          const data = await response.json();
          
          if (data?.length > 0) {
            setUser([...data]);
          }

        } catch (err) {
          console.log(err);
        }
      })();
	  }, []);

    function deleteUser(id)
    {
      fetch(`https://furniture-back.herokuapp.com/milliyProduct/${id}`,{
        method: 'DELETE'
      }).then((result)=>{
        result.json().then((resp)=>{
          console.warn(resp)
        })
      })
    }


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
    <div className='allRest2'>
        <h2 className='allNAeRest'>All Product</h2>
           {users.length > 0 &&
            users.map((Restaruant) => (
              <div className="rest2" key={Restaruant.id}>
              <div>
                  <p className='restName'>Name: {Restaruant.name}</p>
                  <p className='restName'>Id: {Restaruant.id}</p>
              </div>
              <button onClick={()=>deleteUser(Restaruant.id)} className='batn alifBtn'>Delete</button>
            </div>
            ))
          }

          {users.length < 0 && <h1>Malumot Yo'q </h1>}
        </div>
    </div>
  );
}

export default DeleteProductMilliy;