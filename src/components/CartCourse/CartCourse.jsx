import PropTypes from 'prop-types';
const CartCourse = ({cart}) => {
    const {title} = cart;
   
    return (
        <>
            {title}
        </>
    );
};

CartCourse.propTypes = {
    cart: PropTypes.object.isRequired
}

export default CartCourse;