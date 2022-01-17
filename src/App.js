import { Button, Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
	// input
	const [days, setDays] = useState("");
	const [unit, setUnit] = useState("");
	const [BCWS, setBCWS] = useState("");
	const [ACWP, setACWP] = useState("");
	const [BCWP, setBCWP] = useState("");
	const [BAC, setBAC] = useState("");

	// output
	const [SV, setSV] = useState("");
	const [SPI, setSPI] = useState("");
	const [CV, setCV] = useState("");
	const [CPI, setCPI] = useState("");
	const [ETC, setETC] = useState("");

	// flag
	const [isDone, setIsDone] = useState(false);
	const [isEstimate, setIsEstimate] = useState(false);

	const handleCalculate = () => {
		setTimeout(() => {
			setIsDone(true);
		}, 500);
	};
	useEffect(() => {
		setSV(BCWP - BCWS);
		setSPI((BCWP / BCWS).toFixed(2));
		setCV(BCWP - ACWP);
		setCPI((BCWP / ACWP).toFixed(2));
		setETC(((BAC - BCWP) / CPI).toFixed(2));
	}, [isDone]);

	const handleEstimate = () => {
		setTimeout(() => {
			setIsEstimate(true);
		}, 500);
	};

	useEffect(() => {
		setETC(((BAC - BCWP) / CPI).toFixed(2));
	}, [isEstimate]);

	return (
		<div className='App'>
			<Container>
				<h1>ETC Calculator</h1>

				<Box sx={{ width: "100%", textAlign: "center" }}>
					<Box sx={{ width: "100%", textAlign: "center" }}>
						<Grid
							container
							rowSpacing={1}
							columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
							<Grid container item xs={12} sm={6}>
								<Grid item xs={12}>
									<h2 style={{ marginBottom: "2rem" }}>INPUT VALUES</h2>
									<Grid container spacing={2}>
										<Grid item xs={6}>
											<Typography variant='button' display='block' gutterBottom>
												The days of the project
											</Typography>
											<TextField
												id='days'
												label='Days'
												variant='outlined'
												required
												value={days}
												onChange={(e) => setDays(e.target.value)}
											/>
										</Grid>
										<Grid item xs={6}>
											<Typography variant='button' display='block' gutterBottom>
												The unit
											</Typography>
											<TextField
												id='unit'
												label='($)'
												variant='outlined'
												value={unit}
												required
												onChange={(e) => setUnit(e.target.value)}
											/>
										</Grid>
										<Grid item xs={6}>
											<Typography variant='button' display='block' gutterBottom>
												Budgeted cost of work scheduled
											</Typography>
											<TextField
												id='bcws'
												label='BCWS'
												variant='outlined'
												value={BCWS}
												required
												onChange={(e) => setBCWS(e.target.value)}
											/>
										</Grid>
										<Grid item xs={6}>
											<Typography variant='button' display='block' gutterBottom>
												Actual cost of work performed
											</Typography>
											<TextField
												id='acwp'
												label='ACWP'
												variant='outlined'
												value={ACWP}
												required
												onChange={(e) => setACWP(e.target.value)}
											/>
										</Grid>
										<Grid item xs={6}>
											<Typography variant='button' display='block' gutterBottom>
												Budgeted cost of work performed
											</Typography>
											<TextField
												id='bcwp'
												label='BCWP'
												variant='outlined'
												value={BCWP}
												required
												onChange={(e) => setBCWP(e.target.value)}
											/>
										</Grid>
										<Grid item xs={6}>
											<Typography variant='button' display='block' gutterBottom>
												Budgeted cost at completion
											</Typography>
											<TextField
												id='bac'
												label='BAC'
												variant='outlined'
												value={BAC}
												required
												onChange={(e) => setBAC(e.target.value)}
											/>
										</Grid>
									</Grid>
									<Button
										style={{ marginTop: "2rem" }}
										size='large'
										variant='contained'
										onClick={handleCalculate}>
										Calculate
									</Button>
								</Grid>
							</Grid>
							<Grid container item xs={12} sm={6}>
								<Grid item xs={12}>
									<h2 style={{ marginBottom: "2rem" }}>OUTPUT</h2>
									{!isDone ? (
										<div>Waiting...</div>
									) : (
										<div>
											<div>
												<p>
													Tiến trình dự án tại ngày thứ: <b>{days}</b>
												</p>
												{/* -------------- */}
												<p>
													Giá trị công việc bị trễ SV = <b>{SV}$</b> và SPI ={" "}
													<b>{SPI * 100}%</b>
												</p>
												{/* -------------- */}
												{CV >= 0 ? (
													<div>
														<p>
															Chi phí dự án đang lãi CV = <b>{CV}$</b> và CPI ={" "}
															<b>{CPI * 100}%</b>
														</p>
													</div>
												) : (
													<div>
														<p>
															Chi phí dự án đang lỗ CV = <b>{CV * -1}$</b> và
															CPI = <b>{CPI * 100}%</b>
														</p>
													</div>
												)}
											</div>
											<Button
												style={{ marginTop: "2rem", marginBottom: "2rem" }}
												size='large'
												color='secondary'
												variant='contained'
												onClick={handleEstimate}>
												Estimate
											</Button>
											<div>
												{!isEstimate ? (
													<div>Waiting...</div>
												) : (
													<div>
														Chi phí cần để hoàn thành hết công việc còn lại: ETC
														= <b>{ETC}$</b>
													</div>
												)}
											</div>
										</div>
									)}
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</div>
	);
}

export default App;
