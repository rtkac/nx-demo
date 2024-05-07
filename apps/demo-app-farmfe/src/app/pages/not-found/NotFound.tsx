import { useTranslation } from 'react-i18next'

export const NotFound: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="w-full p-10">
      <h2 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">
        {t('404.heading')}
      </h2>
      <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-center">
        {t('404.description')}
      </p>
    </div>
  )
}
