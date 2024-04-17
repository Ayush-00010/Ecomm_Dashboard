import React from 'react';
import { useNavigate } from 'react-router-dom';


function AddProduct() {
    const [name,SetName]=React.useState('');
    const [price,SetPrice]=React.useState('');
    const [category,SetCategory]=React.useState('');
    const [company,SetCompany]=React.useState('');
    const [error,SetError]=React.useState(false);
    const navigate = useNavigate();
    
    const addProduct= async()=>{

        if(!name||!price||!category||!company){
            SetError(true);
            return false;
        }

        console.warn(name,price,category,company);
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result=await fetch("http://localhost:400/add",{
            method: "post",
            body: JSON.stringify({ name,price,category,userId,company }),
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
      <h1>Add Product</h1>

      <input type='text' placeholder='Enter Product Name' className='inputBox' value={name} onChange={(e)=>{SetName(e.target.value)}} />
      {error && !name && <span className='invalid-input'>Enter Valid Name</span>}

      <input type='text' placeholder='Enter Product Price' className='inputBox' value={price} onChange={(e)=>{SetPrice(e.target.value)}} />
      { error && !price && <span className='invalid-input'>Enter Valid Price</span>}

      <input type='text' placeholder='Enter Product Category' className='inputBox' value={category} onChange={(e)=>{SetCategory(e.target.value)}} />
      { error && !category && <span className='invalid-input'>Enter Valid Category</span> }

      <input type='text' placeholder='Enter Product Company' className='inputBox' value={company} onChange={(e)=>{SetCompany(e.target.value)}} />
      { error && !company && <span className='invalid-input'>Enter Valid Company</span> }

      <button className='sbutton' onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default AddProduct
