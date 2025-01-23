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
    <DataTable<T[]>
      value={data}
      paginator
      rows={10}
      first={0}
      //   onPage={(e) => onPageChange(e)}
      rowsPerPageOptions={[10, 20, 50]}
      responsiveLayout="scroll"
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
  );
};

export default CustomDataTable;
