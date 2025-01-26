import 'tailwindcss/tailwind.css';

export default function Login() {

    const handleConnect = () => {
        // Add logic to handle connect action
        console.log('Connecting...');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-xs">
                <input 
                    type="text" 
                    placeholder="Username" 
                    id="username"
                    className="w-full px-3 py-2 mb-4 text-sm text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    id="password"
                    className="w-full px-3 py-2 mb-4 text-sm text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                />
                <button 
                    onClick={handleConnect} 
                    className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                >
                    Connect
                </button>
                <a 
                    href="/forgot-password" 
                    className="inline-block mt-4 text-sm text-blue-500 align-baseline hover:text-blue-800"
                >
                    Forgot password?
                </a>
            </div>
        </div>
    );
}
