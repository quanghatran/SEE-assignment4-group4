import { Button, TextField, Typography } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function TAWComponent() {
	return (
		<div>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Typography variant='button' display='block' gutterBottom>
						The days of the project
					</Typography>
					<TextField id='outlined-basic' label='Days' variant='outlined' />
				</Grid>
				<Grid item xs={6}>
					<Typography variant='button' display='block' gutterBottom>
						The unit
					</Typography>
					<TextField id='outlined-basic' label='($)' variant='outlined' />
				</Grid>
				<Grid item xs={6}>
					<Typography variant='button' display='block' gutterBottom>
						Budgeted cost of work scheduled
					</Typography>
					<TextField id='outlined-basic' label='BCWS' variant='outlined' />
				</Grid>
				<Grid item xs={6}>
					<Typography variant='button' display='block' gutterBottom>
						Actual cost of work performed
					</Typography>
					<TextField id='outlined-basic' label='ACWP' variant='outlined' />
				</Grid>
				<Grid item xs={6}>
					<Typography variant='button' display='block' gutterBottom>
						Budgeted cost of work performed
					</Typography>
					<TextField id='outlined-basic' label='BCWP' variant='outlined' />
				</Grid>
				<Grid item xs={6}>
					<Typography variant='button' display='block' gutterBottom>
						Budgeted cost at completion
					</Typography>
					<TextField id='outlined-basic' label='BAC' variant='outlined' />
				</Grid>
			</Grid>
			<Button style={{ marginTop: "2rem" }} size='large' variant='contained'>
				Calculate
			</Button>
		</div>
	);
}
