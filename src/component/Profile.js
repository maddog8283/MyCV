import React, { Component } from "react";
import imgProfile from "../component/IMAGEPROFILE/imgprofile.jpg";
import { HashLink as Link } from "react-router-hash-link";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRevealed: false,
    };
  }

  toggleReveal = () => {
    this.setState((prevState) => ({
      isRevealed: !prevState.isRevealed,
    }));
  };

  render() {
    const { isRevealed } = this.state;

    const styles = {
      card: {
        width: "300px",
        margin: "40px 0 40px 0px",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        backgroundColor: "#fff",
        fontFamily: "Roboto, sans-serif",
        position: "relative",
      },
      cardImage: {
        position: "relative",
      },
      img: {
        width: "100%",
        height: "300px",
        objectFit: "cover",
        display: "block",
      },
      btnFloating: {
        position: "absolute",
        right: "16px",
        bottom: "16px",
        cursor: "pointer",
      },
      cardContent: {
        padding: "16px",
        textAlign: "center",
      },
      cardTitle: {
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "4px",
        display: "block",
        color: "#333",
      },
      description: {
        margin: "0",
        fontSize: "14px",
        color: "#555",
      },
      cardReveal: {
        display: isRevealed ? "block" : "none",
        padding: "16px",
        borderTop: "1px solid #ddd",
        backgroundColor: "#f9f9f9",
      },
      closeIcon: {
        float: "right",
        cursor: "pointer",
      },
      socialIcons: {
        display: "flex",
        gap: "10px",
        marginTop: "10px",
        fontSize: "20px",
        justifyContent: "center",
      },
    };

    return (
      <div style={styles.card}>
        <div style={styles.cardImage}>
          <img style={styles.img} src={imgProfile} alt="Daniel Jacob" />
          <Link
            style={styles.btnFloating}
            onClick={this.toggleReveal}
            className="btn-floating halfway-fab waves-effect waves-light red"
          >
            <i className="material-icons">+</i>
          </Link>
        </div>
        <div style={styles.cardContent}>
          <span style={styles.cardTitle}>Daniel Mozad Jacob</span>
          <p style={styles.description}>Full Time College Student</p>
        </div>
        <div style={styles.cardReveal}>
          <span className="card-title grey-text text-darken-4">
            Follow Me
            <i
              className="material-icons"
              style={styles.closeIcon}
              onClick={this.toggleReveal}
            >
              Close
            </i>
          </span>
          <div style={styles.socialIcons}>
            <i className="fab fa-facebook-f grey-text text-darken-4"></i>
            <i className="fab fa-twitter grey-text text-darken-4"></i>
            <i className="fab fa-google-plus-g grey-text text-darken-4"></i>
            <Link to="https://www.instagram.com/daniel_jacob35/">
            <i className="fab fa-instagram grey-text text-darken-4"></i></Link>
          </div>
        </div>
      </div>
    );
  }
}
