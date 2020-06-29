import React from "react";
import './style.scss';
import propTypes from "prop-types";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className={props.isHome ? "app-header is-home" : "app-header"}>
      <div className="container">
      {!props.isHome && (
        <div className="navigation">
          {props.postUrl && (
            <a href={props.postUrl} className="post-url">
              <IoMdArrowBack></IoMdArrowBack> Back to Tutorial
            </a>
          )}
          <Link to="/">Back to Lab Home</Link>
        </div>
      )}
      <a href="https://www.devaradise.com" className="logo">
          <img
            src={require("assets/images/logo.png")}
            width="200"
            alt="Devaradise"
          />
        </a>
      </div>
      {props.isHome && (
        <div className="container">
          <h1 className="page-title">React UI Component Experiments</h1>
          <p className="sub-title">
            by <a href="https://www.devaradise.com/about-syakir">Syakir Rahman</a>
          </p>
        </div>
      )}
    </div>
  );
}

Header.propTypes = {
  postUrl: propTypes.string,
  isHome: propTypes.bool,
};
