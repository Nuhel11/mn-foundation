"use client";

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useEffect } from "react";

interface PayPalProps {
  amount: string;
  onSuccess: (details: any) => void;
}

export default function PayPalButton({ amount, onSuccess }: PayPalProps) {
  const [{ isPending, isResolved, isRejected }] = usePayPalScriptReducer();

  // Log status to help us debug
  useEffect(() => {
    if (isRejected) console.error("PayPal SDK failed to load.");
    if (isResolved) console.log("PayPal SDK loaded successfully.");
  }, [isResolved, isRejected]);

  return (
    <div className="w-full">
      {isPending && (
        <div className="flex flex-col items-center justify-center space-y-2 p-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
          <p className="text-sm font-medium text-slate-500">Loading Secure Payment...</p>
        </div>
      )}
      
      <PayPalButtons
        forceReRender={[amount]} // Crucial: Re-renders the button when the price changes
        style={{ layout: "vertical", shape: "pill", label: "donate" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: "GBP",
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          if (actions.order) {
            const details = await actions.order.capture();
            onSuccess(details);
          }
        }}
      />
    </div>
  );
}