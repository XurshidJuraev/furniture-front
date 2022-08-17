import React from 'react'
import { NavLink } from 'react-router-dom';
// import './restaruant.css'

function NewMilliyProduct() {
    const [name, setName] = React.useState("");
    const [imgUrl, setImgUrl] = React.useState("");
    const [restaurantId, setRestaurantId] = React.useState("");
    const [prices, setPrices] = React.useState("");
    const [isPanding, setIsPanding] = React.useState(false)
    const [rest, setRest] = React.useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        const restaran = { name, imgUrl, restaurantId, prices }

        setIsPanding(true)

        fetch('https://furniture-back.herokuapp.com/milliyProduct', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(restaran)
        }).then(() => {
            console.log("Qo'shildi")
            setIsPanding(false)
        })
    }


    React.useEffect(() => {
      (async () => {
        try {
          const response = await fetch('https://furniture-back.herokuapp.com/milliy');
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
    <div className='allRest'>
        <form className='forma' onSubmit={handleSubmit}>
            <input 
                className='inputbit'
                required
                value={imgUrl}
                placeholder="Product Img Url" 
                onChange={(e) => setImgUrl(e.target.value)} />
            <input 
                className='inputbit'
                required
                value={name}
                placeholder="Product Name" 
                onChange={(e) => setName(e.target.value)} />
            <input 
                className='inputbit'
                required
                placeholder="Restaruant Id" 
                value={restaurantId}
                onChange={(e) => setRestaurantId(e.target.value)} />
            <input 
                className='inputbit'
                required
                placeholder="Narxi qancha..." 
                value={prices}
                onChange={(e) => setPrices(e.target.value)} />
            { !isPanding && <button className='batn alifBtn' type="submit">Send</button>}
            { isPanding && <button className='batn alifBtn' disabled type="submit">Qo'shilmoqda...</button>}
        </form>
    </div>
    <div className='allRest'>
        <h2 className='allNAeRest'>All Product</h2>
           {users.length > 0 &&
            users.map((Restaruant) => (
              <div className="rest2" key={Restaruant.id}>
              <div>
                  <p className='restName'>Name: {Restaruant.name}</p>
                  <p className='restName'>Id: {Restaruant.id}</p>
                  <p className='restName'>Price: {Restaruant.prices}</p>
              </div>
            </div>
            ))
          }
        </div>
    <div className='allRest'>
    <h2 className='allNAeRest'>All Restaruant</h2>
    {rest.length > 0 &&
          rest.map((Restaruant) => (
            <div className="rest2" key={Restaruant.id}>
              <div>
                  <p className='restName'>Name: {Restaruant.name}</p>
                  <p className='restName'>Id: {Restaruant.id}</p>
              </div>
            </div>
          ))
        }
        </div>
    </div>
  );
}

export default NewMilliyProduct;