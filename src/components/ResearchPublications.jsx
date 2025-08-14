import React from "react";
import "./ResearchPublications.css";

const ResearchPublications = () => {
    return (
        <section className="research-section">
            {/* Header */}
            <div className="research-header">
                <h1>Research Publications</h1>
                <p>
                    Contributing to the academic community through research and innovation
                </p>
            </div>

            {/* Publication Card */}
            <div className="publication-card">
                <div className="pub-content">
                    <div className="pub-title-row">
                        <h2>Stock Market Prediction Using Multi-Filtered LSTM Approach</h2>
                        <span className="pub-status">Submited</span>
                    </div>

                    <p>
                        This paper presents a novel multi-filtered LSTM approach for predicting
                        stock market trends with improved accuracy and reduced volatility.
                    </p>

                    {/* Optimized Conference Information */}
                    <div className="pub-extra-info">
                        <p>Presented <em>"Stock Market Prediction Using Multi-Filtered LSTM Approach"</em> at <strong>ICACIT 2025, Technocrats Institute of Technology, Bhopal</strong>.</p>
                        {/*<p>📌 Presented by: Manoj Kumar <br />🖥️ Delivered online, reaching a wider academic audience.<br />👥 <strong>Co-authors:</strong> B. Revathi, Tejavath Dindi Vinayak, Sai Praneeth Bhattu, Nomula Kowshik Anand <br />🏛️ <strong>Institution:</strong> CMR College of Engineering & Technology • 📚 <strong>Paper ID:</strong> ICACIT2025/AIML/188</p> */}
                    </div>

                    <div className="keywords">
                        <span>Machine Learning</span>
                        <span>Deep Learning</span>
                        <span>LSTM Algorithm</span>
                        <span>Sentiment Analysis</span>
                        <span>Technical Indicators</span>
                    </div>

                    <div className="pub-buttons">
                        <a href="https://example.com/view" className="btn" target="_blank" rel="noreferrer">
                            <i className="fas fa-external-link-alt"></i> View
                        </a>

                        <a href="/CameraReadyPaper.pdf" className="btn" download>
                            <i className="fas fa-download"></i> PDF
                        </a>
                    </div>

                </div>
            </div>

            {/* Collaboration Box */}
            <div className="collaboration-box">
                <h2>Research Collaboration</h2>
                <p>
                    Interested in collaborating on research projects or have questions
                    about my work? I’m always open to discussing new ideas and
                    opportunities in technology and innovation.
                </p>
                <a
                    href="mailto:vinayaktejavath9@gmail.com?subject=Collaboration%20Inquiry&body=Hello%20Vinayak,%0D%0AI%20would%20like%20to%20collaborate%20on..."
                    className="collab-btn"
                >
                    🤝 Let’s Collaborate
                </a>
            </div>
        </section>
    );
};

export default ResearchPublications;
