import React, { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';


function UpdateProduct() {

    const [name,SetName]=React.useState('');
    const [price,SetPrice]=React.useState('');
    const [category,SetCategory]=React.useState('');
    const [company,SetCompany]=React.useState('');
    const params=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
      getProductDetails();
    },[]);

    const getProductDetails =async ()=>{
        let result = await fetch(`http://localhost:400/product/${params.id}`,{
          headers:{
            authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        });
        result = await result.json();
        SetName(result.name);
        SetPrice(result.price);
        SetCategory(result.category);
        SetCompany(result.company);
    }

    const updateProduct= async()=>{
        let result = await fetch(`http://localhost:400/product/${params.id}`,{
          method:"put",
          body: JSON.stringify({ name,price,category,company }),
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
          },
        });
        result = await result.json();
        console.warn(result);
        navigate('/');
    };

  return (
    <div className='product '>
      <h1>Update Product</h1>

      <input type='text' placeholder='Enter Product Name' className='inputBox' value={name} onChange={(e)=>{SetName(e.target.value)}} />
     
      <input type='text' placeholder='Enter Product Price' className='inputBox' value={price} onChange={(e)=>{SetPrice(e.target.value)}} />
      

      <input type='text' placeholder='Enter Product Category' className='inputBox' value={category} onChange={(e)=>{SetCategory(e.target.value)}} />
      

      <input type='text' placeholder='Enter Product Company' className='inputBox' value={company} onChange={(e)=>{SetCompany(e.target.value)}} />
      
      <button className='sbutton' onClick={updateProduct}>Update</button>
    </div>
  )
}

export default UpdateProduct;