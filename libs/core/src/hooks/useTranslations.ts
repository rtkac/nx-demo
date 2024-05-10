import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const useTranslationsDocumentAttribute = () => {
  const { i18n } = useTranslation()
  const [resolved, setResolved] = useState(false)

  useEffect(() => {
    if (i18n.resolvedLanguage) {
      document.documentElement.lang = i18n.resolvedLanguage
      document.documentElement.dir = i18n.dir(i18n.resolvedLanguage)
      setResolved(true)
    }
  }, [i18n, i18n.resolvedLanguage])

  return { resolved }
}
