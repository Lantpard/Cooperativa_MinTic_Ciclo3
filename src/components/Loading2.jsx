import React from 'react'
import 'styles/Loading.css'
import { Spinner, Container, Image } from "react-bootstrap";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"

import { css } from "@emotion/react";
import { CircleLoader, FadeLoader, PuffLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


export const Loading2 = () => {
  
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="d-block w-100 centrar">
        <div className="d-block w-100 centrar">
          <br />
        <PuffLoader color={"#5e4790"}  css={override} size={200} speedMultiplier={1} />
        </div>
        <br />
        <br />
        <span className="d-block w-100 mx-2 centrar text-center fuente4">
        configurando el entorno
        </span>
      </div>
      
      
    </>
  )
}