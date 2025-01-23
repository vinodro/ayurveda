import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import CustomDataTable from "@/components/CustomDataTable";
import jsonData from "@/static/data.json";

interface DataItem {
  id: number;
  health_issue: string;
  decoctions: string;
  millets: string;
}

const Protocols = () => {
  const data: DataItem[] = jsonData;

  const columns: { field: keyof DataItem; header: string }[] = [
    { field: "id", header: "ID" },
    { field: "health_issue", header: "Health Issue" },
    { field: "decoctions", header: "Decoctions" },
    { field: "millets", header: "Millets" },
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
