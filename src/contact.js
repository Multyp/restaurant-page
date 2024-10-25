export function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="relative py-24 px-8 bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen">
            <div class="max-w-screen-xl mx-auto relative z-20">
                <h1 class="text-4xl font-extrabold bg-gradient-to-br from-white to-blue-400 bg-clip-text text-transparent mb-4 animate-fadeInUp">Contact Us</h1>
                <p class="text-xl text-gray-300 mb-16 opacity-0 animate-fadeInUp delay-200">We'd love to hear from you</p>

                <div class="grid grid-cols-auto-fit gap-12 mb-16">
                    <div class="bg-white bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 rounded-2xl p-8 transition-transform duration-300 ease-in-out opacity-0 animate-fadeInUp delay-400 hover:translate-y-[-10px] hover:shadow-lg">
                        <h2 class="text-white text-2xl font-semibold mb-6">Location</h2>
                        <p class="text-gray-400 mb-4 leading-6">Find us sailing the Grand Line</p>
                        <img src="https://images.unsplash.com/photo-1555406225-5e31a8a77e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
                            alt="Baratie Location"
                            class="w-full h-64 object-cover rounded-lg my-6 transition-transform duration-500 ease-in-out hover:scale-105">
                    </div>

                    <div class="bg-white bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 rounded-2xl p-8 transition-transform duration-300 ease-in-out opacity-0 animate-fadeInUp delay-400 hover:translate-y-[-10px] hover:shadow-lg">
                        <h2 class="text-white text-2xl font-semibold mb-6">Get in Touch</h2>
                        <div class="flex flex-col gap-4">
                            <div class="flex items-center gap-2 p-2 bg-white bg-opacity-5 rounded-lg transition-colors duration-300 ease-in-out hover:bg-white hover:bg-opacity-10">
                                <strong class="text-blue-400 font-semibold">Transponder Snail:</strong>
                                <span class="text-gray-400">Kacha-Kacha 123-456-7890</span>
                            </div>
                            <div class="flex items-center gap-2 p-2 bg-white bg-opacity-5 rounded-lg transition-colors duration-300 ease-in-out hover:bg-white hover:bg-opacity-10">
                                <strong class="text-blue-400 font-semibold">Email:</strong>
                                <span class="text-gray-400">info@baratie-restaurant.com</span>
                            </div>
                            <div class="flex items-center gap-2 p-2 bg-white bg-opacity-5 rounded-lg transition-colors duration-300 ease-in-out hover:bg-white hover:bg-opacity-10">
                                <strong class="text-blue-400 font-semibold">Coordinates:</strong>
                                <span class="text-gray-400">31°24'N 146°15'E</span>
                            </div>
                        </div>
                        <button class="bg-gradient-to-br from-blue-400 to-blue-600 text-white py-4 px-10 rounded-full border-none text-lg font-semibold cursor-pointer transition-transform duration-300 ease-in-out mt-4 w-full hover:translate-y-[-3px] hover:shadow-lg">Make a Reservation</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
