import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import LinkTo from "../LinkTo";
import NorthIcon from "@mui/icons-material/North";
import Link from "next/link";
export default function FooterDefault() {
  return (
    <>
      <Container sx={{ bgcolor: "background.default" }}>
        <Box
          mt={5}
          px={"20px"}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            justifyItems: "center",
          }}
          display="flex"
        >
          <Box>
            <img src="/svgs/ricky.svg" alt="ricky and morty" />
          </Box>

          <Box
            display={"flex"}
            gap={1}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="subtitle2">Voltar ao topo</Typography>
            <IconButton color="primary" sx={{ border: "2px solid black" }}>
              <NorthIcon />
            </IconButton>
          </Box>
        </Box>
        <Divider sx={{ mt: 10, mb: 4, backgroundColor: "primary.main" }} />

        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="subtitle1">
            &copy;{new Date().getFullYear()}
          </Typography>
          <Typography variant="subtitle1">
            Desenvolvido com 💙 por{" "}
            <Link href="https://github.com/EdgarSantiago">EdgarSantiago</Link>,{" "}
            <Link href="https://github.com/RafaelDiasFrontend">
              Rafael Dias
            </Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
}
