import { MapPin, Navigation, Compass, ExternalLink } from "lucide-react";

export default function GoogleMaps() {
  const address = "Road, Block I, Sector 21A, Noida, Uttar Pradesh 201307, India";
  const mapsSearchUrl = "https://maps.google.com/?q=Body+By+Inches+Gym+Sector+21A+Noida&ll=28.5990337,77.3457704";

  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#FAF9F9] border border-gray-200/50 rounded-[32px] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          
          {/* Map Left Side Details bar */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between h-full space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-wider text-gray-500 uppercase">
                <Compass className="w-3.5 h-3.5 text-amber-500" />
                <span>LOCATION MODULE</span>
              </div>
              
              <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 tracking-tight mb-4">
                Find Your Gym Floor
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Body By Inches is situated at a highly accessible, premium location in Sector 21A, Noida. 
                Equipped with covered, monitored safety parking spots and adjacent to key landmark intersections.
              </p>
              
              <div className="space-y-4 text-sm">
                <div className="flex gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-gray-950">Sector 21A HQ Address:</span>
                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      Road, Block I, Sector 21A, Noida, Uttar Pradesh 201307, India
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 text-gray-700">
                  <Navigation className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-gray-950">Coordinates & Land:</span>
                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                      Latitude: 28.5990337, Longitude: 77.3457704 • Located near Block I, Sector 21A.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Open Link Map Callout */}
            <div className="pt-6 border-t border-gray-200/60">
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-amber-500 hover:text-black hover:scale-101 text-white font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-xl transition-all duration-300 w-full justify-center shadow-md cursor-pointer"
              >
                <span>Navigate on Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Actual Maps IFrame on the Right Side */}
          <div className="lg:col-span-7 min-h-[350px] lg:min-h-[480px] bg-gray-100 relative group">
            {/* Embed code pointing beautifully to Noida Sector 21A region coordinates */}
            <iframe
              title="Body By Inches Sector 21A Noida Map Location"
              src="https://maps.google.com/maps?q=28.5990337,77.3457704&z=15&output=embed"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 pointer-events-auto"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
