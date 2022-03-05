import React from "react"
interface Props {
  text: string
};

export const What = ({text}: Props) => {
    return <div style={{ color: "red" }}>Hello {text}</div>
}

export default What