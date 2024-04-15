import colors from '@constants/colors'
import { FC } from 'react'
import ContentLoader, { IContentLoaderProps } from 'react-content-loader'

type SkeletonProps = IContentLoaderProps & { className?: string }

const SkeletonGrid: FC<SkeletonProps> = ({ className, ...props }) => {
	return Array.from({ length: 12 }).map((_, idx) => (
		<ContentLoader
			speed={2}
			backgroundColor={colors.bg[200]}
			foregroundColor={colors.bg[300]}
			{...props}
			className={className}
			key={idx}
		>
			<rect
				width='100%'
				height='100%'
			/>
		</ContentLoader>
	))
}

export default SkeletonGrid
