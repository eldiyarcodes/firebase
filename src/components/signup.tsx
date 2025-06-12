import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../common/consts'
import { useAppDispatch } from '../common/hooks/redux-hooks'
import { auth } from '../common/lib/firebase'
import { setUser } from '../store/slices/user-slice'
import { Form } from './form'

export function Signup() {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	function handleRegister(email: string, password: string) {
		createUserWithEmailAndPassword(auth, email, password)
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

	return <Form title={'Sign Up'} submitFn={handleRegister} />
}
