export function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <style>
            .contact-section {
                position: relative;
                padding: 6rem 2rem;
                background: linear-gradient(to right, #1a1a1a, #2d3436);
                min-height: 100vh;
            }

            .contact-content {
                max-width: 1400px;
                margin: 0 auto;
                position: relative;
                z-index: 2;
            }

            .contact-title {
                font-size: 4rem;
                font-weight: 800;
                background: linear-gradient(135deg, #fff 0%, #64b5f6 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin-bottom: 1rem;
                animation: fadeInUp 0.8s ease forwards;
            }

            .contact-subtitle {
                font-size: 1.5rem;
                color: #e0e0e0;
                margin-bottom: 4rem;
                opacity: 0;
                animation: fadeInUp 0.8s ease forwards 0.2s;
            }

            .contact-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: 3rem;
                margin-bottom: 4rem;
            }

            .contact-card {
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                padding: 2rem;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                opacity: 0;
                animation: fadeInUp 0.8s ease forwards 0.4s;
            }

            .contact-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            }

            .contact-card h2 {
                color: #fff;
                font-size: 1.8rem;
                font-weight: 600;
                margin-bottom: 1.5rem;
            }

            .contact-card p {
                color: #b0b0b0;
                margin-bottom: 1rem;
                line-height: 1.6;
            }

            .contact-card strong {
                color: #64b5f6;
                font-weight: 600;
            }

            .location-image {
                width: 100%;
                height: 250px;
                object-fit: cover;
                border-radius: 15px;
                margin: 1.5rem 0;
                transition: transform 0.5s ease;
            }

            .location-image:hover {
                transform: scale(1.03);
            }

            .reservation-btn {
                background: linear-gradient(135deg, #64b5f6 0%, #3490dc 100%);
                color: white;
                padding: 1rem 2.5rem;
                border-radius: 50px;
                border: none;
                font-size: 1.1rem;
                font-weight: 600;
                cursor: pointer;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                margin-top: 1rem;
                width: 100%;
            }

            .reservation-btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 10px 20px rgba(100, 181, 246, 0.2);
            }

            .contact-info {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .contact-info-item {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.8rem;
                background: rgba(255, 255, 255, 0.03);
                border-radius: 10px;
                transition: background 0.3s ease;
            }

            .contact-info-item:hover {
                background: rgba(255, 255, 255, 0.08);
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
                .contact-section {
                    padding: 4rem 1rem;
                }

                .contact-title {
                    font-size: 2.5rem;
                }

                .contact-subtitle {
                    font-size: 1.2rem;
                }

                .contact-grid {
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }

                .location-image {
                    height: 200px;
                }
            }
        </style>

        <div class="contact-section">
            <div class="contact-content">
                <h1 class="contact-title">Contact Us</h1>
                <p class="contact-subtitle">We'd love to hear from you</p>
                
                <div class="contact-grid">
                    <div class="contact-card">
                        <h2>Location</h2>
                        <p>Find us sailing the Grand Line</p>
                        <img src="https://images.unsplash.com/photo-1555406225-5e31a8a77e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
                             alt="Baratie Location" 
                             class="location-image">
                    </div>

                    <div class="contact-card">
                        <h2>Get in Touch</h2>
                        <div class="contact-info">
                            <div class="contact-info-item">
                                <strong>Transponder Snail:</strong> 
                                <span>Kacha-Kacha 123-456-7890</span>
                            </div>
                            <div class="contact-info-item">
                                <strong>Email:</strong> 
                                <span>info@baratie-restaurant.com</span>
                            </div>
                            <div class="contact-info-item">
                                <strong>Coordinates:</strong> 
                                <span>31°24'N 146°15'E</span>
                            </div>
                        </div>
                        <button class="reservation-btn">Make a Reservation</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
