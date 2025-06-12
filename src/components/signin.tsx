import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../common/consts'
import { useAppDispatch } from '../common/hooks/redux-hooks'
import { setUser } from '../store/slices/user-slice'
import { Form } from './form'

export function Signin() {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	function handleLogin(email: string, password: string) {
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.refreshToken,
					})
				)

				navigate(APP_ROUTES.HOME)
				toast.success('Logged in successfully')
			})
			.catch(() => toast.error('Error during authorization'))
	}

	return <Form title={'Sign In'} submitFn={handleLogin} />
}
