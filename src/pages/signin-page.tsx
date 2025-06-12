import { Link } from 'react-router-dom'
import { APP_ROUTES } from '../common/consts'
import { Signin } from '../components/signin'

export function SigninPage() {
	return (
		<div className='max-w-[500px] mx-auto pt-[150px]'>
			<Signin />

			<p className='text-center'>
				Or{' '}
				<Link to={APP_ROUTES.SIGN_UP} className='text-teal-500'>
					Sign up
				</Link>
			</p>
		</div>
	)
}
