"use client";

import React, { useState, useEffect } from "react";
import classnames from "classnames";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./styles.css";

// Assuming ShadowComponent is imported correctly from your UI library
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlignCenter, MoreVertical } from "lucide-react";
import PieChartComponent from "@/components/ui/piechart";
import { ChartConfig } from "@/components/ui/chart";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogHeader } from "@/components/ui/dialog";
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;
interface Account {
  name: string;
  number: string;
  balance: number;
}

const AccountPage = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newAccount, setNewAccount] = useState<Account>({
    name: "",
    number: "",
    balance: 0,
  });
  const [menuOpenIndex, setMenuOpenIndex] = useState<number | null>(null);

  useEffect(() => {d
    // Retrieve accounts from localStorage on component mount
    const storedAccounts = localStorage.getItem("accounts");
    if (storedAccounts) {
      setAccounts(JSON.parse(storedAccounts));
    }
  }, []);

  const handleAddAccount = () => {
    const updatedAccounts = [...accounts, newAccount];
    setAccounts(updatedAccounts);
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
    setNewAccount({ name: "", number: "", balance: 0 });
    setIsDialogOpen(false);
  };

  const handleEditAccount = (index: number) => {
    // Placeholder function for editing an account
    // You can implement this based on your application logic
    // For example, opening a sheet to edit details
    // console.log(`Editing account at index ${index}`);
    setMenuOpenIndex(null); // Close menu after action
  };

  const handleDeleteAccount = (index: number) => {
    const updatedAccounts = [...accounts];
    updatedAccounts.splice(index, 1);
    setAccounts(updatedAccounts);
    localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
    setMenuOpenIndex(null); // Close menu after action
  };

  const toggleMenu = (index: number) => {
    if (menuOpenIndex === index) {
      setMenuOpenIndex(null); // Close menu if clicked again
    } else {
      setMenuOpenIndex(index); // Open menu for specific card
    }
  };

  return (
    <>
      <div className="horizontal-scroll-container">
        <div className="card">
          <Card className="flex flex-col" onClick={() => setIsDialogOpen(true)}>
            <CardContent className="flex items-center justify-center">
              <span className="text-4xl">+</span>
            </CardContent>
          </Card>
        </div>
        {accounts.map((account, index) => (
          <div key={index} className="card">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{account.name}</CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => toggleMenu(index)}
                      >
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>
                    {menuOpenIndex === index && (
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <span onClick={() => handleEditAccount(index)}>
                            Edit
                          </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span onClick={() => handleDeleteAccount(index)}>
                            Delete
                          </span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    )}
                  </DropdownMenu>
                </div>
                <CardDescription>
                  Account Number: {account.number}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Balance: {account.balance}</p>
              </CardContent>
            </Card>
          </div>
        ))}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="p-4 space-y-4">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                Add New Account
              </DialogTitle>
              <DialogDescription className="text-gray-500">
                Enter the details of the new account.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <label className="block">
                <span className="text-gray-700">Account Name:</span>
                <Input
                  type="text"
                  value={newAccount.name}
                  onChange={(e) =>
                    setNewAccount({ ...newAccount, name: e.target.value })
                  }
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Account Number:</span>
                <Input
                  type="number"
                  value={newAccount.number}
                  onChange={(e) =>
                    setNewAccount({ ...newAccount, number: e.target.value })
                  }
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Balance:</span>
                <Input
                  type="number"
                  min={0}
                  value={newAccount.balance}
                  onChange={(e) =>
                    setNewAccount({
                      ...newAccount,
                      balance: Number(e.target.value),
                    })
                  }
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </label>
              <Button onClick={handleAddAccount}>Submit</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <h1 className="text-center">FOR PIE CHARTS</h1>
      <div
        className={classnames({
          "h-max" : true,
          "flex"  :true ,
          "justify-center" : true , 
          "align-middle" : true,
        })}
      >
        <PieChartComponent
          title="ABC 2020-2024"
          data={chartData}
          config={chartConfig}
        ></PieChartComponent>
        <PieChartComponent
          title="ABC 2020-2024"
          data={chartData}
          config={chartConfig}
        ></PieChartComponent>
      </div>
    </>
  );
};

export default AccountPage;
