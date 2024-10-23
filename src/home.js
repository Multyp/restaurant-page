import baratieImage from './assets/baratieonepiece.jpg';

export function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <style>
            .hero-section {
                position: relative;
                overflow: hidden;
                padding: 4rem 2rem;
                background: linear-gradient(to right, #1a1a1a, #2d3436);
            }

            .parallax-bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url(${baratieImage});
                background-size: cover;
                background-position: center;
                background-attachment: fixed;
                filter: brightness(0.4);
                z-index: 1;
            }

            .content-wrapper {
                position: relative;
                z-index: 2;
                max-width: 1400px;
                margin: 0 auto;
                padding-top: 2rem;
            }

            .main-title {
                font-size: 4.5rem;
                font-weight: 800;
                background: linear-gradient(135deg, #fff 0%, #64b5f6 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin-bottom: 1.5rem;
                transform: translateY(20px);
                opacity: 0;
                animation: fadeInUp 0.8s ease forwards;
            }

            .subtitle {
                font-size: 1.5rem;
                color: #e0e0e0;
                margin-bottom: 3rem;
                transform: translateY(20px);
                opacity: 0;
                animation: fadeInUp 0.8s ease forwards 0.2s;
            }

            .feature-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                margin-top: 4rem;
            }

            .feature-card {
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                padding: 2rem;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                cursor: pointer;
                transform: translateY(20px);
                opacity: 0;
                animation: fadeInUp 0.8s ease forwards 0.4s;
            }

            .feature-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                background: rgba(255, 255, 255, 0.1);
            }

            .feature-card h2 {
                color: #fff;
                font-size: 1.8rem;
                font-weight: 600;
                margin-bottom: 1rem;
            }

            .feature-card p {
                color: #b0b0b0;
                line-height: 1.6;
            }

            .image-container {
                position: relative;
                width: 100%;
                height: 500px;
                border-radius: 30px;
                overflow: hidden;
                transform: translateY(20px);
                opacity: 0;
                animation: fadeInUp 0.8s ease forwards 0.3s;
            }

            .image-container img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.5s ease;
            }

            .image-overlay {
                position: absolute;
                inset: 0;
                background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .overlay-text {
                color: #fff;
                font-size: 2.5rem;
                font-weight: 700;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
                letter-spacing: 2px;
            }

            @keyframes fadeInUp {
                from {
                    transform: translateY(20px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            @media (max-width: 768px) {
                .main-title {
                    font-size: 3rem;
                }
                
                .subtitle {
                    font-size: 1.2rem;
                }

                .image-container {
                    height: 300px;
                }

                .overlay-text {
                    font-size: 1.8rem;
                }
            }
        </style>

        <div class="hero-section">
            <div class="parallax-bg"></div>
            <div class="content-wrapper">
                <h1 class="main-title">Welcome to Baratie</h1>
                <p class="subtitle">Experience Grand Line Cuisine like never before</p>

                <div class="image-container">
                    <img src="${baratieImage}" alt="Baratie Restaurant">
                    <div class="image-overlay">
                        <p class="overlay-text">A Culinary Adventure Awaits</p>
                    </div>
                </div>

                <div class="feature-grid">
                    <div class="feature-card">
                        <h2>Exquisite Flavors</h2>
                        <p>Savor dishes inspired by the Grand Line's diverse cultures and ingredients, crafted with passion and precision by our expert culinary team.</p>
                    </div>
                    <div class="feature-card">
                        <h2>Master Chefs</h2>
                        <p>Our culinary team is led by world-renowned chefs, including the legendary Sanji, bringing years of expertise from across the seas.</p>
                    </div>
                    <div class="feature-card">
                        <h2>Unique Atmosphere</h2>
                        <p>Dine in our floating restaurant with stunning panoramic views of the vast ocean, creating an unforgettable dining experience.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}