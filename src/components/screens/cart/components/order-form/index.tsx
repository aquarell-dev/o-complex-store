import useCart from '@hooks/useCart'
import useCurrency from '@hooks/useCurrency'
import Button from '@ui/button'
import Input from '@ui/input'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { OrderForm as TOrderForm } from 'src/types/order.types'

const OrderForm: FC = () => {
	const {
		handleSubmit,
		watch,
		register,
		formState: { errors },
	} = useForm<TOrderForm>({ mode: 'onBlur' })
	const { total, cart } = useCart()
	const { createOrder, orderStatus } = useCart()
	const format = useCurrency()

	const phone = watch('phone')

	const onSubmit: SubmitHandler<TOrderForm> = async data =>
		await createOrder({ cart, phone: data.phone })

	return (
		<form
			className='w-1/3 h-fit p-4 shadow-md rounded-md bg-bg-300'
			onSubmit={handleSubmit(onSubmit)}
		>
			<p className='font-medium'>Заказ №123124</p>
			<p>Кол-во товара, шт: {total.amount}</p>
			<p>Стоимость заказа, ₽: {format(total.price)}</p>
			<Input
				id='phone'
				label='Телефон'
				isEmpty={!!phone}
				error={errors.phone?.message || orderStatus?.error}
				{...register('phone', {
					required: 'Это поле обязательно',
					pattern: {
						message: 'Неправильный формат номера',
						value: /^7\d{10}$/,
					},
				})}
			/>
			<Button
				size='sm'
				className='w-full mt-4'
				type='submit'
			>
				Заказать
			</Button>
		</form>
	)
}

export default OrderForm
