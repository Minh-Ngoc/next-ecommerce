import { CustomIconProps } from '@/types'
import React from 'react'

export const SearchIcon = ({
	width,
	height,
    stroke,
    strokeWidth,
	...props
}: CustomIconProps) => (
	<svg
		aria-hidden="true"
		fill="none"
		focusable="false"
		height={ !height ? "1em" : height}
		role="presentation"
		viewBox="0 0 24 24"
		width={ !width ? "1em" : width}
		{...props}
	>
		<path
			d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
			strokeLinecap="round"
			strokeLinejoin="round"
			stroke={!stroke ? 'white' : stroke}
            strokeWidth={!strokeWidth ? 2 : strokeWidth}
		/>
		<path
			d="M22 22L20 20"
			strokeLinecap="round"
			strokeLinejoin="round"
			stroke={!stroke ? 'white' : stroke}
            strokeWidth={!strokeWidth ? 2 : strokeWidth}
		/>
	</svg>
);