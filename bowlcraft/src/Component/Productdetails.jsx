import React from 'react'
import { useParams } from 'react-router-dom'
import menudata from './menudata'
function Productdetails() {
  const { product_details } = useParams();
  console.log(product_details);
  const product = menudata.find(item => item.id === parseInt(product_details))
  // product ek variable hai
  // menudata.find() menudata (jo ek array hai) ke andar se
  // har item (jo ek element / object hota hai) ko check karta hai
  // agar item.id URL se aayi id ke barabar hoti hai
  // to us item ko product variable me store kar deta hai
  // jise hum baad me display kar sakte hain
  return (
    <div className='lg:pt-20 pt-28'>
      <div>
        <h1>hello</h1>
      </div>
    </div>
  )
}

export default Productdetails