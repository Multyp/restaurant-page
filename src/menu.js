export function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <style>
            .menu-section {
                position: relative;
                padding: 6rem 2rem;
                background: linear-gradient(to right, #1a1a1a, #2d3436);
                min-height: 100vh;
            }

            .menu-content {
                max-width: 1400px;
                margin: 0 auto;
                position: relative;
                z-index: 2;
            }

            .menu-title {
                font-size: 4rem;
                font-weight: 800;
                background: linear-gradient(135deg, #fff 0%, #64b5f6 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin-bottom: 1rem;
                animation: fadeInUp 0.8s ease forwards;
            }

            .menu-subtitle {
                font-size: 1.5rem;
                color: #e0e0e0;
                margin-bottom: 4rem;
                opacity: 0;
                animation: fadeInUp 0.8s ease forwards 0.2s;
            }

            .menu-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: 3rem;
                margin-bottom: 4rem;
            }

            .menu-card {
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                overflow: hidden;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                opacity: 0;
                animation: fadeInUp 0.8s ease forwards 0.4s;
            }

            .menu-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            }

            .menu-card img {
                width: 100%;
                height: 300px;
                object-fit: cover;
                transition: transform 0.5s ease;
            }

            .menu-card:hover img {
                transform: scale(1.05);
            }

            .menu-card-content {
                padding: 2rem;
            }

            .menu-card h2 {
                color: #fff;
                font-size: 1.8rem;
                font-weight: 600;
                margin-bottom: 1.5rem;
            }

            .menu-items {
                list-style: none;
            }

            .menu-items li {
                color: #b0b0b0;
                padding: 0.8rem 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                transition: color 0.3s ease;
                display: flex;
                align-items: center;
            }

            .menu-items li:last-child {
                border-bottom: none;
            }

            .menu-items li::before {
                content: '•';
                color: #64b5f6;
                margin-right: 1rem;
                font-size: 1.2rem;
            }

            .menu-items li:hover {
                color: #fff;
            }

            .view-menu-btn {
                background: linear-gradient(135deg, #64b5f6 0%, #3490dc 100%);
                color: white;
                padding: 1rem 2.5rem;
                border-radius: 50px;
                border: none;
                font-size: 1.1rem;
                font-weight: 600;
                cursor: pointer;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                opacity: 0;
                animation: fadeInUp 0.8s ease forwards 0.6s;
            }

            .view-menu-btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 10px 20px rgba(100, 181, 246, 0.2);
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
                .menu-section {
                    padding: 4rem 1rem;
                }

                .menu-title {
                    font-size: 2.5rem;
                }

                .menu-subtitle {
                    font-size: 1.2rem;
                }

                .menu-grid {
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }

                .menu-card img {
                    height: 250px;
                }
            }
        </style>

        <div class="menu-section">
            <div class="menu-content">
                <h1 class="menu-title">Our Menu</h1>
                <p class="menu-subtitle">Delicacies from across the Grand Line</p>
                
                <div class="menu-grid">
                    <div class="menu-card">
                        <img src="https://images.unsplash.com/photo-1552863474-b5b88c5290fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" alt="Appetizers">
                        <div class="menu-card-content">
                            <h2>Appetizers</h2>
                            <ul class="menu-items">
                                <li>Sea King Carpaccio</li>
                                <li>Alabasta Spice Balls</li>
                                <li>Skypeia Cloud Puffs</li>
                            </ul>
                        </div>
                    </div>

                    <div class="menu-card">
                        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" alt="Main Courses">
                        <div class="menu-card-content">
                            <h2>Main Courses</h2>
                            <ul class="menu-items">
                                <li>All Blue Seafood Platter</li>
                                <li>Drum Island Venison Steak</li>
                                <li>Vegapunk's Futuristic Fusion Bowl</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <button class="view-menu-btn">View Full Menu</button>
            </div>
        </div>
    `;
}
