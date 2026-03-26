import { useEffect, useState } from 'react';
import { X, CreditCard, Building2, ArrowLeft, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const { 
    cartItems, 
    getCartTotal, 
    orderFlowStep, 
    setOrderFlowStep,
    orderNumber,
    setOrderNumber,
    clearCart
  } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'online' | 'bank'>('online');

  // Generate order number when modal opens
  useEffect(() => {
    if (isOpen && !orderNumber) {
      setOrderNumber(`ORD-${Math.floor(1000 + Math.random() * 9000)}`);
    }
  }, [isOpen, orderNumber, setOrderNumber]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setOrderFlowStep('summary');
      setPaymentMethod('online');
    }
  }, [isOpen, setOrderFlowStep]);

  if (!isOpen) return null;

  const tax = getCartTotal() * 0.08;
  const total = getCartTotal() + tax;

  const handleProceedToPayment = () => {
    setOrderFlowStep('payment');
  };

  const handlePayOnline = () => {
    setOrderFlowStep('redirect');
    
    // Simulate redirect delay
    setTimeout(() => {
      setOrderFlowStep('disabled');
    }, 2000);
  };

  const handleContinueWithOrder = () => {
    setOrderFlowStep('confirmation');
    toast.success('Order placed successfully!');
  };

  const handleBackToShopping = () => {
    onClose();
    clearCart();
  };

  const renderOrderSummary = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Order Summary</h3>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="space-y-4 max-h-60 overflow-y-auto">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 line-clamp-1">{item.name}</h4>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
            </div>
            <span className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${getCartTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold text-gray-900 pt-2 border-t">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={onClose} className="flex-1">
          Cancel
        </Button>
        <Button onClick={handleProceedToPayment} className="flex-1 bg-blue-600 hover:bg-blue-700">
          Proceed to Payment
        </Button>
      </div>
    </div>
  );

  const renderPaymentOptions = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <button onClick={() => setOrderFlowStep('summary')} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-500" />
        </button>
        <h3 className="text-xl font-semibold text-gray-900">Payment Details</h3>
        <button onClick={onClose} className="ml-auto p-2 hover:bg-gray-100 rounded-full transition-colors">
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div>
        <p className="text-gray-600 mb-4">Please select your preferred payment method to complete your order.</p>
        
        <div className="space-y-3">
          <button
            onClick={() => setPaymentMethod('online')}
            className={`w-full flex items-center gap-4 p-4 border-2 rounded-xl transition-all ${
              paymentMethod === 'online' 
                ? 'border-blue-600 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              paymentMethod === 'online' ? 'bg-blue-600' : 'bg-gray-100'
            }`}>
              <CreditCard className={`w-6 h-6 ${paymentMethod === 'online' ? 'text-white' : 'text-gray-500'}`} />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Pay Online</div>
              <div className="text-sm text-gray-500">Secure payment via credit/debit card</div>
            </div>
          </button>

          <button
            onClick={() => setPaymentMethod('bank')}
            className={`w-full flex items-center gap-4 p-4 border-2 rounded-xl transition-all ${
              paymentMethod === 'bank' 
                ? 'border-blue-600 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              paymentMethod === 'bank' ? 'bg-blue-600' : 'bg-gray-100'
            }`}>
              <Building2 className={`w-6 h-6 ${paymentMethod === 'bank' ? 'text-white' : 'text-gray-500'}`} />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Bank Transfer</div>
              <div className="text-sm text-gray-500">Pay directly to our bank account</div>
            </div>
          </button>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between text-lg font-semibold text-gray-900 mb-4">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setOrderFlowStep('summary')} className="flex-1">
            Back
          </Button>
          <Button 
            onClick={paymentMethod === 'online' ? handlePayOnline : handleContinueWithOrder} 
            className="flex-1 bg-blue-600 hover:bg-blue-700"
          >
            {paymentMethod === 'online' ? 'Pay Online' : 'Continue with Order'}
          </Button>
        </div>
      </div>
    </div>
  );

  const renderRedirecting = () => (
    <div className="text-center py-8 space-y-6">
      <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Redirecting to payment gateway...</h3>
        <p className="text-gray-500">Please do not close this window</p>
      </div>
    </div>
  );

  const renderPaymentDisabled = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Payment Information</h3>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
        <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-amber-800 mb-1">Automatic online payment is currently disabled.</h4>
          <p className="text-amber-700 text-sm">Please place your order and contact our support team to complete the payment.</p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Order Number</span>
          <span className="font-medium text-gray-900">{orderNumber}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Total Amount</span>
          <span className="font-medium text-gray-900">${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm text-gray-600">Contact our support team:</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Email:</span>
            <a href="mailto:info@growththeoryllc.com" className="text-blue-600 hover:underline">info@growththeoryllc.com</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Phone:</span>
            <a href="tel:+17759802622" className="text-blue-600 hover:underline">+1 775 980 2622</a>
          </div>
        </div>
      </div>

      <Button onClick={handleContinueWithOrder} className="w-full bg-blue-600 hover:bg-blue-700">
        Continue with Order
      </Button>
    </div>
  );

  const renderOrderConfirmation = () => (
    <div className="text-center py-4 space-y-6">
      <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You For Your Order!</h3>
        <p className="text-gray-600">Your order has been successfully placed.</p>
      </div>

      <div className="bg-gray-50 rounded-xl p-6 text-left space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-500">Order Number:</span>
          <span className="font-semibold text-gray-900">{orderNumber}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Total Amount:</span>
          <span className="font-semibold text-gray-900">${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Payment Status:</span>
          <span className="font-semibold text-amber-600">Pending</span>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-4 text-left">
        <h4 className="font-semibold text-blue-900 mb-2">Payment Instructions</h4>
        <p className="text-sm text-blue-700 mb-3">Please contact our support team to complete your payment:</p>
        <div className="space-y-1 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-blue-600">Email:</span>
            <a href="mailto:info@growththeoryllc.com" className="text-blue-800 hover:underline font-medium">info@growththeoryllc.com</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-600">Phone:</span>
            <a href="tel:+17759802622" className="text-blue-800 hover:underline font-medium">+1 775 980 2622</a>
          </div>
        </div>
        <p className="text-sm text-blue-600 mt-3">Please mention your order number when contacting support.</p>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={onClose} className="flex-1">
          Back
        </Button>
        <Button onClick={handleBackToShopping} className="flex-1 bg-blue-600 hover:bg-blue-700">
          Continue Shopping
        </Button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 animate-in fade-in zoom-in duration-300">
        {orderFlowStep === 'summary' && renderOrderSummary()}
        {orderFlowStep === 'payment' && renderPaymentOptions()}
        {orderFlowStep === 'redirect' && renderRedirecting()}
        {orderFlowStep === 'disabled' && renderPaymentDisabled()}
        {orderFlowStep === 'confirmation' && renderOrderConfirmation()}
      </div>
    </div>
  );
}
