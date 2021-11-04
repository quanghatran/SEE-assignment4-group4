import "./App.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// const Item = styled(Paper)(({ theme }) => ({
// 	...theme.typography.body2,
// 	padding: theme.spacing(1),
// 	textAlign: "center",
// 	color: theme.palette.text.secondary,
// }));

function App() {
	const [result, setResult] = useState(null);
	const [inputField, handleInputField] = useState({
		test1: 2,
		test2: 1,
		test3: 0,
		test4: 0,
		test5: 0,
	});

	const handleClickCheck = () => {
		console.log(1);
		setResult(inputField.test1 + inputField.test2);
	};

	const handleChange = (e) => {
		handleInputField(e.target.value);
	};

	return (
		<div className='App'>
			<h1>Xác định chi phí phần mềm</h1>

			<Box sx={{ width: "100%", textAlign: "center" }}>
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={3}>
						<TextField
							required
							id='1'
							label='Test'
							placeholder='test'
							size='small'
							value={inputField.test1}
							onChange={(e) => handleChange(e)}
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							required
							id='2'
							label='Test'
							placeholder='test'
							size='small'
							value={inputField.test2}
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							required
							id='3'
							label='Test'
							placeholder='test'
							size='small'
							value={inputField.test3}
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							required
							id='4'
							label='Test'
							placeholder='test'
							size='small'
							value={inputField.test4}
						/>
					</Grid>
					<div className='button-check-cover'>
						<Button
							className='button-check'
							variant='contained'
							onClick={handleClickCheck}
							endIcon={<SendIcon />}>
							Send
						</Button>
					</div>
				</Grid>
			</Box>

			<h1>Kết quả: Gpm = {result === null ? "..." : result}</h1>
		</div>
	);
}

export default App;
