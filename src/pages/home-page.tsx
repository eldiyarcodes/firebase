import { Navigate } from 'react-router-dom'
import { APP_ROUTES } from '../common/consts'
import { useAppDispatch } from '../common/hooks/redux-hooks'
import { useAuth } from '../common/hooks/use-auth'
import { removeUser } from '../store/slices/user-slice'

export function HomePage() {
	const dispatch = useAppDispatch()

	const { isAuth, email } = useAuth()

	if (!isAuth) {
		return <Navigate to={APP_ROUTES.SIGN_IN} />
	}

	return (
		<div className='pt-[50px]'>
			<h1 className='text-3xl font-bold mb-2'>Firebase / Home</h1>
			<p className='text-slate-340 font-medium mb-4'>{email}</p>
			<button
				className='px-5 py-3 rounded bg-rose-500 text-white cursor-pointer disabled:bg-rose-300'
				onClick={() => dispatch(removeUser())}
			>
				Logout
			</button>
		</div>
	)
}
