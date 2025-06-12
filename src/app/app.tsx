import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

export function App() {
	return (
		<main className='px-6 md:px-10 lg:max-w-[1200px] mx-auto'>
			<Outlet />
			<Toaster position="top-right" reverseOrder={false} />
		</main>
	)
}
