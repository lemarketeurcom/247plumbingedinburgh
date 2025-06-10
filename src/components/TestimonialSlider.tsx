import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Morningside, Edinburgh',
    text: 'Absolutely fantastic service! They fixed our boiler issue quickly and professionally. The plumber was friendly, knowledgeable and explained everything clearly. Highly recommend!',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Thompson',
    location: 'Leith, Edinburgh',
    text: 'Called them for an emergency leak at 10pm and they arrived within the hour. Efficient, professional and reasonably priced considering it was an emergency call-out. Would use again!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Wilson',
    location: 'Stockbridge, Edinburgh',
    text: 'We had our bathroom completely renovated and the results are stunning. The team was professional from start to finish, kept to the timeline, and the workmanship is excellent.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Michael Clark',
    location: 'Portobello, Edinburgh',
    text: 'Used Edinburgh Plumbing Trust for a boiler installation. They provided excellent advice on the best model for our home and the installation was quick and tidy. Great aftercare service too.',
    rating: 4,
  },
  {
    id: 5,
    name: 'Jennifer Adams',
    location: 'Newington, Edinburgh',
    text: 'I had a persistent drain blockage that two other companies failed to fix. The plumber quickly identified the issue and resolved it permanently. Excellent service and fair pricing.',
    rating: 5,
  },
];

const TestimonialSlider: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        size={18} 
        className={index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
      />
    ));
  };

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="testimonial-slider py-8"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="bg-white rounded-lg shadow-card p-6 h-full flex flex-col">
            <div className="text-primary-500 mb-4">
              <Quote size={36} className="opacity-20" />
            </div>
            <p className="text-gray-600 mb-4 flex-grow">{testimonial.text}</p>
            <div className="mt-auto">
              <div className="flex mb-2">
                {renderStars(testimonial.rating)}
              </div>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;