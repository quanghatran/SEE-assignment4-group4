import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CustomInput from "../../components/controls/CustomInput";
import CustomSelect from "../../components/controls/CustomSelect";
import { useState } from "react";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const ModelComponent = (props) => {
	const { open, handleClose, nameInput, valueInput, onChangeInput } = props;
	const [value, setValue] = useState("");

	const listSelection = [
		{ name: "Đơn giản", value: 1 },
		{ name: "Trung bình", value: 2 },
		{ name: "Phức tạp", value: 3 },
	];

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'>
			<Box sx={style}>
				<Typography id='modal-modal-title' variant='h6' component='h2'>
					Thêm trường cần tính
				</Typography>
				<div style={{ marginTop: "1rem" }}>
					<CustomInput
						required
						label='Số tác nhân'
						placeholder='Số tác nhân'
						name={nameInput}
						value={valueInput}
						onChange={onChangeInput}
					/>

					<CustomSelect
						inputLabel='Loại actor'
						value={value}
						listSelection={listSelection}
						onChange={(e) => setValue(e.target.value)}
					/>
				</div>
			</Box>
		</Modal>
	);
};

export default ModelComponent;
