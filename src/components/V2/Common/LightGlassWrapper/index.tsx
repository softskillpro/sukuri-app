interface LightGlassWrapperProps {
  children: React.ReactNode
}

import { Children } from "react"
import { WrapperDiv, ChildWrapper } from "./styles"

export const LightGlassWrapper = ({ children }: LightGlassWrapperProps) => {
  return (
    <WrapperDiv
      style={{
        position: "relative",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          height: "100%",
          width: "100%",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "15px",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          backdropFilter: "blur(10px) brightness(120%)",
          boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.35)",
        }}
      />
      <ChildWrapper>{children}</ChildWrapper>
    </WrapperDiv>
  )
}
