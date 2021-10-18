import React from 'react'
import 'styles/Loading.css'
import { Spinner, Container, Image } from "react-bootstrap";
import PacmanLoader from "react-spinners/PacmanLoader"

import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


export const Loading = () => {
  
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="d-block w-100 centrar">
        <div className="d-block w-100 centrar">
        <PacmanLoader color={"#5e4790"}  css={override} size={50} speedMultiplier={1} />
        </div>
        <br />
        <br />
        <span className="d-block w-100 mx-5 centrar text-center fuente4">Loading...</span>
      </div>
      
      
    </>
  )
}