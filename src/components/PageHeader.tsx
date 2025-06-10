import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  breadcrumbs?: {
    name: string;
    path: string;
  }[];
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  breadcrumbs = [],
  backgroundImage = 'https://images.pexels.com/photos/1104365/pexels-photo-1104365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
}) => {
  return (
    <section 
      className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary-700 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(15, 76, 129, 0.85), rgba(15, 76, 129, 0.95)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        
        {breadcrumbs.length > 0 && (
          <div className="flex items-center justify-center text-primary-100">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={index}>
                <ChevronRight size={16} className="mx-2" />
                {index === breadcrumbs.length - 1 ? (
                  <span>{breadcrumb.name}</span>
                ) : (
                  <Link 
                    to={breadcrumb.path}
                    className="hover:text-white transition-colors"
                  >
                    {breadcrumb.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
      
      {/* Bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white opacity-10 animate-water-wave"></div>
    </section>
  );
};

export default PageHeader;