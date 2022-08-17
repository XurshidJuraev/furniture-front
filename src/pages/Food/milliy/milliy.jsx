import React from 'react'
import { NavLink } from 'react-router-dom';
// import './restaruant.css'

function Milliy() {
    const [rest, setRest] = React.useState([]);

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

    console.log(rest)

  return (
    <div className='allRest'>
        {rest.length > 0 &&
          rest.map((Restaruant) => (
            <div className="rest" key={Restaruant.id}>
              <NavLink className='restName' to={'/product/milliy'}>
              <div>
                  <img className='restImg' src={Restaruant.imgUrl} alt={Restaruant.name} />
                  <p className='restName'>{Restaruant.name}</p>
              </div>
            </NavLink>
            </div>
          ))
        }
    </div>
  );
}

export default Milliy;