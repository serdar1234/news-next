import { CSSProperties } from "react";

export default function LoadingNews() {
  const style: CSSProperties = {
    textAlign: "center",
  };
  return <h1 style={style}>Loading news, please wait...</h1>;
}
