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

export default function BestOfferForm() {
  const [sku, setSku] = useState("xxx");
  const [units, setUnits] = useState(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): any => {
    e.preventDefault();
    window.location.href = `http://localhost:3000/api/bestOffer?sku=${sku}&units=${units}`;
  };
  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>hit /api/bestOffer</CardTitle>
        <CardDescription>
          will return the best valid offer for the number of units, if there is
          one
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="grid w-full max-w-sm items-center gap-4"
        >
          <Label htmlFor="sku">sku:</Label>
          <Input
            id="sku"
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
          <Label htmlFor="units">units:</Label>
          <Input
            id="units"
            type="number"
            value={units}
            onChange={(e) => setUnits(parseInt(e.target.value))}
          />
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}
