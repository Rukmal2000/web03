import React from 'react';
import { CheckCircle, Home, ArrowRight } from 'lucide-react';

interface ConfirmationPageProps {
  onAction: (action: 'home' | 'dashboard') => void;
  registrationData: any;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onAction, registrationData }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center">
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="text-green-600 w-12 h-12" />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Registration Successful!
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Welcome to our platform, <strong>{registrationData?.name}</strong>! 
            Your account has been created successfully as a{' '}
            <strong>
              {registrationData?.role === 'consumer' && 'Service Consumer'}
              {registrationData?.role === 'vehicle_owner' && 'Vehicle Owner'}
              {registrationData?.role === 'material_supplier' && 'Material Supplier'}
            </strong>.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
            <div className="space-y-3 text-left">
              {registrationData?.role === 'consumer' && (
                <>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Browse available vehicles and materials
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Contact suppliers directly
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Start your construction projects
                  </div>
                </>
              )}
              {registrationData?.role === 'vehicle_owner' && (
                <>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Complete your business verification
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Add your vehicles to the platform
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Start receiving rental requests
                  </div>
                </>
              )}
              {registrationData?.role === 'material_supplier' && (
                <>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Complete your business verification
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    List your construction materials
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Start receiving material orders
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onAction('home')}
              className="flex items-center justify-center bg-gray-200 text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-300 transition-colors font-semibold"
            >
              <Home className="mr-2 w-5 h-5" />
              Go to Home
            </button>
            <button
              onClick={() => onAction('dashboard')}
              className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
            >
              {registrationData?.role === 'consumer' ? 'Browse Services' : 'Go to Dashboard'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};