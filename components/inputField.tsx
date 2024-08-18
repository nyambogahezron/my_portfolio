import PropTypes from 'prop-types';
import styles from '../pages/Contact/index.module.css';
import React from 'react';

interface InputFieldProps {
  type: string;
  id: string;
  className: string;
  placeholder: string;
  colSize: string;
  value: string;
  onChange: func;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  id,
  className,
  placeholder,
  colSize,
  value,
  onChange,
}) => {
  return (
    <div className={`${styles.formItem}  ${colSize}`}>
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
