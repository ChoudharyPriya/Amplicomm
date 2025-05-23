import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      console.log("Newsletter signup:", email);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg lg:text-xl font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Why shop with us?</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Shipping</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">About us</a></li>
            </ul>
          </div>

          {/* Security & Privacy */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg lg:text-xl font-semibold mb-4 text-white">Security & Privacy</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Secure Website</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">PCI Compliance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Terms of service</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <h3 className="text-lg lg:text-xl font-semibold mb-4 text-white">Subscribe</h3>
            <p className="text-gray-300 mb-4 text-sm lg:text-base">Invite customers to join your mailing list.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <Button 
                type="submit"
                className="bg-primary hover:bg-blue-700 px-6 py-2 rounded-lg sm:rounded-r-lg sm:rounded-l-none transition-colors whitespace-nowrap"
              >
                Sign up
              </Button>
            </form>
          </div>

          {/* Disclaimer */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <p className="text-xs lg:text-sm text-gray-400 leading-relaxed">
              *Statements made on this website have not been evaluated by the U.S. Food and Drug Administration.
              <br /><br />
              These products are not intended to diagnose, treat, cure or prevent any disease. Information provided by this website or this company is not a substitute for individual medical advice.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
          <p className="text-gray-400 text-sm lg:text-base">&copy; 2025 HealthStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
