interface LightGlassWrapperProps {
  children: React.ReactNode
}

import { Children } from "react"
import { WrapperDiv, ChildWrapper } from "./styles"

export const DarkGlassWrapper = ({ children }: LightGlassWrapperProps) => {
  return (
    <>
      <div
        aria-hidden="true"
        style={{
          height: "100%",
          width: "100%",
          border: "1px solid rgba(255,255,255,0.2)",
          backgroundColor: "rgba(0,0,0,0.4)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          backdropFilter: "blur(15px)",
          filter: "drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.35)",
        }}
      />
      <ChildWrapper>{children}</ChildWrapper>
    </>
  )
}