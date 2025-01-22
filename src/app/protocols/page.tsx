import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import CustomDataTable from "@/components/CustomDataTable";

interface DataItem {
  id: number;
  name: string;
  age: number;
}

const Protocols = () => {
  const data: DataItem[] = [
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 34 },
    { id: 3, name: "Alice Johnson", age: 24 },
  ];

  const columns: { field: keyof DataItem; header: string }[] = [
    { field: "id", header: "ID" },
    { field: "name", header: "Name" },
    { field: "age", header: "Age" },
  ];

  return (
    <div className="p-4">
      <h2>Data Grid One</h2>
      {/* <DataTable value={data} responsiveLayout="scroll" stripedRows>
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="age" header="Age"></Column>
      </DataTable> */}
      <CustomDataTable data={data} columns={columns} />
    </div>
  );
};

export default Protocols;
