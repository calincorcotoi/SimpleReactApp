import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <div>Sory</div>
      <div> This page was not found</div>
      <Link to="/">Back to home page</Link>
    </div>
  );
}
