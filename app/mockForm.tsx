"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

export default function MockForm() {
  const [sku, setSku] = useState("xxx");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `http://localhost:3000/api/mock/getAllSkuOffers/${sku}`;
  };
  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>hit /api/mock/getAllSkuOffers</CardTitle>
        <CardDescription>
          will return all offers for the sku, if any - mock skus are `xxx`,
          `yyy` and `zzz`
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-sm items-center gap-4"
        >
          <Label htmlFor="sku">sku:</Label>
          <Input
            id="sku"
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}
