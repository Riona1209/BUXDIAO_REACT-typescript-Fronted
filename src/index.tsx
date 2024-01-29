import React from "react";
import ReactDOMClient from "react-dom/client";
import { VersionI } from "./screens/VersionI";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<VersionI />);
