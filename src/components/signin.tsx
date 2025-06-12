import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
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
			})
			.catch(console.error)
	}

	return <Form title={'Sign In'} submitFn={handleLogin} />
}
