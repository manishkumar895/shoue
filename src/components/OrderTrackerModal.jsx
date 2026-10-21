import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  X, 
  Package, 
  Search, 
  CheckCircle2, 
  Clock, 
  Truck, 
  ShieldCheck, 
  MapPin,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function OrderTrackerModal() {
  const {
    isOrderTrackerOpen,
    setIsOrderTrackerOpen,
    orders,
    formatPrice
  } = useShop();

  const [inputCode, setInputCode] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(orders[0] || null);

  if (!isOrderTrackerOpen) return null;

  const handleLookup = (e) => {
    e.preventDefault();
    const query = inputCode.trim().toUpperCase();
    const found = orders.find(
      (o) => o.orderId.toUpperCase() === query || o.trackingCode.toUpperCase() === query
    );

    if (found) {
      setSelectedOrder(found);
    } else {
      // Mock demonstration order for testing
      setSelectedOrder({
        orderId: query || 'SV-884920',
        date: 'Today',
        status: 'In Transit',
        trackingStep: 3,
        carrier: 'FedEx Sneaker Priority Air',
        trackingCode: 'FDX-' + Math.random().toString(36).substring(2, 9).toUpperCase(),
        estimatedDelivery: 'Tomorrow by 7:00 PM',
        items: [
          {
            name: 'Nike ZoomX Vaporfly NEXT% 3',
            size: '10.5',
            color: 'Electric Crimson',
            price: 259.99,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80'
          }
        ],
        customer: {
          address: '742 Evergreen Terrace',
          city: 'Springfield'
        }
      });
    }
  };

  const steps = [
    { label: 'Order Confirmed', time: '10:14 AM', done: true, desc: 'Payment verified and order accepted into system' },
    { label: 'Authenticity Inspected', time: '11:45 AM', done: true, desc: 'SoleVault physical verification & NFC NFC tag applied' },
    { label: 'Package Dispatched', time: '02:30 PM', done: (selectedOrder?.trackingStep || 1) >= 3, desc: 'Handed to FedEx Express facility' },
    { label: 'In Transit / Sorting', time: 'In Progress', done: (selectedOrder?.trackingStep || 1) >= 4, desc: 'En route to regional distribution hub' },
    { label: 'Out for Delivery', time: 'Pending', done: (selectedOrder?.trackingStep || 1) >= 5, desc: 'Courier van loaded for final doorstep drop' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/50">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-orange-500" />
            <h2 className="text-base font-black text-white uppercase tracking-wider font-['Space_Grotesk']">
              Live Sneaker Tracker
            </h2>
          </div>
          <button
            onClick={() => setIsOrderTrackerOpen(false)}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Lookup */}
        <div className="p-6 border-b border-neutral-800/80 bg-neutral-900/30">
          <form onSubmit={handleLookup} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Enter Order ID (e.g. SV-2026-9812 or FDX-99)"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white uppercase font-mono placeholder-neutral-500 focus:outline-none focus:border-orange-500"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-md shadow-orange-600/30 transition-all cursor-pointer"
            >
              Track
            </button>
          </form>

          {/* Quick list of past orders */}
          {orders.length > 0 && (
            <div className="mt-3 flex items-center gap-2 text-xs overflow-x-auto">
              <span className="text-neutral-500 text-[11px]">Your Orders:</span>
              {orders.map((o) => (
                <button
                  key={o.orderId}
                  onClick={() => setSelectedOrder(o)}
                  className={`px-2.5 py-1 rounded-lg border font-mono text-[11px] transition-all ${
                    selectedOrder?.orderId === o.orderId
                      ? 'border-orange-500 bg-orange-500/10 text-orange-400 font-bold'
                      : 'border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  {o.orderId}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Tracking Details */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {selectedOrder ? (
            <div className="space-y-6">
              
              {/* Order Status Hero Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-800/80 border border-neutral-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Shipment Status
                  </span>
                  <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    On Schedule
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-black text-white font-['Space_Grotesk']">
                      Arriving {selectedOrder.estimatedDelivery}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5 flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-orange-400" />
                      Carrier: {selectedOrder.carrier} • Tracking: <span className="font-mono text-white">{selectedOrder.trackingCode}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress Milestones Timeline */}
              <div className="space-y-4 pl-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Telemetry Milestones
                </h4>

                <div className="relative border-l-2 border-neutral-800 ml-4 space-y-6 pb-2">
                  {steps.map((st, i) => (
                    <div key={i} className="relative pl-6">
                      <span
                        className={`absolute -left-[9px] top-0.5 w-4 h-4 rounded-full border-2 transition-all ${
                          st.done
                            ? 'bg-orange-500 border-orange-400 ring-4 ring-orange-500/20'
                            : 'bg-neutral-950 border-neutral-700'
                        }`}
                      />
                      <div className="flex items-center justify-between text-xs">
                        <span className={`font-bold ${st.done ? 'text-white' : 'text-neutral-500'}`}>
                          {st.label}
                        </span>
                        <span className="text-[11px] text-neutral-500 font-mono">{st.time}</span>
                      </div>
                      <p className="text-[11px] text-neutral-400 mt-0.5">{st.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Items in this order */}
              {selectedOrder.items && selectedOrder.items.length > 0 && (
                <div className="pt-4 border-t border-neutral-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                    Items in Package ({selectedOrder.items.length})
                  </h4>
                  <div className="space-y-2">
                    {selectedOrder.items.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/40 border border-neutral-800 text-xs">
                        <div className="flex items-center gap-3">
                          <img src={item.image} alt={item.name} className="w-10 h-10 object-contain rounded-lg bg-neutral-950 p-1 border border-neutral-800" />
                          <div>
                            <span className="font-bold text-white block truncate max-w-xs">{item.name}</span>
                            <span className="text-neutral-400 text-[11px]">Size: US {item.size} • {item.color}</span>
                          </div>
                        </div>
                        <span className="font-mono font-bold text-white">{formatPrice(item.price)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ) : (
            <div className="text-center py-12 text-neutral-400 text-xs">
              Enter your tracking code or order number above to view real-time delivery telemetry.
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
