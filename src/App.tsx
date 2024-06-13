import { flexRender } from "@tanstack/react-table";
import Table, { TbodyCell, TheadCell } from "./table";
import { useTableContext } from "./table.context";
//import { EmptyComponent } from '•/utilities/EmptyComponent';
//import { LoadingTableTest } from ' /utilities/LodingComponent';

function DataTable() {
  const [table] = useTableContext((state) => state.table);

  if (!table) return <>Sin provider</>;

  return (
    <>
      <Table
        columns={table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header, index) => (
              <TheadCell key={header.id} colSpan={index}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TheadCell>
            ))}
          </tr>
        ))}
        body={table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell, index) => (
              <TbodyCell key={cell.id} colSpan={index}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TbodyCell>
            ))}
          </tr>
        ))}
      />
    </>
  );
}
