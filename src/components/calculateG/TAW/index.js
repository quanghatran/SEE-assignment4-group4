import { Button, Grid, IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import ModelComponent from "../../../common/modal";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CustomSelect from "../../controls/CustomSelect";

function createData(actorType, numberActor, point) {
	return { actorType, numberActor, point };
}
const initialValues = {
	actorType: "Đơn giản",
	numberActor: 0,
	point: 0,
};

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

const listSelection = [
	{ name: "Đơn giản", value: 1 },
	{ name: "Trung bình", value: 2 },
	{ name: "Phức tạp", value: 3 },
];

export default function TAWComponent() {
	const [rows, handleRows] = useState([]);

	const handleAddRow = () => {
		const row = createData(
			initialValues.actorType,
			initialValues.numberActor,
			initialValues.point
		);

		handleRows([...rows, row]);
	};

	const calculateTAW = () => {
		console.log(rows);
	};

	const [valueActorSelection, setValueActorSelection] = useState("");

	// handle open modal
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 350 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell align='right'>TT</TableCell>
						<TableCell align='right'>Loại Actor</TableCell>
						<TableCell align='right'>Số tác nhân</TableCell>
						<TableCell align='right'>Điểm của từng loại tác nhân</TableCell>
						<TableCell align='right'>Chỉnh sửa</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.length > 0 &&
						rows.map((row, index) => (
							<TableRow
								key={index}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell align='center'>{index + 1}</TableCell>
								<TableCell align='center'>{row.actorType}</TableCell>
								<TableCell align='center'>{row.numberActor}</TableCell>
								<TableCell align='center'>{row.point}</TableCell>
								<TableCell align='center'>
									<IconButton
										color='secondary'
										aria-label='addRow'
										// onClick={handleAddRow}
									>
										<ChangeCircleIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
			<Grid container item>
				{/* add new line */}
				{/* <ModelComponent open={open} handleClose={handleClose}  /> */}
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
							x1
							<CustomSelect
								inputLabel='Loại actor'
								value={valueActorSelection}
								listSelection={listSelection}
								onChange={(e) => setValueActorSelection(e.target.value)}
							/>
						</div>
					</Box>
				</Modal>

				<Grid item xs={12} style={{ marginTop: "1rem", marginBottom: "1rem" }}>
					<IconButton
						color='secondary'
						aria-label='addRow'
						onClick={handleOpen}>
						<AddIcon />
					</IconButton>
				</Grid>

				<Grid item xs={12} style={{ marginBottom: "1rem" }}>
					<Button
						style={{ marginRight: "1rem", marginBottom: "1rem" }}
						className='button-check'
						variant='contained'
						size='small'
						onClick={calculateTAW}>
						Calculate
					</Button>
					<b>TAW</b>
					<span style={{ fontSize: "10px" }}>
						(Số tác nhân x Trọng số)
					</span> = <b>0</b>
				</Grid>
			</Grid>
		</TableContainer>
	);
}
