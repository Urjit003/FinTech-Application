"use client"
import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, File, ListFilter, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card } from "@/components/ui/card"
const data: Payment[] =[
  {
    "id": "1",
    "amount": 316,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-01",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "2",
    "amount": 420,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-02",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "3",
    "amount": 150,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-03",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "4",
    "amount": 225,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-04",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "5",
    "amount": 375,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-05",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "6",
    "amount": 290,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-06",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "7",
    "amount": 310,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-07",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "8",
    "amount": 280,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-08",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "9",
    "amount": 350,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-09",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "10",
    "amount": 400,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-10",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "11",
    "amount": 275,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-11",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "12",
    "amount": 360,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-12",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "13",
    "amount": 305,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-13",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "14",
    "amount": 290,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-14",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "15",
    "amount": 330,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-15",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "16",
    "amount": 395,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-16",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "17",
    "amount": 420,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-17",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "18",
    "amount": 310,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-18",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "19",
    "amount": 405,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-19",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  },
  {
    "id": "20",
    "amount": 325,
    "status": "success",
    "email": "ken99@yahoo.com",
    "date": "2024-01-20",
    "description": "note",
    "payee": "ken99@yahoo.com",
    "category": "success",
  }
]


export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  date: string
  description: string
  payee: string
  category: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "date",
    header: () => <div className="text-right">Date</div>,
    cell: ({ row }) => {
      const date =new Date(row.getValue("date"))
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      });
      
      return <div className="text-right font-medium">{formattedDate}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy Transaction ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit Transcation Details</DropdownMenuItem>
            <DropdownMenuItem>View Transcation details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function TransctionDataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 5, //custom default page size
      },
    },
  })
  const transactionFilter=[
    {
      "label":"Accounts"
   },{
      "label":"Category"
   },{
      "label":"Date"
  }, 
];
  return (
    <Tabs defaultValue="week">
    <div className="flex items-center mb-1">
      <TabsList>
        <TabsTrigger value="week">Week</TabsTrigger>
        <TabsTrigger value="month">Month</TabsTrigger>
        <TabsTrigger value="year">Year</TabsTrigger>
      </TabsList>
      <div className="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="h-7 gap-1 text-sm"
            >
              <ListFilter className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only">Filter</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {transactionFilter.map((filter,index)=>
              <DropdownMenuCheckboxItem checked={index===0 ?true:false}>
              {filter.label}
             </DropdownMenuCheckboxItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          size="sm"
          variant="outline"
          className="h-7 gap-1 text-sm"
        >
          <File className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">Export</span>
        </Button>
      </div>
    </div>
 
      <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  </Tabs>
  )
}
