import TextField from "@mui/material/TextField";

const CustomInput = (props) => {
	const { id, label, placeholder, value, name, onCustomInputChange, style } =
		props;
	return (
		<TextField
			fullWidth
			required
			id={id}
			label={label}
			placeholder={placeholder}
			size='small'
			name={name}
			value={value}
			onChange={onCustomInputChange}
			style={style}
		/>
	);
};

export default CustomInput;
