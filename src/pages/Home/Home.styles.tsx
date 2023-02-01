import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

export const StyledDiv = styled("div")({
    "@media (max-width: 512px)": {
        top: "25%",
        left: "0%"
    },
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // flexDirection: "column",
    display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "0",
  minWidth: "320px",
  minHeight: "100vh",
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