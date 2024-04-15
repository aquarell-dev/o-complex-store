import { ButtonHTMLAttributes, FC, forwardRef } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@utils/cn'

export const buttonVariants = cva(
	'inline-flex items-center space-x-2 justify-center font-medium transition duration-300 ease-in-out shadow-md hover:translate-y-[0.05rem]',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-text-100 hover:bg-secondary hover:text-primary-100',
				outline:
					'bg-transparent border border-primary border-2 hover:bg-primary',
			},
			size: {
				default: 'py-2 px-4',
				sm: 'py-1 px-2',
				lg: 'px-6 py-3',
				round: 'p-2',
			},
			roundness: {
				default: 'rounded-md',
				full: 'rounded-full',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
			roundness: 'default',
		},
	},
)

type ButtonProps = VariantProps<typeof buttonVariants> &
	ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { className, size, variant, roundness, children, ...rest } = props

	return (
		<button
			className={cn(buttonVariants({ className, size, variant, roundness }))}
			ref={ref}
			{...rest}
		>
			{children}
		</button>
	)
})

export default Button
