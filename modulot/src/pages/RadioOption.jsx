// RadioOption.jsx
import React from "react";
import { FormGroup, FormCheck, FormLabel } from "react-bootstrap";

export default function RadioOption ({ value, register, error, index }) {
  return (
    <FormGroup className="m-2">
      <FormCheck
        {...register("userradiocheck")}
        type="radio"
        id={`userradiocheck-${index}`}
        value={value}
        label={value}
        className="form-check-input"
      />
      {error && (
        <FormLabel className="text-danger">{error.message}</FormLabel>
      )}
    </FormGroup>
  );
};

