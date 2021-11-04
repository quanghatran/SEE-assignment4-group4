import AddIcon from "@mui/icons-material/Add";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { Button, Grid, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import CustomInput from "../../controls/CustomInput";
// import CustomSelect from "../../controls/CustomSelect";

export default function TBFComponent() {
	// const [point1, setPoint1] = useState(5 * 1 * num1);
	// const [point2, setPoint2] = useState(10 * 1 * num2);
	// const [point3, setPoint3] = useState(15 * 1 * num3);
	// const [point4, setPoint4] = useState(5 * 1.2 * num4);
	// const [point5, setPoint5] = useState(10 * 1.2 * num5);
	// const [point6, setPoint6] = useState(15 * 1 * num6);
	// const [point7, setPoint7] = useState(5 * 1.5 * num7);
	// const [point8, setPoint8] = useState(10 * 1.5 * num8);
	// const [point9, setPoint9] = useState(15 * 1.5 * num9);

	const [numbersUse, setNumbersUse] = useState({
		num1: 4,
		num2: 21,
		num3: 0,
		num4: 0,
		num5: 0,
		num6: 0,
		num7: 0,
		num8: 0,
		num9: 0,
	});

	const [rows, handleRows] = useState([
		{
			type: "B (Đơn giản)",
			numberUse: numbersUse.num1,
			pointEachType: 5 * 1 * numbersUse.num1,
		},
		{
			type: "B (Trung bình)",
			numberUse: numbersUse.num2,
			pointEachType: 10 * 1 * numbersUse.num2,
		},
		{
			type: "B (Phức tạp)",
			numberUse: numbersUse.num3,
			pointEachType: 15 * 1 * numbersUse.num3,
		},
		{
			type: "M (Đơn giản)",
			numberUse: numbersUse.num4,
			pointEachType: 5 * 1.2 * numbersUse.num4,
		},
		{
			type: "M (Trung bình)",
			numberUse: numbersUse.num5,
			pointEachType: 10 * 1.2 * numbersUse.num5,
		},
		{
			type: "M (Phức tạp)",
			numberUse: numbersUse.num6,
			pointEachType: 15 * 1.2 * numbersUse.num6,
		},
		{
			type: "T (Đơn giản)",
			numberUse: numbersUse.num7,
			pointEachType: 5 * 1.5 * numbersUse.num7,
		},
		{
			type: "T (Trung bình)",
			numberUse: numbersUse.num8,
			pointEachType: 10 * 1.5 * numbersUse.num8,
		},
		{
			type: "T (Phức tạp)",
			numberUse: numbersUse.num9,
			pointEachType: 15 * 1.5 * numbersUse.num9,
		},
	]);

	const [TBF, setTBF] = useState(0);

	const calculateTBF = (rows) => {
		const sumPointEachType = rows
			.map((item) => item.pointEachType)
			.reduce((prev, next) => prev + next);

		setTBF(sumPointEachType);
	};

	const handleChange = (event) => {
		setNumbersUse({
			...numbersUse,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 350 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell align='left'>TT</TableCell>
						<TableCell align='left'>Loại </TableCell>
						<TableCell align='left'>Số THSD</TableCell>
						<TableCell align='left'>Điểm của từng loại THSD</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.length > 0 &&
						rows.map((row, index) => (
							<TableRow
								key={index}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell align='left'>{index + 1}</TableCell>
								<TableCell align='left'>{row.type}</TableCell>
								<TableCell align='left'>
									<CustomInput
										label='value'
										value={row.numberUse}
										onCustomInputChange={handleChange}
									/>
								</TableCell>
								<TableCell align='left'>{row.pointEachType}</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
			<Grid container item>
				<Grid item xs={12} style={{ marginBottom: "1rem" }}>
					<Button
						style={{ marginRight: "1rem", marginBottom: "1rem" }}
						className='button-check'
						variant='contained'
						size='small'
						onClick={(e) => calculateTBF(rows)}>
						Calculate
					</Button>
					<b>TBF</b> = <b>{TBF}</b>
				</Grid>
			</Grid>
		</TableContainer>
	);
}
