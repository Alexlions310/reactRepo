import { useCallback, useState } from 'react'

export type authValues = {
  phone?: string
  otp?: string
  name?: string
}

export type authErrors = {
  phone?: string
  otp?: string
  name?: string
}

export function useAuthorizationValidation() {
  const [values, setValues] = useState<authValues>({
    phone: '',
    otp: '',
    name: '',
  })
  const [errors, setErrors] = useState<authErrors>({
    phone: '',
    otp: '',
    name: '',
  })
  const [isValid, setIsValid] = useState(false)

  const handleChange = (event: any) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: event.target.validationMessage })
    setIsValid(event.target.closest('form').checkValidity())
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues)
      setErrors(newErrors)
      setIsValid(newIsValid)
    },
    [setValues, setErrors, setIsValid],
  )

  return { values, handleChange, errors, isValid, resetForm, setValues, setErrors }
}
