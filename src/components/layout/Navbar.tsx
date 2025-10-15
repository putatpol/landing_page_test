"use client";

import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Divider,
} from "@mui/material";
import Image from "next/image";
import Logo from "@images/logo-owndays.svg";
import IconSearch from "@icons/icon-search.svg";
import IconHeart from "@icons/icon-heart.svg";
import IconCart from "@icons/icon-cart.svg";
import IconPhone from "@icons/icon-phone.svg";
import IconMenu from "@icons/icon-menu.svg";
import Breadcrumbs from "./Breadcrumbs";

// --- Constants ---
const PAGES = ["商品検索", "ブランド", "レンズ", "OWNDAYSについて", "店舗検索"];
const MENU_FONT = { fontFamily: "yu-gothic-pr6n, sans-serif", color: "black" };
const point = 0;

// --- Sub Components ---
function MobileMenu({
  pages,
  anchorEl,
  onOpen,
  onClose,
}: {
  pages: string[];
  anchorEl: HTMLElement | null;
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
  onClose: () => void;
}) {
  return (
    <Box sx={{ display: { xs: "flex", md: "none" }, order: { xs: 4 } }}>
      <IconButton onClick={() => console.log("Phone")} sx={{ p: 1 }}>
        <Image src={IconPhone} alt="icon phone" />
      </IconButton>
      <IconButton
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={onOpen}
        color="inherit"
      >
        <Image src={IconMenu} alt="icon menu" />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={Boolean(anchorEl)}
        onClose={onClose}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={onClose}>
            <Typography sx={MENU_FONT}>{page}</Typography>
          </MenuItem>
        ))}
        <Divider />
        {[`${point}pt (円相当)`, "Whishlist"].map((item) => (
          <MenuItem key={item} onClick={onClose}>
            <Typography sx={MENU_FONT}>{item}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

function DesktopMenu({ pages }: { pages: string[] }) {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => console.log(page)}
          sx={{
            color: "black",
            fontFamily: "mizolet, sans-serif",
            fontSize: "0.875rem",
            textTransform: "none",
          }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
}

function UserSection() {
  return (
    <Box sx={{ display: "flex", flexGrow: 0, alignItems: "center" }}>
      <Tooltip title="Profile">
        <Button
          onClick={() => console.log("Profile")}
          sx={{ px: 1, display: { xs: "none", md: "inline-flex" } }}
          disableRipple
        >
          <Avatar alt="Avatar" src="/static/images/avatar/2.jpg" />
          <Typography
            variant="body2"
            sx={{
              color: "black",
              fontFamily: "outfit, sans-serif",
              px: 1,
              textTransform: "none",
            }}
          >
            {point}pt (円相当)
          </Typography>
        </Button>
      </Tooltip>

      {[
        { title: "Search", icon: IconSearch },
        { title: "Whishlist", icon: IconHeart, hideMobile: true },
        { title: "Cart", icon: IconCart },
      ].map(({ title, icon, hideMobile }) => (
        <Tooltip title={title} key={title}>
          <IconButton
            onClick={() => console.log(title)}
            sx={{
              p: 1,
              display: {
                xs: hideMobile ? "none" : "inline-flex",
                md: "inline-flex",
              },
            }}
          >
            <Image
              src={icon}
              alt={`icon ${title.toLowerCase()}`}
              width={20}
              height={20}
            />
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
}

// --- Main Component ---
export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<HTMLElement | null>(
    null,
  );

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <header className="sticky top-0 z-50">
      {/* Notice Bar */}
      <Box
        sx={{
          backgroundColor: "#666",
          textAlign: "center",
          color: "#fff",
          py: 1,
        }}
      >
        <Typography>オンラインストア発送遅延のおしらせ</Typography>
      </Box>

      {/* Navigation */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Container
          maxWidth={false}
          sx={{ borderBottom: 1, borderColor: "#E3E3E3" }}
        >
          <Toolbar
            disableGutters
            sx={{ justifyContent: { xs: "space-between", md: "center" } }}
          >
            <MobileMenu
              pages={PAGES}
              anchorEl={anchorElNav}
              onOpen={handleOpenNavMenu}
              onClose={handleCloseNavMenu}
            />

            <Box sx={{ order: { xs: 2, md: 0 }, mr: 3 }}>
              <Image src={Logo} alt="Logo Owndays" priority />
            </Box>

            <DesktopMenu pages={PAGES} />

            <UserSection />
          </Toolbar>
        </Container>

        <Breadcrumbs />
      </AppBar>
    </header>
  );
}
