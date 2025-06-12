export function Form({
	title,
	submitFn,
}: {
	title: string
	submitFn: (email: string, password: string) => void
}) {
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)

		const email = String(formData.get('email')) ?? ''
		const password = String(formData.get('password')) ?? ''

		submitFn(email, password)

		e.currentTarget.reset()
	}

	return (
		<form className='flex flex-col gap-5' onSubmit={handleSubmit}>
			<h1 className='text-2xl font-bold mb-4'>{title}</h1>
			<input
				className='p-5 rounded border border-slate-500'
				type='email'
				name='email'
				placeholder='Email'
				required
			/>
			<input
				className='p-5 rounded border border-slate-500'
				type='password'
				name='password'
				placeholder='Password'
				required
			/>
			{/* {loginError && (
					<p className='bg-rose-400 text-white p-3 rounded'>{loginError}</p>
				)} */}
			<button
				type={'submit'}
				// disabled={isLoading}
				className='p-5 text-xl font-medium rounded bg-teal-500 text-white cursor-pointer disabled:bg-teal-300 mb-2'
			>
				Submit
			</button>
		</form>
	)
}
