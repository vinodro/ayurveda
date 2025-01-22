import CustomDataTable from "@/components/CustomDataTable";

interface TrialItem {
  id: number;
  product: string;
  price: number;
}

const Trials = () => {
  const data: TrialItem[] = [
    { id: 1, product: "Laptop", price: 1200 },
    { id: 2, product: "Phone", price: 800 },
    { id: 3, product: "Tablet", price: 600 },
  ];

  const columns: { field: keyof TrialItem; header: string }[] = [
    { field: "id", header: "ID" },
    { field: "product", header: "Product" },
    { field: "price", header: "Price" },
  ];

  return (
    <div className="p-4">
      <h2>Data Grid Two</h2>
      <CustomDataTable data={data} columns={columns} />
    </div>
  );
};

export default Trials;
