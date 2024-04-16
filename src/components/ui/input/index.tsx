import { cn } from '@utils/cn'
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'

type FieldProps = {
	id: string
	label: string
	isEmpty: boolean
	icon?: ReactNode
	error?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, FieldProps>(
	({ id, label, icon, error, isEmpty, ...rest }, forwardedRef) => {
		return (
			<div className='flex flex-col'>
				<label
					htmlFor={id}
					className={cn(
						'text-xs mx-3 capitalize bg-bg-300 w-fit mb-1.5 z-20 transition duration-300 ease-in-out',
						error ? 'text-red-600' : 'text-white/30',
						isEmpty ? 'translate-y-3 px-2' : 'translate-y-4 px-2',
					)}
				>
					{error || label}
				</label>
				<input
					className={cn(
						'flex bg-bg-300 text-white/70 space-x-2 px-4 text-base py-2 rounded-md shadow-sm outline-none',
						error
							? 'border border-red-500 focus:border-red-600'
							: 'border border-white/30 focus:border-primary',
						'placeholder:text-sm autofill:bg-transparent autofill:focus:bg-transparent',
						'transition duration-300 ease-in-out',
					)}
					ref={forwardedRef}
					{...rest}
				/>
			</div>
		)
	},
)

export default Input
