import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

export const StyledDiv = styled("div")({
    position: "fixed",
    top: "40%",
    left: "41%",
    textAlign: "center"
})

export const StyledTextField = styled(TextField)({
    marginLeft: "30px",
    background: "white",
    // height: "2rem"
})

export const StyledButton = styled(Button)({
    marginTop: "6px",
    marginLeft: "10px",
    // height: "2rem"
})