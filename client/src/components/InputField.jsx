import React, { useEffect, useRef } from 'react';

const InputField = ({ label, type, placeholder,onChange,name,value }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex flex-col gap-2 md:w-96 lg:w-full xl:w-full w-full py-3 px-4">
      <label className="text-sm font-medium">{label} <span className="text-purple-900">*</span></label>
      <input
        type={type}
        ref={inputRef}
        name={name}
        defaultValue={value}
        className="border rounded p-2 focus:outline-purple-300"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
