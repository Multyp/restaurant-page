export function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="text-center">
            <h1 class="text-5xl font-bold mb-6 text-gray-800">Contact Us</h1>
            <p class="text-xl mb-12 text-gray-600">We'd love to hear from you</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="card p-6">
                    <h2 class="text-2xl font-semibold mb-4 text-gray-800">Location</h2>
                    <p class="text-gray-600 mb-4">Find us sailing the Grand Line</p>
                    <img src="https://images.unsplash.com/photo-1555406225-5e31a8a77e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" alt="Baratie Location" class="w-full h-48 object-cover rounded-lg">
                </div>
                <div class="card p-6">
                    <h2 class="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
                    <p class="text-gray-600 mb-2"><strong>Transponder Snail:</strong> Kacha-Kacha 123-456-7890</p>
                    <p class="text-gray-600 mb-2"><strong>Email:</strong> info@baratie-restaurant.com</p>
                    <p class="text-gray-600 mb-4"><strong>Coordinates:</strong> 31°24'N 146°15'E</p>
                    <button class="btn btn-primary">Make a Reservation</button>
                </div>
            </div>
        </div>
    `;
}
