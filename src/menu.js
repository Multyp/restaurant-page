export function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="text-center">
            <h1 class="text-5xl font-bold mb-6 text-gray-800">Our Menu</h1>
            <p class="text-xl mb-12 text-gray-600">Delicacies from across the Grand Line</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1552863474-b5b88c5290fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" alt="Appetizers" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h2 class="text-2xl font-semibold mb-4 text-gray-800">Appetizers</h2>
                        <ul class="text-gray-600 text-left">
                            <li>• Sea King Carpaccio</li>
                            <li>• Alabasta Spice Balls</li>
                            <li>• Skypeia Cloud Puffs</li>
                        </ul>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" alt="Main Courses" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h2 class="text-2xl font-semibold mb-4 text-gray-800">Main Courses</h2>
                        <ul class="text-gray-600 text-left">
                            <li>• All Blue Seafood Platter</li>
                            <li>• Drum Island Venison Steak</li>
                            <li>• Vegapunk's Futuristic Fusion Bowl</li>
                        </ul>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary mt-12">View Full Menu</button>
        </div>
    `;
}
