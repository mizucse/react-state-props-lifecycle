import React,{useState, useEffect} from 'react';

const ProductDetails = (props) => {
    console.log(props);
    const [loader, hideLoader] = useState(true);

    useEffect(() => {
      // console.log(props.currentProductInfo) 
        setTimeout(() => {
          hideLoader(false);
        },1000);
      },[loader]);

    return <>
        {
            loader ? (
                <>
                <div className="loader-container">
                    <div className="loader"></div>
                  </div>
                </>
              )  : (
                <>
                    <h4>Product Details</h4>
                    <div style={{margin: '15px 0',padding: '15px'}}>
                        <p>Product Name: {props.currentProduct.name}</p>
                        <p>Product Category: {props.currentProduct.category}</p>
                        <p>Product Price: {props.currentProduct?.price}</p>
                        <p>Product Description: {props.currentProduct?.description}</p>
                        <button onClick={props.backToList}>Back to list</button>
                    </div> 
                </>
              )
        }
    </>
}

export default ProductDetails