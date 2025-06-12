import { Link } from 'react-router-dom'
import { APP_ROUTES } from '../common/consts'
import { SigninForm } from '../components/signin-form'

export function SigninPage() {
	return (
		<div className='max-w-[500px] mx-auto pt-[150px]'>
			<h1 className='text-2xl font-bold'>Sign In</h1>

			<SigninForm />

			<p className='text-center'>
				Or{' '}
				<Link to={APP_ROUTES.SIGN_UP} className='text-teal-500'>
					Sign up
				</Link>
			</p>
		</div>
	)
}
