import React from 'react';
import { Property } from '../types';
import { Bath, BedDouble, Verified } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-primary/10 hover:shadow-2xl hover:border-primary/20 transition-all group">
      <div className="relative h-72">
        <img
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={property.image}
        />
        {property.isVerified && (
          <div className="absolute top-6 left-6 bg-forest text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
            <span className="material-icons text-sm"><Verified/></span> VERIFIED
          </div>
        )}
        <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold shadow-xl text-neutral-dark">
          {property.location}
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2 text-neutral-dark group-hover:text-forest transition-colors font-heading">
          {property.title}
        </h3>
        <p className="text-3xl font-bold text-primary mb-6 font-heading">
          ₦{property.priceNGN.toLocaleString()}{' '}
          <span className="text-sm text-neutral-medium font-normal ml-2">
            (${property.priceUSD.toLocaleString()})
          </span>
        </p>

        <div className="flex items-center justify-between border-t border-primary/10 pt-6">
          <div className="flex flex-col gap-2 text-neutral-medium text-sm font-medium">
            <span className="flex items-center gap-2">
              <span className="material-icons text-forest/70 text-lg"><BedDouble/></span> {property.beds}
            </span>
            <span className="flex items-center gap-2">
              <span className="material-icons text-forest/70 text-lg"><Bath/></span> {property.baths}
            </span>
            <span className="flex items-center gap-2">{property.area} sqm
            </span>
          </div>

          <div className="flex gap-3">
            <button
              className="p-3 border border-primary/25 rounded-xl text-primary hover:bg-primary/10 transition-colors"
              title="View 3D Tour"
            >
              <span className="material-icons">Request virtual Tour</span>
            </button>
            <button className="px-6 py-3 bg-forest/10 text-forest font-bold rounded-xl hover:bg-forest hover:text-white transition-all">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
