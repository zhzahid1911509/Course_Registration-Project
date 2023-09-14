
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'

function App() {
 
  

  return (
    <>
       <h1 className='text-3xl font-bold text-center my-4'>Course Registration</h1>
      <div className='flex flex-col md:flex-row mx-5'>
       
       <Courses></Courses>
       
       <Cart></Cart>       

      </div>
    </>
    
  )
}

export default App
