import type { PropsWithChildren } from 'react'

import { registerTranslations } from '@core/helpers'
import { useTranslationsDocumentAttribute } from '@core/hooks'

import { Spinner } from '@ui/components'
import { ar as translationAR } from '../../assets/translations/ar.json'
import { en as translationEN } from '../../assets/translations/en.json'

registerTranslations({ en: translationEN, ar: translationAR })

interface TranslationsBoundary extends PropsWithChildren {}

export const TranslationsBoundary: React.FC<TranslationsBoundary> = ({ children }) => {
  const { resolved } = useTranslationsDocumentAttribute()

  if (resolved) {
    return children
  }

  return (
    <div className="flex justify-center p-10">
      <Spinner.Root />
    </div>
  )
}
