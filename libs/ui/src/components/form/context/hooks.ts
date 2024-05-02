import { useContext } from 'react'

import { CreateFormContext } from './form.context'
import type { FormContext } from './types'

export const useFormContext = () => {
  const { name } = useContext<FormContext>(CreateFormContext)

  return { name }
}
