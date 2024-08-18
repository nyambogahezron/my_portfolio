import styles from '../pages/Contact/index.module.css';
import React, { ChangeEvent } from 'react';

interface InputFieldProps {
  type: string;
  id: string;
  className: string;
  placeholder: string;
  colSize: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  type,
  id,
  className,
  placeholder,
  colSize,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div className={`${styles.formItem} ${colSize}`}>
      <div className={styles.formGroup}>
        <input
          type={type}
          id={id}
          className={`${styles.formControl} ${className}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputField;
