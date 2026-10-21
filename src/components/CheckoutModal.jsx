import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import confetti from 'canvas-confetti';
import { 
  X, 
  CreditCard, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Lock, 
  ArrowRight, 
  Package, 
  Printer, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartTotal,
    cartSubtotal,
    discountAmount,
    standardShipping,
    estimatedTax,
    formatPrice,
    placeOrder,
    activeOrder,
    setActiveOrder,
    setIsOrderTrackerOpen
  } = useShop();

  const [step, setStep] = useState('form'); // 'form' | 'success'

  // Shipping Form State
  const [formData, setFormData] = useState({
    fullName: 'Alex Reynolds',
    email: 'alex.reynolds@example.com',
    phone: '+1 (555) 234-8900',
    address: '742 Evergreen Terrace',
    city: 'Springfield',
    state: 'OR',
    zip: '97477',
    country: 'United States',
    shippingSpeed: 'standard' // 'standard' or 'express'
  });

  // Payment Form State
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' | 'apple' | 'cod'
  const [cardData, setCardData] = useState({
    cardNumber: '4242 •••• •••• 4242',
    cardHolder: 'ALEX REYNOLDS',
    expiry: '08/28',
    cvv: '882'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen && !activeOrder) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 250);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const order = placeOrder({
        ...formData,
        paymentMethod
      });
      setIsSubmitting(false);
      setStep('success');
      triggerConfetti();
    }, 1200);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setActiveOrder(null);
    setStep('form');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/50">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-orange-500" />
            <h2 className="text-base font-black text-white uppercase tracking-wider font-['Space_Grotesk']">
              {step === 'success' ? 'Order Confirmed!' : 'Secure Checkout'}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          
          {step === 'success' && activeOrder ? (
            /* Order Success View */
            <div className="text-center py-6 max-w-lg mx-auto space-y-6">
              <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block mb-1">
                  PAYMENT SUCCESSFUL
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-['Space_Grotesk']">
                  Thank You for Your Order!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2">
                  We've received your order and our sneaker authentication team is preparing your kicks for dispatch.
                </p>
              </div>

              {/* Order Info Card */}
              <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-left space-y-3 text-xs">
                <div className="flex justify-between pb-2 border-b border-neutral-800">
                  <span className="text-neutral-400 font-medium">Order Number:</span>
                  <span className="text-white font-mono font-bold">{activeOrder.orderId}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-neutral-800">
                  <span className="text-neutral-400 font-medium">Tracking Code:</span>
                  <span className="text-orange-400 font-mono font-bold">{activeOrder.trackingCode}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-neutral-800">
                  <span className="text-neutral-400 font-medium">Estimated Arrival:</span>
                  <span className="text-emerald-400 font-bold">{activeOrder.estimatedDelivery}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400 font-medium">Delivering To:</span>
                  <span className="text-white font-medium text-right truncate max-w-[200px]">
                    {activeOrder.customer.address}, {activeOrder.customer.city}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => {
                    handleClose();
                    setIsOrderTrackerOpen(true);
                  }}
                  className="flex-1 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-600/30 cursor-pointer"
                >
                  <Package className="w-4 h-4" />
                  <span>Track Live Package</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="py-3 px-5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Receipt</span>
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form View */
            <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Customer & Payment Details */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 1. Contact & Shipping Address */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-orange-400 mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px]">1</span>
                    Shipping Destination
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="sm:col-span-2">
                      <label className="text-neutral-400 block mb-1">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="text-neutral-400 block mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="text-neutral-400 block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-neutral-400 block mb-1">Street Address</label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="text-neutral-400 block mb-1">City</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-neutral-400 block mb-1">State / Prov</label>
                        <input
                          type="text"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label className="text-neutral-400 block mb-1">ZIP / Postal</label>
                        <input
                          type="text"
                          name="zip"
                          required
                          value={formData.zip}
                          onChange={handleInputChange}
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Payment Method */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-orange-400 mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px]">2</span>
                    Payment Method
                  </h3>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                        paymentMethod === 'card' ? 'border-orange-500 bg-orange-500/10 text-white' : 'border-neutral-800 bg-neutral-900 text-neutral-400'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Credit Card</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('apple')}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                        paymentMethod === 'apple' ? 'border-orange-500 bg-orange-500/10 text-white' : 'border-neutral-800 bg-neutral-900 text-neutral-400'
                      }`}
                    >
                      <Zap className="w-4 h-4 text-amber-400" />
                      <span>Instant Pay</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                        paymentMethod === 'cod' ? 'border-orange-500 bg-orange-500/10 text-white' : 'border-neutral-800 bg-neutral-900 text-neutral-400'
                      }`}
                    >
                      <Truck className="w-4 h-4" />
                      <span>Pay on Arrival</span>
                    </button>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3 text-xs">
                      {/* Virtual Card Preview */}
                      <div className="p-4 rounded-xl bg-gradient-to-tr from-neutral-900 via-neutral-800 to-zinc-900 border border-neutral-700 shadow-xl text-white font-mono space-y-3">
                        <div className="flex justify-between items-center text-[11px] text-neutral-400">
                          <span>SOLEVAULT PRIVILEGE</span>
                          <span className="font-bold text-orange-400">VISA DEBIT</span>
                        </div>
                        <div className="text-base tracking-widest text-neutral-200">
                          {cardData.cardNumber}
                        </div>
                        <div className="flex justify-between text-[10px]">
                          <div>
                            <span className="text-neutral-500 block">CARD HOLDER</span>
                            <span className="font-bold">{cardData.cardHolder}</span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block">EXPIRES</span>
                            <span className="font-bold">{cardData.expiry}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="col-span-2">
                          <label className="text-neutral-400 block mb-1">Card Number</label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={cardData.cardNumber}
                            onChange={handleCardChange}
                            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-orange-500"
                          />
                        </div>
                        <div>
                          <label className="text-neutral-400 block mb-1">Expiry (MM/YY)</label>
                          <input
                            type="text"
                            name="expiry"
                            value={cardData.expiry}
                            onChange={handleCardChange}
                            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-orange-500"
                          />
                        </div>
                        <div>
                          <label className="text-neutral-400 block mb-1">CVV</label>
                          <input
                            type="password"
                            maxLength={4}
                            name="cvv"
                            value={cardData.cvv}
                            onChange={handleCardChange}
                            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-orange-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'apple' && (
                    <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-center text-xs text-neutral-400">
                      You will authenticate seamlessly with Touch ID / Face ID upon submission.
                    </div>
                  )}

                  {paymentMethod === 'cod' && (
                    <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-center text-xs text-neutral-400">
                      Pay cash or scan courier QR upon arrival at your doorstep. Verified contact required.
                    </div>
                  )}
                </div>

              </div>

              {/* Right Column: Order Summary */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-white">
                    Order Summary ({cart.length} items)
                  </h3>

                  {/* Cart preview list */}
                  <div className="max-h-52 overflow-y-auto space-y-3 pr-1">
                    {cart.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs">
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-contain bg-neutral-950 rounded-lg p-1 border border-neutral-800" />
                        <div className="flex-1 truncate">
                          <span className="font-bold text-white block truncate">{item.name}</span>
                          <span className="text-neutral-400 text-[11px]">Size: US {item.size} • Qty {item.quantity}</span>
                        </div>
                        <span className="font-mono font-bold text-white">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Calculations */}
                  <div className="pt-3 border-t border-neutral-800 space-y-1.5 text-xs text-neutral-400">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-white font-mono">{formatPrice(cartSubtotal)}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Discount</span>
                        <span className="font-mono">-{formatPrice(discountAmount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-white font-mono">
                        {standardShipping === 0 ? <span className="text-emerald-400 font-bold">FREE</span> : formatPrice(standardShipping)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sales Tax</span>
                      <span className="text-white font-mono">{formatPrice(estimatedTax)}</span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-neutral-800">
                      <span>Total Amount</span>
                      <span className="text-orange-400 font-black font-mono">
                        {formatPrice(cartTotal)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting || cart.length === 0}
                  className="w-full py-4 rounded-xl bg-orange-600 hover:bg-orange-500 disabled:opacity-50 text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-orange-600/30 flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Authenticating & Processing...</span>
                    </div>
                  ) : (
                    <>
                      <span>Authorize Payment ({formatPrice(cartTotal)})</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="text-center text-[11px] text-neutral-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 inline mr-1" />
                  Your payment is secured with end-to-end tokenization and fraud detection.
                </div>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
