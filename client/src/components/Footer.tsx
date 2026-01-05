const Footer = () => {
    return (
        <footer className="mt-24 border-t border-gray-800/80">
            <div className="px-4 md:px-16 lg:px-24 xl:px-32 py-10 text-sm text-gray-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-white font-semibold mb-3">AI Site Builder</h4>
                        <p className="text-gray-400">
                            Turn ideas into production-ready websites in minutes using AI-powered
                            design and code generation.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-3">Product</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
                            <li><a href="/projects" className="hover:text-white">My Projects</a></li>
                            <li><a href="/community" className="hover:text-white">Community</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-3">Resources</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/" className="hover:text-white">Documentation</a></li>
                            <li><a href="/" className="hover:text-white">Examples</a></li>
                            <li><a href="/" className="hover:text-white">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-3">Follow</h4>
                        <div className="flex items-center gap-3 text-gray-400">
                            <a href="https://x.com" target="_blank" className="hover:text-white">X</a>
                            <a href="https://github.com" target="_blank" className="hover:text-white">GitHub</a>
                            <a href="https://linkedin.com" target="_blank" className="hover:text-white">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-800/60 flex flex-col sm:flex-row gap-3 items-center justify-between">
                    <p className="text-gray-500">© 2025 AI Site Builder. All rights reserved.</p>
                    <div className="flex items-center gap-4 text-gray-400">
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Privacy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
