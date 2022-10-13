import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

import { clsx } from "clsx";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-3 px-4 rounded font-semibold text-black text-md w-full transition-colors bg-cyan-500 hover:bg-cyan-300 focus:ring-2 ring-white",
        {}
      )}
    >
      {children}
    </Comp>
  );
}
