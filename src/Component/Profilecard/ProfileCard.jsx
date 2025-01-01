import React, { useState, useEffect } from "react";
import myImage from "../../assets/Rahul.jpg"; // Ensure the correct image path
import "./ProfileCard.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ProfileCard = () => {
    const texts = ["Cloud Engineer", "Full Stack Developer", "Tech Enthusiast"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="profile-card-container">
            <div className="profile-card">
                <div className="quote">
                    Innovating the future with <span className="text-cloud"> cloud</span> and <span className="text-cloud">Creativity</span>
                </div>
                <div className="profile-container">
                    <div className="profile-picture">
                        <img src={myImage} alt="Rahul" />
                    </div>

                    <div className="text-container">
                        <h1 className="name">Rahul</h1>
                        <div className="text">
                            <h2>
                                I am a <span className="changing-text typing-effect">{texts[currentTextIndex]}</span>
                            </h2>
                        </div>

                        <div className="buttons">
                            <button className="contact-btn">Contact</button>
                            <button className="cv-btn">Download CV</button>
                        </div>
                    </div>
                </div>

                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
