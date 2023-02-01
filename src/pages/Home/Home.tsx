import * as React from "react";
import { postLinkData } from "../../utils";
import { Footer } from "./Footer";
import { StyledButton, StyledDiv, StyledForm, StyledImage, StyledLinkContainer, StyledTextField } from "./Home.styles";
import Images from "../../assets/images";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";

export const Home: React.FC = () => {
  const [shortUrl, setShortUrl] = React.useState("");
  const [isLoading, setIsloading] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setIsloading(true);
    return postLinkData(event.target.linkSubmit.value).then(function (data) {
      setIsloading(false);
      setShortUrl(`gotiny.cc/${data[0].code}`);
    });
  };

  return (
    <div>
      <StyledDiv>
        <StyledImage src={Images[0]} alt="S-Logo" />
        <h1>Short-ly</h1>
        <StyledForm onSubmit={handleSubmit}>
          <StyledTextField
            id="linkSubmit"
            label={"Enter link to shorten..."}
            maxRows={1}
            size="small"
            variant="filled"
          ></StyledTextField>
          <StyledButton variant="outlined" type="submit">
            Submit
          </StyledButton>
        </StyledForm>
        <StyledLinkContainer>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            shortUrl && (
              <p>
                {shortUrl}{" "}
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(shortUrl);
                    enqueueSnackbar("Link copied successfully!");
                  }}
                >
                  <ContentCopyIcon />
                </Button>
              </p>
            )
          )}
        </StyledLinkContainer>
      </StyledDiv>
      <Footer />
    </div>
  );
};
