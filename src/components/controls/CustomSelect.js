import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CustomSelect = (props) => {
	const { value, handleValueChange, listSelection, inputLabel } = props;

	console.log(props);

	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>{inputLabel}</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				defaultValue=''
				size='small'
				value={value}
				onChange={handleValueChange}>
				{listSelection.length > 0
					? listSelection.map((item, index) => (
							<MenuItem key={index} value={item.value}>
								{item.name}
							</MenuItem>
					  ))
					: ""}
			</Select>
		</FormControl>
	);
};

export default CustomSelect;
