import {TextField} from "@mui/material";
import {Controller} from "react-hook-form";
import React from "react";

type PropTypes = {
    helperText:string | undefined
    errors: boolean
    control: any
    label: string
    id: string
    name: string
    defaultValue?: string
    type?:string
    fullWidth?: boolean
    variant?: "filled" | "standard" | "outlined" | undefined
    margin?: "dense" | "none" | "normal" | undefined
}

export const FormInput: React.FC<PropTypes> = (
    {helperText,
        errors,
        control,
        name,
        id,
        label,
        defaultValue = '',
        type = 'text',
        fullWidth = true,
        variant = 'filled',
        margin='dense'
    }
) => {
    return (
        <Controller
            defaultValue={defaultValue}
            render={({ field }) =>
                <TextField
                    {...field}
                    helperText={helperText}
                    error={errors}
                    margin={margin}
                    id={id}
                    label={label}
                    type={type}
                    fullWidth={fullWidth}
                    variant={variant}

                />}
            name={name}
            control={control}
        />
    )
}