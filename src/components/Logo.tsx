import React from 'react';
import { Wrench } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Wrench size={36} className="text-primary-500 mr-2" />
      <div>
        <div className="text-lg font-heading font-bold text-primary-500 leading-tight">
          Edinburgh
        </div>
        <div className="text-sm font-heading font-medium text-secondary-500 leading-tight">
          Plumbing Trust
        </div>
      </div>
    </div>
  );
};

export default Logo;