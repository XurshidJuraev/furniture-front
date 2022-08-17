import React from 'react';
// import { useParams } from 'react-router-dom';
// import Lion from '../../delete/img/pngwing.com.png'

const PAGE_PRODUCT = 'products'
const PAGE_CART = 'cart'

const Product = () => {

    const [users, setUser] = React.useState([]);

    React.useEffect(() => {
      (async () => {
        try {
          const response = await fetch('https://furniture-back.herokuapp.com/products');
          const data = await response.json();
          
          if (data?.length > 0) {
            setUser([...data]);
          }

        } catch (err) {
          console.log(err);
        }
      })();
	  }, []);

    const [card, setCard] = React.useState([])
    const [page, setPage] = React.useState(PAGE_PRODUCT)
    const [name, setName] = React.useState("");
    const [product, setProduct] = React.useState("");
    const [nomer, setnomer] = React.useState("");
    const [addres, setaddres] = React.useState("");


    const addToCard = (Restaruant) => {
      setCard([...card, {...Restaruant}]);
    }

    const fetchData = (Restaruant) => {
      Restaruant.preventDefault()
      const restaran = { name, product, nomer, addres }
      console.log(name)
      // const sa = setName = Restaruant.name
      fetch('https://furniture-back.herokuapp.com/order', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(restaran)
      }).then(() => {
        console.log("Qo'shildi")
      })

    }


    const navigateTo = (nextPage) => {
      setPage(nextPage);
    }
    const removeFromCard = (Restaruant) => {
      setCard(card.filter(product => product!== Restaruant ));
    }

    const renderProduct = () => (
      <div>
        <div className='allRest'>
          {users.length > 0 &&
          users.map((Restaruant) => (
            <div className="rest" key={Restaruant.id}>
              <div>
                  <img className='restImg' src={Restaruant.imgUrl} alt={Restaruant.name} />
                  <p className='restName'>{Restaruant.name}</p>
                  <p className='restName'>{Restaruant.price}</p>
                  <button className='batn alifBtn3' onClick={() => addToCard(Restaruant)}>Add To Card</button>
              </div>
            </div>
            ))
          }
        </div>
      </div>
    )
    const renderCart = () => (
      <>
        <div className='allRest'>
          {card.map((Restaruant) => (
            <div key={Restaruant.id}><div className="rest" >
              <div>
                <img className='restImg' src={Restaruant.imgUrl} alt={Restaruant.name} />
                <p className='restName'>{Restaruant.name}</p>
                <p className='restName'>{Restaruant.price}</p>
                <button className='batn alifBtn3' onClick={() => removeFromCard(Restaruant)}>Remove Card</button>
              </div>
            </div>
            <form className='forma' onSubmit={fetchData}>
            <h4 className='fakeInput' value={name} onClick={(e) => setName(Restaruant.name)}>{Restaruant.name} <p>Bitta bosib qoying MAJBURIY!!</p></h4>
                <input
                  className='inputbit'
                  required
                  value={product}
                  placeholder="Bot emasligingizni tasdiqlash maqsadida birnima yozib tashlang..."
                  onChange={(e) => setProduct(e.target.value)} />
                <input
                  className='inputbit'
                  required
                  placeholder="Raqamingizni Kiriting"
                  value={nomer}
                  onChange={(e) => setnomer(e.target.value)} />
                <input
                  className='inputbit'
                  required
                  placeholder="Manzilingiz"
                  value={addres}
                  onChange={(e) => setaddres(e.target.value)} />

                  <button className='batn alifBtn'>Send</button>

              </form></div>
            ))}
        </div>
      </>
    )


        // <img className='bascket' src={Lion} alt="Savat" />

    return (
      <div>
          <button className='batn alifBtn2' onClick={() => navigateTo(PAGE_CART)}>Go to Card <span className='length'>{card.length}</span></button>
          <button className='batn' onClick={() => navigateTo(PAGE_PRODUCT)}>Wiew Product</button>
          {page === PAGE_PRODUCT && renderProduct()}
          {page === PAGE_CART && renderCart()}
      </div>
    );
};

export default Product;