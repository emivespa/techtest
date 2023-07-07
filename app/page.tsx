import React from "react";
import BestOfferForm from "./bestOfferForm";
import LogSaleForm from "./logSaleForm";
import MockForm from "./mockForm";
import { ModeToggle } from "./modeToggle";

export default function Home() {
  return (
    <main>
      <div className="absolute top-8 right-8">
        <ModeToggle />
      </div>
      <div className="max-w-[50ch] gap-4 p-4 grid">
        <MockForm />
        <BestOfferForm />
        <LogSaleForm />
      </div>
    </main>
  );
}
