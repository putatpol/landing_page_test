import React from "react";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Breadcrumbs = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ py: 0.5, borderBottom: 1, borderColor: "#E3E3E3" }}
    >
      <MuiBreadcrumbs aria-label="breadcrumb" separator="›">
        <Link
          underline="hover"
          sx={{
            color: "#999999",
            fontSize: { xs: "12px", md: "1rem" },
            fontFamily: "outfit, sans-serif",
          }}
          href="/"
          onClick={handleClick}
        >
          メガネのOWNDAYS トップ
        </Link>
        <Link
          underline="hover"
          sx={{
            color: "#999999",
            fontSize: { xs: "12px", md: "1rem" },
            fontFamily: "outfit, sans-serif",
          }}
          href="#"
          onClick={handleClick}
        >
          ニュース
        </Link>
        <Typography
          sx={{
            color: "black",
            fontSize: { xs: "12px", md: "1rem" },
            fontFamily: "outfit, sans-serif",
          }}
        >
          みんなメガネ割
        </Typography>
      </MuiBreadcrumbs>
    </Container>
  );
};

export default Breadcrumbs;
