import { Link } from 'react-router-dom'
import { APP_ROUTES } from '../common/consts'
import { SignupForm } from '../components/signup-form'

export function SignupPage() {
	return (
		<div className='max-w-[500px] mx-auto pt-[150px]'>
			<h1 className='text-2xl font-bold'>Sign Up</h1>

			<SignupForm />

			<p className='text-center'>
				Already have an account?{' '}
				<Link to={APP_ROUTES.SIGN_IN} className='text-teal-500'>
					Sign in
				</Link>
			</p>
		</div>
	)
}
