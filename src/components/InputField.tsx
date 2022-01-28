import { InputAdornment, TextField } from "@mui/material"
import errorIcon from "../assets/icons/form-error.svg"
import successIcon from "../assets/icons/form-success.svg"

interface InputFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  type: "success" | "error" | "plain"
}

export const InputField = ({
  label,
  value,
  onChange,
  type,
}: InputFieldProps) => {
  return (
    <div className="w-full">
      <TextField
        onChange={(e) => onChange(e.target.value)}
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
