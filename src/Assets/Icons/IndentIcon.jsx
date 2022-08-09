export default function IndentIcon({ color, width, height }) {
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height}>
				<path fill="none" d="M0 0h24v24H0z" />
				<path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill={color} />
			</svg>
		</>
	);
}