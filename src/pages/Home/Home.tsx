import * as React from "react";
import Button from "@mui/material/Button";

export const Home: React.FC = () => {
    const [shortUrl, setShortUrl] = React.useState("test")
    async function postData(url = "https://gotiny.cc/api	") {
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({input: "https://www.youtube.com"})

        });
        return response.json();
    }

    const retrieveData =  () => {
        return postData().then((data) => setShortUrl(`gotiny.cc/${data[0].code}`))
    }

    postData().then((data) => {console.log(data)})
    return (
    <div>
        <h1>Home</h1>
        <p>{shortUrl}</p>
        <Button variant="outlined" onClick={() => retrieveData()}>Submit</Button>
    </div>
    )
}