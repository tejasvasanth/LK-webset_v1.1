import { Users, Briefcase, Handshake, Mail } from 'lucide-react';

export default function Company() {
    return (
        <div className="pt-20">
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About LeanKloud</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            LeanKloud is redefining cloud operations for the AI era.
                        </p>
                        <div className="p-8 bg-blue-50 rounded-2xl inline-block">
                            <p className="text-2xl font-bold text-blue-900">
                                Our mission is to transform cloud environments into autonomous, self-optimizing systems powered by agentic AI.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gray-50 p-8 rounded-xl text-center hover:bg-gray-100 transition-colors">
                            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership</h3>
                            <p className="text-gray-600">Meet our team</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-xl text-center hover:bg-gray-100 transition-colors">
                            <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Careers</h3>
                            <p className="text-gray-600">Join our mission</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-xl text-center hover:bg-gray-100 transition-colors">
                            <Handshake className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Partners</h3>
                            <p className="text-gray-600">Work with us</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-xl text-center hover:bg-gray-100 transition-colors">
                            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Contact</h3>
                            <p className="text-gray-600">Get in touch</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
