import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
//import { toastError } from './components/Toast/toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App() {

  const [cart, setCart] = useState([]);

  const [creditHour, setCreditHour] = useState(0);

  const handleAddCourse = (course, hours) =>{
    //console.log(course.title);
    const isExist = cart.find(courseCart => courseCart.id == course.id);
    const newCreditHours = creditHour + hours;

    if(isExist){
      toast.error("This course has already been added");
    }
    else if(newCreditHours > 20){
      toast.error("The credit hours limit is 20 hours maximum");
    }
    else{
      const newCart = [...cart, course];
      setCart(newCart);
      setCreditHour(newCreditHours);
    }
    
  }

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
       <h1 className='text-3xl font-bold text-center my-4'>Course Registration</h1>
      
      <div className='flex flex-col md:flex-row mx-5'>
       
       <Courses handleAddCourse={handleAddCourse}></Courses>
       
       <Cart cart={cart} creditHour={creditHour}></Cart>  

      

      </div>
      
    </>
    
  )
}

export default App
