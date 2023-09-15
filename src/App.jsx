import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'


function App() {

  const [cart, setCart] = useState([]);

  const handleAddCourse = course =>{
    console.log(course.title);
    const newCart = [...cart, course];
    setCart(newCart);
  }

  return (
    <>
       <h1 className='text-3xl font-bold text-center my-4'>Course Registration</h1>
      <div className='flex flex-col md:flex-row mx-5'>
       
       <Courses handleAddCourse={handleAddCourse}></Courses>
       
       <Cart cart={cart}></Cart>       

      </div>
    </>
    
  )
}

export default App
