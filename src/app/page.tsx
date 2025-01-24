"use client";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";
import { Carousel } from 'primereact/carousel';

const Home = () => {
  const router = useRouter();

  const testimonials = [
    {
      comment: "This platform has revolutionized how we manage our clinical trials. The efficiency gains are remarkable.",
      name: "Dr. Sarah Johnson",
      role: "Principal Investigator, Mayo Clinic"
    },
    {
      comment: "The protocol management system is intuitive and has streamlined our entire research process.",
      name: "Mark Thompson",
      role: "Clinical Research Coordinator"
    },
    {
      comment: "An essential tool for modern clinical research. The support team is exceptional.",
      name: "Dr. Emily Chen",
      role: "Research Director, Stanford Medicine"
    },
    {
      comment: "This platform has revolutionized how we manage our clinical trials. The efficiency gains are remarkable.",
      name: "Dr. Sarah Johnson",
      role: "Principal Investigator, Mayo Clinic"
    },
    {
      comment: "The protocol management system is intuitive and has streamlined our entire research process.",
      name: "Mark Thompson",
      role: "Clinical Research Coordinator"
    },
    {
      comment: "An essential tool for modern clinical research. The support team is exceptional.",
      name: "Dr. Emily Chen",
      role: "Research Director, Stanford Medicine"
    }
  ];

  const testimonialTemplate = (testimonial: any) => {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <p className="italic mb-4">"{testimonial.comment}"</p>
        <div className="font-semibold">{testimonial.name}</div>
        <div className="text-sm text-gray-600">{testimonial.role}</div>
      </div>
    );
  };

  return (
    <div className="relative h-screen">
      <div className="flex flex-column justify-content-center items-center h-screen p-4">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="w-full max-w-6xl">
          <Carousel 
            value={testimonials} 
            numVisible={3} 
            numScroll={1} 
            className="custom-carousel" 
            itemTemplate={testimonialTemplate}
            showNavigators={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
