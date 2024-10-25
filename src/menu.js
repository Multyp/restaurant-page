export function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="menu-section bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen pt-24 pb-8 px-8 md:px-4 relative">
            <div class="menu-content max-w-screen-xl mx-auto relative z-20">
                <h1 class="menu-title text-5xl font-extrabold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent mb-4 animate-fadeInUp">Our Menu</h1>
                <p class="menu-subtitle text-xl text-gray-300 mb-16 opacity-0 animate-fadeInUp delay-200">Delicacies from across the Grand Line</p>

                <div class="menu-grid grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div class="menu-card bg-white bg-opacity-5 border border-white border-opacity-10 rounded-2xl overflow-hidden backdrop-blur-lg opacity-0 animate-fadeInUp delay-400 transition-transform duration-300 ease-out transform hover:translate-y-[-10px] hover:shadow-xl">
                        <img class="w-full h-72 object-cover transition-transform duration-500 ease-out transform hover:scale-105" src="https://images.unsplash.com/photo-1552863474-b5b88c5290fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" alt="Appetizers">
                        <div class="menu-card-content p-8">
                            <h2 class="text-white text-2xl font-semibold mb-4">Appetizers</h2>
                            <ul class="menu-items list-none">
                                <li class="text-gray-400 py-2 border-b border-white border-opacity-10 flex items-center transition-colors duration-300 ease-out hover:text-white">
                                    <span class="text-blue-400 mr-4 text-lg">•</span> Sea King Carpaccio
                                </li>
                                <li class="text-gray-400 py-2 border-b border-white border-opacity-10 flex items-center transition-colors duration-300 ease-out hover:text-white">
                                    <span class="text-blue-400 mr-4 text-lg">•</span> Alabasta Spice Balls
                                </li>
                                <li class="text-gray-400 py-2 flex items-center transition-colors duration-300 ease-out hover:text-white">
                                    <span class="text-blue-400 mr-4 text-lg">•</span> Skypeia Cloud Puffs
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="menu-card bg-white bg-opacity-5 border border-white border-opacity-10 rounded-2xl overflow-hidden backdrop-blur-lg opacity-0 animate-fadeInUp delay-400 transition-transform duration-300 ease-out transform hover:translate-y-[-10px] hover:shadow-xl">
                        <img class="w-full h-72 object-cover transition-transform duration-500 ease-out transform hover:scale-105" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" alt="Main Courses">
                        <div class="menu-card-content p-8">
                            <h2 class="text-white text-2xl font-semibold mb-4">Main Courses</h2>
                            <ul class="menu-items list-none">
                                <li class="text-gray-400 py-2 border-b border-white border-opacity-10 flex items-center transition-colors duration-300 ease-out hover:text-white">
                                    <span class="text-blue-400 mr-4 text-lg">•</span> All Blue Seafood Platter
                                </li>
                                <li class="text-gray-400 py-2 border-b border-white border-opacity-10 flex items-center transition-colors duration-300 ease-out hover:text-white">
                                    <span class="text-blue-400 mr-4 text-lg">•</span> Drum Island Venison Steak
                                </li>
                                <li class="text-gray-400 py-2 flex items-center transition-colors duration-300 ease-out hover:text-white">
                                    <span class="text-blue-400 mr-4 text-lg">•</span> Vegapunk's Futuristic Fusion Bowl
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <button class="view-menu-btn bg-gradient-to-r from-blue-400 to-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg opacity-0 animate-fadeInUp delay-600 transform hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300 ease-out">
                    View Full Menu
                </button>
            </div>
        </div>
    `;
}
