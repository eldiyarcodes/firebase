import { Navigate } from 'react-router-dom'
import { APP_ROUTES } from '../common/consts'

export function HomePage() {
	return <Navigate to={APP_ROUTES.SIGN_IN} />
}
