import "./App.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Button, Container } from "@mui/material";
import CustomInput from "./components/controls/CustomInput";
import CalculateG from "./components/calculateG";

function App() {
	const [result, setResult] = useState(null);

	// const handleClickCheck = () => {
	// 	console.log(1);
	// 	setResult(inputField.test1 + inputField.test2);
	// };

	return (
		<div className='App'>
			<Container>
				<h1>XÁC ĐỊNH CHI PHÍ PHẦN MỀM</h1>

				<Box sx={{ width: "100%", textAlign: "center" }}>
					<CalculateG />
				</Box>

				<h1>Kết quả: Gpm = {result === null ? "..." : result}</h1>
			</Container>
		</div>
	);
}

export default App;
