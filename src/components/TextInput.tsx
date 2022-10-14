import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps
  extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 py-3 px-4 rounded bg-gray-800 text-gray-100 w-full focus-within:ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
}

// function TextInputIcon() {
//   return (

//   );
// }

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 placeholder:text-gray-400 text-sm outline-none"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
};
