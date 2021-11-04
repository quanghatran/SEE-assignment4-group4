import TextField from "@mui/material/TextField";

const CustomInput = (props) => {
	const { id, label, placeholder, value, name, onCustomInputChange } = props;
	return (
		<TextField
			required
			id={id}
			label={label}
			placeholder={placeholder}
			size='small'
			name={name}
			value={value}
			onChange={onCustomInputChange}
		/>
	);
};

export default CustomInput;
