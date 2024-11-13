import { ChangeEvent } from "react";

export function LoginInput({
  label,
  placeholder,
  onChange,
  type,
  className,
  id,
}: {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  className?: string;
  id: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-xs text-gray-900 pb-1">
        {label}
      </label>
      <input
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        type={type}
        required={type !== "text"}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 pl-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-500 focus:outline-none sm:text-sm sm:leading-6"
      />
    </div>
  );
}
