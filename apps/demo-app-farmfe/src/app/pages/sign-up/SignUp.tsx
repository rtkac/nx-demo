import { FormEvent } from 'react'

import { commonApiClient } from '@demo-app-core/redux'
import { SignUpForm } from './components/SignUpForm'

export const SignUp: React.FC = () => {
  const [createUser] = commonApiClient.useCreateUserMutation()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string

    createUser({ firstName, lastName, email })
  }

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full md:w-96">
        <SignUpForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}
