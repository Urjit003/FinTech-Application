"use client";
import React from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
interface data {
  id: Number;
  title: String;
  data: any;
}
const array = [
  {
    id: 1,
    title: "One",
    data: 1230.123,
  },
  {
    id: 2,
    title: "two",
    data: 2123.23,
  },
  {
    id: 3,
    title: "three",
    data: 1233.23,
  },
  {
    id: 4,
    title: "Four",
    data: 41231.23,
  },
];
interface inputComponenet {
  heading: string;
  description: string;
}
const Customer = () => {
  const IncomeComponent = (props: inputComponenet) => {
    return (
      <Card className="m-4">
        <CardHeader>
          <CardTitle>{props.heading}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SKU</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Actual</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="m-2">
              {array.map((ele) => (
                <TableRow key={ele.id}>
                  <TableCell>{ele.title}</TableCell>
                  <TableCell>
                    {" "}
                    <Input
                      type="Number"
                      id="inptBudget"
                      defaultValue={ele.data}
                    />
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Input
                      type="Number"
                      id="inptActual"
                      defaultValue={ele.data}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="justify-center border-t p-4">
          <Button size="sm" variant="default" className="gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            Add Variant
          </Button>
        </CardFooter>
      </Card>
    );
  };
  return (
    <div className="flex p-2">
      <IncomeComponent heading="one" description="YAPPING" />
    </div>
  );
};

export default Customer;
