import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Ruler, Footprints, Check } from 'lucide-react';

const SIZE_CHART = [
  { usMen: '6.0', usWomen: '7.5', uk: '5.5', eu: '38.5', cm: '24.0' },
  { usMen: '6.5', usWomen: '8.0', uk: '6.0', eu: '39.0', cm: '24.5' },
  { usMen: '7.0', usWomen: '8.5', uk: '6.0', eu: '40.0', cm: '25.0' },
  { usMen: '7.5', usWomen: '9.0', uk: '6.5', eu: '40.5', cm: '25.5' },
  { usMen: '8.0', usWomen: '9.5', uk: '7.0', eu: '41.0', cm: '26.0' },
  { usMen: '8.5', usWomen: '10.0', uk: '7.5', eu: '42.0', cm: '26.5' },
  { usMen: '9.0', usWomen: '10.5', uk: '8.0', eu: '42.5', cm: '27.0' },
  { usMen: '9.5', usWomen: '11.0', uk: '8.5', eu: '43.0', cm: '27.5' },
  { usMen: '10.0', usWomen: '11.5', uk: '9.0', eu: '44.0', cm: '28.0' },
  { usMen: '10.5', usWomen: '12.0', uk: '9.5', eu: '44.5', cm: '28.5' },
  { usMen: '11.0', usWomen: '12.5', uk: '10.0', eu: '45.0', cm: '29.0' },
  { usMen: '11.5', usWomen: '13.0', uk: '10.5', eu: '45.5', cm: '29.5' },
  { usMen: '12.0', usWomen: '13.5', uk: '11.0', eu: '46.0', cm: '30.0' },
  { usMen: '13.0', usWomen: '14.5', uk: '12.0', eu: '47.5', cm: '31.0' }
];

export default function SizeGuideModal() {
  const { isSizeGuideOpen, setIsSizeGuideOpen } = useShop();

  if (!isSizeGuideOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-3xl bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/50">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-orange-500" />
            <h2 className="text-base font-black text-white uppercase tracking-wider font-['Space_Grotesk']">
              International Sneaker Size Conversion
            </h2>
          </div>
          <button
            onClick={() => setIsSizeGuideOpen(false)}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Fit Tip Banner */}
          <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-xs text-neutral-300 space-y-1">
            <span className="font-bold text-orange-400 uppercase tracking-wider block">
              Pro Athlete Fit Advisory
            </span>
            <p>
              • <strong>Running Super-Shoes (Nike ZoomX, Vaporfly):</strong> If you plan on racing 10K+ distances or have a wider foot, we advise going half a size up to allow for natural foot swelling and toe splay.
            </p>
            <p>
              • <strong>Retro Basketball & Streetwear (Jordan 1, Samba):</strong> These silhouettes run True To Size (TTS).
            </p>
          </div>

          {/* Sizing Table */}
          <div className="overflow-x-auto rounded-xl border border-neutral-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-900 text-neutral-400 uppercase font-bold text-[11px] border-b border-neutral-800">
                <tr>
                  <th className="py-3 px-4">US Men</th>
                  <th className="py-3 px-4">US Women</th>
                  <th className="py-3 px-4">UK</th>
                  <th className="py-3 px-4">EU</th>
                  <th className="py-3 px-4">Foot Length (CM)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900 text-neutral-200 font-mono">
                {SIZE_CHART.map((row) => (
                  <tr key={row.usMen} className="hover:bg-neutral-900/50 transition-colors">
                    <td className="py-2.5 px-4 font-bold text-orange-400">{row.usMen}</td>
                    <td className="py-2.5 px-4">{row.usWomen}</td>
                    <td className="py-2.5 px-4">{row.uk}</td>
                    <td className="py-2.5 px-4">{row.eu}</td>
                    <td className="py-2.5 px-4 text-neutral-400">{row.cm} cm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Foot Measurement Guide */}
          <div className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-2 text-xs text-neutral-300">
            <h4 className="font-bold text-white flex items-center gap-2">
              <Footprints className="w-4 h-4 text-orange-400" />
              How to Measure Your Foot Length Accurately:
            </h4>
            <ol className="list-decimal list-inside space-y-1 text-neutral-400 pl-1">
              <li>Place a sheet of paper on the floor against a flat wall.</li>
              <li>Stand on the paper with your heel firmly touching the wall behind you.</li>
              <li>Mark the tip of your longest toe on the paper with a pencil.</li>
              <li>Measure the exact distance in centimeters (CM) from the edge of the paper to the marked pencil line.</li>
            </ol>
          </div>

        </div>

      </div>

    </div>
  );
}
