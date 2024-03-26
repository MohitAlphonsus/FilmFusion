function InputElement({ placeholder, onHandle, onChange }) {
	return (
		<input
			type="text"
			placeholder={placeholder}
			onChange={onChange}
			onKeyUp={onHandle}
		/>
	);
}

export default InputElement;
