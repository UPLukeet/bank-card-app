import { InputAdornment, TextField } from "@mui/material"
import { useEffect } from "react"
import errorIcon from "../assets/icons/form-error.svg"
import successIcon from "../assets/icons/form-success.svg"

interface InputFieldProps {
  label: string
  value: string | number | undefined
  onChange: (value: string) => void
  type?: "success" | "error"
  isError?: (error: boolean) => void
}

export const InputField = ({
  label,
  value,
  onChange,
  type,
  isError,
}: InputFieldProps) => {
  const updateTextField = (e: string) => {
    onChange(e)
  }
  useEffect(() => {
    isError && isError(type === "error" || type === undefined)
  }, [isError, type])

  return (
    <div className="w-full my-unit-2">
      <TextField
        onChange={(e) => updateTextField(e.target.value)}
        value={value}
        label={label}
        variant="standard"
        className="w-full"
        error={type === "error"}
        color={type === "success" ? "success" : "primary"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {type === "error" && <img src={errorIcon} />}
              {type === "success" && <img src={successIcon} />}
            </InputAdornment>
          ),
        }}
      />
    </div>
  )
}
