import { Provider } from 'react-redux'
import { createBrowserRouter } from 'react-router-dom'
import { APP_ROUTES } from '../common/consts'
import { HomePage } from '../pages/home-page'
import { SigninPage } from '../pages/signin-page'
import { SignupPage } from '../pages/signup-page'
import { store } from '../store'
import { App } from './app'
import { AuthGuard } from './auth-guard'

export const router = createBrowserRouter([
	{
		element: (
			<Provider store={store}>
				<App />
			</Provider>
		),
		children: [
			{
				element: <AuthGuard />,
				children: [
					{
						path: APP_ROUTES.HOME,
						element: <HomePage />,
					},
				],
			},
			{
				path: APP_ROUTES.SIGN_UP,
				element: <SignupPage />,
			},
			{
				path: APP_ROUTES.SIGN_IN,
				element: <SigninPage />,
			},
		],
	},
])
