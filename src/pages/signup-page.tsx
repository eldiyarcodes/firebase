import { Link } from 'react-router-dom'
import { APP_ROUTES } from '../common/consts'
import { Signup } from '../components/signup'

export function SignupPage() {
	return (
		<div className='max-w-[500px] mx-auto pt-[150px]'>
			<Signup />

			<p className='text-center'>
				Already have an account?{' '}
				<Link to={APP_ROUTES.SIGN_IN} className='text-teal-500'>
					Sign in
				</Link>
			</p>
		</div>
	)
}
