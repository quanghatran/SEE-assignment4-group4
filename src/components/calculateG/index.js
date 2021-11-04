import Grid from "@mui/material/Grid";
import CustomInput from "../controls/CustomInput";
import SendIcon from "@mui/icons-material/Send";
import { Button, Paper } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import TAWComponent from "./TAW";
import TBFComponent from "./TBF";

const CalculateG = () => {
	const [resultG, setResultG] = useState(null);

	const [valueInput, handleValueInput] = useState({
		valueE: 0,
		valueP: 0,
		valueH: 0,
	});

	const [TAW, SetTAW] = useState(null);

	const setCustomInputChange = (event) => {
		handleValueInput({
			...valueInput,
			[event.target.name]: event.target.value,
		});
	};

	const calculateG = () => {
		setResultG(
			Math.round(
				1.4 * valueInput.valueE * valueInput.valueP * valueInput.valueH
			)
		);
	};
	return (
		<Paper style={{ padding: "1rem" }}>
			<h2>Giá trị phần mềm G</h2>
			<Box sx={{ width: "100%", textAlign: "center" }}>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid container item xs={12} sm={6}>
						<Grid item xs={12}>
							<h3>TÍNH ĐIỂM CỦA TỪNG TÁC NHÂN</h3>
							<TAWComponent />
						</Grid>
					</Grid>
					<Grid container item xs={12} sm={6}>
						<Grid item xs={12}>
							<h3>TÍNH ĐIỂM CÁC TRƯỜNG HỢP SỬ DỤNG</h3>
							<TBFComponent />
						</Grid>
					</Grid>
				</Grid>
			</Box>
			<div>
				<h4>
					<Button
						className='button-check'
						variant='contained'
						size='small'
						style={{ marginRight: "20px" }}
						onClick={calculateG}>
						Calculate
					</Button>
					G = 1.4 x E x P x H = {resultG === null ? "..." : resultG}
				</h4>
			</div>
		</Paper>
	);
};

export default CalculateG;
