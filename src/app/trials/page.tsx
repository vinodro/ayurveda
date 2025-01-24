"use client";

import CustomDataTable from "@/components/CustomDataTable";
import illness from "@/static/illness.json";
import { FileUpload } from "primereact/fileupload";

interface TrialItem {
  patientId: number;
  patientName: string;
  currentScore: number;
  targetScore: number;
  report: string;
  health_issue: string;
}

const Trials = () => {
  const data: TrialItem[] = illness;

  const columns: (
    | { field: keyof TrialItem; header: string }
    | { body: (rowData: TrialItem) => React.ReactNode; header: string }
  )[] = [
    { field: "patientId", header: "Patient Id" },
    { field: "patientName", header: "Patient Name" },
    { field: "currentScore", header: "Current Score" },
    { field: "targetScore", header: "Target Score" },
    { field: "report", header: "Report" },
    {
      body: (rowData: TrialItem) => (
        <FileUpload
          mode="basic"
          chooseLabel="Upload"
          className="p-button-sm"
          onUpload={(e) => handleUpload(e, rowData)}
          auto
          customUpload
          uploadHandler={(e) => {
            const file = e.files[0];
            handleUpload(file, rowData);
            e.options.clear();
          }}
        />
      ),
      header: "",
    },
  ];

  const rowGroupHeaderTemplate = (data: any) => {
    return <h1 className="text-xl font-medium">{data.health_issue}</h1>;
  };

  const handleUpload = (e: any, rowData: TrialItem) => {
    const file = e.files ? e.files[0] : e;
    console.log("Uploading file for patient:", rowData.patientId, file);
    // Add your file upload logic here
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-medium">Trials</h1>
      <CustomDataTable
        data={data}
        columns={columns}
        rowGroupMode="subheader"
        rowGroupHeaderTemplate={rowGroupHeaderTemplate}
        sortField="id"
        sortOrder={1}
        defaultSortOrder={1}
      />
    </div>
  );
};

export default Trials;
