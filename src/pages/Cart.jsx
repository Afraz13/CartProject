import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/slices/cartSlice';

function Cart() {
  const cartArray=useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  const dispatch=useDispatch()

  return (
    
    <div>
     { cartArray?.length>0? <div>
        <table className='table border shadow'>
          <thead>
            <th>#</th>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </thead>
          <tbody>
            {
              cartArray?.map((item,index)=>(
             <tr>
               <td>{index+1}</td>
               <td>{item.title}</td>
               <td><img src={item.thumbnail} width={'150px'} alt="no image" /></td>
               <td>₹{item.price}</td>
               <td><Button onClick={()=>dispatch(removeFromCart(item.id))}><i class="fa-solid fa-trash"></i></Button></td>
             </tr>
              ))
              }
          </tbody>
        </table>
      </div>: <p>Nothing to display</p>
      } 
    </div>
        
  )       
    }         

export default Cart