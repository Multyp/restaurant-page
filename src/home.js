import baratieImage from './assets/baratieonepiece.jpg';

export function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="relative overflow-hidden py-16 px-8 bg-gradient-to-r from-gray-900 to-gray-800">
            <div class="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed filter brightness-40" style="background-image: url(${baratieImage}); z-index: 1; filter: brightness(0.5);"></div>
            <div class="relative z-10 max-w-6xl mx-auto pt-8">
                <h1 class="text-6xl font-extrabold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent mb-6 transform translate-y-5 opacity-0 animate-fadeInUp">Welcome to Baratie</h1>
                <p class="text-xl text-gray-300 mb-12 transform translate-y-5 opacity-0 animate-fadeInUp delay-200">Experience Grand Line Cuisine like never before</p>

                <div class="relative w-full h-128 rounded-2xl overflow-hidden transform translate-y-5 opacity-0 animate-fadeInUp delay-300">
                    <img src="${baratieImage}" alt="Baratie Restaurant" class="w-full h-full object-cover transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                        <p class="text-3xl font-bold text-white text-shadow-lg tracking-wide">A Culinary Adventure Awaits</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    <div class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-transform duration-300 ease-in-out cursor-pointer transform translate-y-5 opacity-0 animate-fadeInUp delay-400 hover:translate-y-[-10px] hover:shadow-lg">
                        <h2 class="text-white text-2xl font-semibold mb-4">Exquisite Flavors</h2>
                        <p class="text-gray-400 leading-6">Savor dishes inspired by the Grand Line's diverse cultures and ingredients, crafted with passion and precision by our expert culinary team.</p>
                    </div>
                    <div class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-transform duration-300 ease-in-out cursor-pointer transform translate-y-5 opacity-0 animate-fadeInUp delay-400 hover:translate-y-[-10px] hover:shadow-lg">
                        <h2 class="text-white text-2xl font-semibold mb-4">Master Chefs</h2>
                        <p class="text-gray-400 leading-6">Our culinary team is led by world-renowned chefs, including the legendary Sanji, bringing years of expertise from across the seas.</p>
                    </div>
                    <div class="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-transform duration-300 ease-in-out cursor-pointer transform translate-y-5 opacity-0 animate-fadeInUp delay-400 hover:translate-y-[-10px] hover:shadow-lg">
                        <h2 class="text-white text-2xl font-semibold mb-4">Unique Atmosphere</h2>
                        <p class="text-gray-400 leading-6">Dine in our floating restaurant with stunning panoramic views of the vast ocean, creating an unforgettable dining experience.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}