import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
	className?: string;
}

export const MusicGuitarIcon = ({ className, ...rest }: IconProps) => (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className={`${className}`}
		{...rest}
	>
		<rect width='24' height='24' fill='url(#pattern0)' />
		<defs>
			<pattern
				id='pattern0'
				patternContentUnits='objectBoundingBox'
				width='1'
				height='1'
			>
			</pattern>
		
		</defs>
	</svg>
);
