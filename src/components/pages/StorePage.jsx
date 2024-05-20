import { useContext, useEffect, useState } from "react";
import ThemeContext from "../GlobalThemeContext";

const StorePage = () => {
  const {theme } = useContext(ThemeContext);
  const [products, setProducts] = useState([]);
  const [shownProducts, setShownProducts] = useState(30);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=100`).then(res => res.json());
      const data = response.products;

      if (data) {
        setProducts(data);
        setLoading(false);
      }

    } catch (e) {
      alert(e)
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchData();
  }, [])

  if (loading) {
    return (
      <h2>
        Loading products ... Please wait ...
      </h2>
    )
  }

  console.log(products);

  return (
    <div className="store-page-container">
      <h1>Random Store Page</h1>

      <div className={`${theme}-products-container`}>
        
        <div className="products-grid-container">
        {
          products && products.length > 0 ?
          products.map(product => 
          <div
            key={product.id}
            className={`${theme}-product-container`}
            id={product.id > shownProducts ? "hidden-product" : "visible-product"}
            style={{gridRowStart:Math.ceil(product.id / 4)}}
          >
            <h4>
              {product.title}
            </h4>

            <img 
              className="product-image"
              src={`${product.thumbnail}`}
              alt={`${product.title}`}
              width={"100px"}
              height={"100px"}
            />

            <h5>
              Price: ${product.price - 1}.99
            </h5>
          </div>) : 
          null
        }
        </div>

        <button
          className={`${shownProducts === 100 ? `${theme}-disabled-load-more-button` : `${theme}-load-more-button`}`}
          onClick={() => shownProducts < 100 ? setShownProducts(shownProducts + 10) : null}
        >
          {
            shownProducts < 100 ?
            "Load More Products" :
            "Max Number of Products Reached"
          }
        </button>

      </div>
    </div>
  )
}

export default StorePage;