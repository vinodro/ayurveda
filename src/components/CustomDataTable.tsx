"use client";

import React from "react";
import {
  DataTable,
  DataTableProps,
  DataTableValueArray,
} from "primereact/datatable";
import { Column } from "primereact/column";

interface CustomDataTableProps<T extends object>
  extends Omit<DataTableProps<T[]>, "value" | "onSelectionChange"> {
  data: T[];
  columns: { field: keyof T; header: string; sortable?: boolean }[];
  selection?: T[];
  onPageChange?: (e: { first: number; rows: number }) => void;
  selectionMode?: "multiple" | "checkbox" | null;
  onContextMenuSelectionChange?: (e: { value: T[] }) => void;
  onSelectionChange?: (e: { value: T[] }) => void;
}

const CustomDataTable = <T extends object>({
  data,
  columns,
  selection = [],
  onPageChange = () => {},
  selectionMode = null,
  onContextMenuSelectionChange,
  onSelectionChange,
  ...rest
}: CustomDataTableProps<T>) => {
  return (
    <div
      style={{
        height: "calc(100vh - 200px)",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <DataTable<T[]>
        value={data}
        paginator
        rows={50}
        first={0}
        rowsPerPageOptions={[10, 20, 50]}
        scrollable
        scrollHeight="calc(100vh - 200px)"
        tableStyle={{ minWidth: "50rem" }}
        style={{
          width: "100%",
          maxHeight: "100%",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
        selection={selection}
        selectionMode={selectionMode}
        onContextMenuSelectionChange={onContextMenuSelectionChange}
        onSelectionChange={onSelectionChange}
        {...rest}
      >
        {columns.map((col, index) => (
          <Column
            key={index}
            field={String(col.field)}
            header={col.header}
            sortable={col.sortable || false}
          />
        ))}
      </DataTable>
    </div>
  );
};

export default CustomDataTable;
