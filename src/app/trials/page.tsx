"use client";

import CustomDataTable from "@/components/CustomDataTable";
import illness from "@/static/illness.json";
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

  const columns: { field: keyof TrialItem; header: string }[] = [
    { field: "patientId", header: "Patient Id" },
    { field: "patientName", header: "Patient Name" },
    { field: "currentScore", header: "Current Score" },
    { field: "targetScore", header: "Target Score" },
    { field: "report", header: "Report" },
  ];

  const rowGroupHeaderTemplate = (data: any) => {
    return <h1 className="text-xl font-medium">{data.health_issue}</h1>;
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-medium">Trials</h1>
      <CustomDataTable
        data={data}
        columns={columns}
        rowGroupMode="subheader"
        rowGroupHeaderTemplate={rowGroupHeaderTemplate}
      />
    </div>
  );
};

export default Trials;
