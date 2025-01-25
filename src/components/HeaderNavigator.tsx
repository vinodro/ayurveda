"use client";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";

export default function HeaderNavigator() {
    const router = useRouter();
    return (
    <div className="flex gap-4">
    <Button
      label="Home"
      icon="pi pi-arrow-right"
      className="p-button-primary"
      onClick={() => router.push("/")}
    />
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
  );
}
