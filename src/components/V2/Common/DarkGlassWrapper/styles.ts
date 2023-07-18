import { LightGlassWrapper } from "@/components/LightGlassWrapper"
import { styled } from "@mui/material"

export const WrapperDiv = styled("div")(({ theme }) => ({
  padding: 40,

  position: "relative",

  borderRadius: 'inherit',

  [theme.breakpoints.down("xl")]: {
    padding: 30,
  },

  [theme.breakpoints.down("md")]: {
    padding: 15,
  },

  [theme.breakpoints.down("sm")]: {
    padding: 10,
  },

  [theme.breakpoints.down("xs")]: {
    padding: 5,
  },
}))

export const ChildWrapper = styled("span")(({ theme }) => ({
  width: "100%",
  position: "relative",
  zIndex: 5,
}))
