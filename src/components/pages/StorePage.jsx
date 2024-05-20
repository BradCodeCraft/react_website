import { useContext, useEffect, useState } from "react";
import ThemeContext from "../GlobalThemeContext";

const StorePage = () => {
  const {theme } = useContext(ThemeContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products').then(res => res.json());
      const data = response.products;

      if (data) {
        console.log(data)
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

  console.log(products)

  return (
    <div className="store-page-container">
      <h1>Random Store Page</h1>

      <div className={`${theme}-products-container`}>
        
        {
          products && products.length > 0 ?
          products.map(product => 
          <div 
            className={`${theme}-product-container`}
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
    </div>
  )
}

export default StorePage;