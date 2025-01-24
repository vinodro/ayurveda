"use client";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className="relative h-screen">
      <div className="flex flex-column justify-content-center items-center h-screen p-4">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="italic mb-4">"This platform has revolutionized how we manage our clinical trials. The efficiency gains are remarkable."</p>
            <div className="font-semibold">Dr. Sarah Johnson</div>
            <div className="text-sm text-gray-600">Principal Investigator, Mayo Clinic</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="italic mb-4">"The protocol management system is intuitive and has streamlined our entire research process."</p>
            <div className="font-semibold">Mark Thompson</div>
            <div className="text-sm text-gray-600">Clinical Research Coordinator</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="italic mb-4">"An essential tool for modern clinical research. The support team is exceptional."</p>
            <div className="font-semibold">Dr. Emily Chen</div>
            <div className="text-sm text-gray-600">Research Director, Stanford Medicine</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
