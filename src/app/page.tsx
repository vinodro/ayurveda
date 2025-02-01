"use client";
import { useRouter } from "next/navigation";
import { Carousel } from "primereact/carousel";
import { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const testimonials = [
    {
      comment:
        "This platform has revolutionized how we manage our clinical trials. The efficiency gains are remarkable.",
      name: "Dr. Sarah Johnson",
      role: "Principal Investigator, Mayo Clinic",
    },
    {
      comment:
        "The protocol management system is intuitive and has streamlined our entire research process.",
      name: "Mark Thompson",
      role: "Clinical Research Coordinator",
    },
    {
      comment:
        "An essential tool for modern clinical research. The support team is exceptional.",
      name: "Dr. Emily Chen",
      role: "Research Director, Stanford Medicine",
    },
    {
      comment:
        "This platform has revolutionized how we manage our clinical trials. The efficiency gains are remarkable.",
      name: "Dr. Sarah Johnson",
      role: "Principal Investigator, Mayo Clinic",
    },
    {
      comment:
        "The protocol management system is intuitive and has streamlined our entire research process.",
      name: "Mark Thompson",
      role: "Clinical Research Coordinator",
    },
    {
      comment:
        "An essential tool for modern clinical research. The support team is exceptional.",
      name: "Dr. Emily Chen",
      role: "Research Director, Stanford Medicine",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div
      className="relative flex items-center justify-content-center"
      style={{ height: "calc(100vh - 180px)" }}
    >
      <div className="flex flex-column justify-content-center items-center p-4">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="w-full max-w-6xl">
          <Carousel
            value={testimonials}
            numVisible={isMobile ? 1 : 3}
            numScroll={1}
            className="custom-carousel"
            itemTemplate={testimonialTemplate}
            showNavigators={true}
            circular
            autoplayInterval={3000}
            responsiveOptions={[
              { breakpoint: "1024px", numVisible: 3, numScroll: 1 },
              { breakpoint: "768px", numVisible: 2, numScroll: 1 },
              { breakpoint: "560px", numVisible: 1, numScroll: 1 },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
