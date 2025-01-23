"use client";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className="flex flex-column justify-content-center items-center h-screen">
      <div>Welcome to the Home Page</div>
      <div className="flex gap-4 p-4">
        <Button
          label="Protocols"
          icon="pi pi-arrow-right"
          className="p-button-primary"
          onClick={() => router.push("/protocols")}
        />
        <Button
          label="Trials"
          icon="pi pi-arrow-right"
          className="p-button-success"
          onClick={() => router.push("/trials")}
        />
      </div>
    </div>
  );
};

export default Home;
