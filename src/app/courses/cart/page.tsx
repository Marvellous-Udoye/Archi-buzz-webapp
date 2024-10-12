import CartSummary from '@/app/component/common/cart-summary';
import Cart from '../components/archi-cart';

const CartPage = () => {
  return (
    <div className="max-w-[1298px] mx-auto px-4 pb-8">
      <div className='my-6 sm:my-8'>
        <h1 className="text-[24px] leading-8 sm:text-[40px] font-medium mb-1 sm:mb-2.5">Shopping Cart</h1>
        <p className='text-[14px] sm:text-base sm:leading-8 font-medium'>Summer Sale! Up to 50% off selected items. Limited time only.</p>
      </div>

      <div className='flex justify-between flex flex-col lg:flex-row gap-5 lg:gap-0'>
        <Cart />
        <CartSummary />
      </div>
    </div>
  );
};

export default CartPage;
