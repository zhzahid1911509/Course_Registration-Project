import CartCourse from "../CartCourse/CartCourse";
import PropTypes from 'prop-types';

const Cart = ({cart}) => {
    
    return (
        <div className="md:w-1/3 mx-5 my-5 p-2 rounded-xl bg-white h-fit">
           <h3 className="text-left text-[#2F80ED] font-bold text-xl my-2">Credit Hour Remaining hr</h3>
           <hr/>
           <h3 className="text-xl font-bold my-2">Course Name</h3>
           <ol>
           {
              cart.map((cart, idx) => <li key={idx}>{idx+1} <CartCourse cart={cart} /></li>)
           }
           </ol>
           
            <hr />
            <h4 className="text-xl font-semibold my-2">Total Credit Hour: </h4>
            <hr />
            <h4 className="text-xl font-semibold my-2">Total Price: </h4>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired
}

export default Cart;