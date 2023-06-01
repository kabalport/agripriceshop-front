import * as React from "react";
import AppBar from "../components/app-bar";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {Box} from "@mui/material";

const mdTheme = createTheme();
function DashboardContent() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="absolute" open={open} color="transparent">
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}