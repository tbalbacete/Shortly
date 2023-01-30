import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

export const StyledDiv = styled("div")({
    "@media (max-width: 512px)": {
        top: "25%",
        left: "0%"
    },
    position: "fixed",
    top: "30%",
    left: "41%",
    textAlign: "center",
})

export const StyledImage = styled("img")({
    height: "100px",
})

export const StyledTextField = styled(TextField)({
    marginLeft: "30px",
    background: "white",
})

export const StyledButton = styled(Button)({
    height: "48px",
    borderLeft: "0px",
    borderRadius: "0px 15px 15px 0px"
})

export const StyledLinkContainer = styled("div")({
    marginLeft: "30px",
})