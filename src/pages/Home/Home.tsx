import * as React from "react";
import { postLinkData } from "../../utils";
import { Footer } from "./Footer";
import { StyledButton, StyledDiv, StyledTextField } from "./Home.styles";

export const Home: React.FC = () => {
    const [shortUrl, setShortUrl] = React.useState("")
    const [isLoading, setIsloading] = React.useState(false);

    const handleSubmit =  (event: any) => {
        event.preventDefault();
        setIsloading(true);
        return postLinkData(event.target.linkSubmit.value).then(function(data) { setIsloading(false); setShortUrl(`gotiny.cc/${data[0].code}`)})
    };

    return (
    <div>
        <StyledDiv>
        <h1>Short-ly</h1>
        <form onSubmit={handleSubmit}>
        <StyledTextField id="linkSubmit" label={"Enter link"} maxRows={1} size="small" variant="filled"></StyledTextField>
        <StyledButton variant="outlined" type="submit">Submit</StyledButton>
        </form>
        <p>{isLoading ? "Loading..." : shortUrl}</p>
        </StyledDiv>
        <Footer />
    </div>
    )
}