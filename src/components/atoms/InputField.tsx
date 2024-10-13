import React from "react";

interface InputFieldProps {
  name: string;
  formContext: any;
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({
  formContext,
  name,
  label,
  ...props
}) => {
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <label htmlFor={name} className="block mb-2 text-sm text-slate-600">
        {label}
      </label>
      <input
        {...formContext.register(name)}
        {...props}
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      />

      {formContext.errors[name] && (
        <span>{formContext.errors[name].message}</span>
      )}
    </div>
  );
};

export default InputField;
