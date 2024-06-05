import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      children,
      type = "text",
      name,
      className,
      onChange,
      value,
      placeholder,
      readOnly,
      required = false,
      options = [],
    },
    ref
  ) => {
    if (type === "select") {
      return (
        <div className="flex relative w-full group">
          <select
            ref={ref}
            name={name}
            id={name}
            className={`block py-3 px-3 w-full rounded-lg text-sm text-black focus:text-cust-darker-blue bg-transparent border-2 border-cust-black-light-active focus:border-cust-darker-blue focus:outline-none ${className}`}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            required={required}
          >
            <option className="" value="" disabled hidden>
              {placeholder}
            </option>
            {options.map((option) => (
              <option
                className="py-10 text-cust-darker-blue hover:text hover:bg-cust-darker-blue"
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          {children}
        </div>
      );
    } else {
      return (
        <div className="flex relative w-full group">
          <input
            ref={ref}
            type={type}
            name={name}
            id={name}
            className={`block py-3 px-3 w-full rounded-lg text-sm text-black focus:text-black bg-transparent border-2 border-cust-black-light-active focus:border-cust-darker-blue focus:outline-none ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            readOnly={readOnly}
            required={required}
          />
          {children}
        </div>
      );
    }
  }
);

export default Input;
