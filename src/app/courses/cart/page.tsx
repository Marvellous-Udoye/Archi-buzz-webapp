import Cart from '../components/archi-cart';
import CartSummary from '@/app/component/common/cart-summary';

const CartPage = () => {
  return (
    <div className={`max-w-[1266px] mx-auto px-4 pb-8 lg:px-0`}>
      <h1 className="text-[24px] leading-8 sm:text-[40px] font-medium my-6 sm:my-10">Shopping Cart</h1>

      <div className='flex justify-between flex flex-col lg:flex-row gap-5 lg:gap-0'>
        <Cart />
        <CartSummary />
      </div>
    </div>
  );
};

export default CartPage;
