import { useTranslation } from 'react-i18next'

import { commonApiClient } from '@demo-app-core/redux'

import { Spinner } from '@ui/components'
import { User } from './components/User'

export const Users: React.FC = () => {
  const { t } = useTranslation()

  const { data, isLoading, isError } = commonApiClient.useUsersQuery()

  if (isLoading) {
    return (
      <div className="flex w-full justify-center">
        <Spinner.Root />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="w-full">
        <h2 className="text-lg lg:text-xl text-center">{t('error.global.description')}</h2>
      </div>
    )
  }

  return (
    <div className="w-full">
      <h1 className="mb-6 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl text-center">
        {t('users.title')}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center">
        {data?.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}
