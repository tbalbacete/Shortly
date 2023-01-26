// import { FormControl } from "@mui/material";
import * as React from "react";
import { StyledButton, StyledTextField } from "./Home.styles";

export const Home: React.FC = () => {
    const [shortUrl, setShortUrl] = React.useState("")
    const [isLoading, setIsloading] = React.useState(false);
    async function postData(url: string) {
        const response = await fetch("https://gotiny.cc/api", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({input: `${url}`})

        });
        return response.json();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit =  (event: any) => {
        event.preventDefault();
        setIsloading(true);
        return postData(event.target.linkSubmit.value).then(function(data) { setIsloading(false); setShortUrl(`gotiny.cc/${data[0].code}`)})
    };

    return (
    <div>
        <h1>Short-ly</h1>
        <form onSubmit={handleSubmit}>
        <StyledTextField id="linkSubmit" label={"Enter link"} maxRows={1} size="small" variant="filled"></StyledTextField>
        <StyledButton variant="outlined" type="submit">Submit</StyledButton>
        </form>
        <p>{isLoading ? "Loading..." : shortUrl}</p>
    </div>
    )
}