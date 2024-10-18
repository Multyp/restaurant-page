import baratieImage from './assets/baratieonepiece.jpg';

export function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="text-center">
            <h1 class="text-5xl font-bold mb-6 text-gray-800">Welcome to Baratie</h1>
            <p class="text-xl mb-8 text-gray-600">Experience Grand Line Cuisine like never before</p>
            <div class="relative">
                <img src="${baratieImage}" alt="Baratie Restaurant" class="w-full h-96 object-cover rounded-lg shadow-2xl">
                <div class="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <p class="text-white text-3xl font-bold shadow-text">A Culinary Adventure Awaits</p>
                </div>
            </div>
            <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="card p-6">
                    <h2 class="text-2xl font-semibold mb-4 text-gray-800">Exquisite Flavors</h2>
                    <p class="text-gray-600">Savor dishes inspired by the Grand Line's diverse cultures and ingredients.</p>
                </div>
                <div class="card p-6">
                    <h2 class="text-2xl font-semibold mb-4 text-gray-800">Master Chefs</h2>
                    <p class="text-gray-600">Our culinary team is led by world-renowned chefs, including the legendary Sanji.</p>
                </div>
                <div class="card p-6">
                    <h2 class="text-2xl font-semibold mb-4 text-gray-800">Unique Atmosphere</h2>
                    <p class="text-gray-600">Dine in our floating restaurant with stunning views of the vast ocean.</p>
                </div>
            </div>
        </div>
    `;
}
