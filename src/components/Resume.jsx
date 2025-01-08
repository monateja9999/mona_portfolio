import React from 'react';

const Resume = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f9f9f9', // Optional: Add a background color
            }}
        >
            <a
                href="/assets/Mona-Teja-Kurakula-Resume.pdf"
                download="Mona-Teja-Kurakula-Resume.pdf"
                style={{ textDecoration: 'none' }}
            >
                <button
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#fff',
                        backgroundColor: '#007bff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Download CV
                </button>
            </a>
        </div>
    );
};

export default Resume;
