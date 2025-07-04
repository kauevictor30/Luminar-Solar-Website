"use client"

import { Input } from "@/components/ui/input"

interface ContactFieldProps {
  label: string
  type?: string
  required?: boolean
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function ContactField({
  label,
  type = "text",
  required = false,
  value,
  onChange,
  placeholder,
}: ContactFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <Input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}
