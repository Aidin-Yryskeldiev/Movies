import { Box, Typography } from "@mui/material";

const Header = () => {
	return (
		<div>
			<Box sx={{ width: "100%", height: "80px", backgroundColor: "black" }}>
				<Typography
					sx={{
						textAlign: "center",
						color: "white",
						fontSize: "40px",
						paddingTop: "10px",
					}}>
					Kino
				</Typography>
			</Box>
		</div>
	);
};

export default Header;
