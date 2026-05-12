import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">SmartEdu</div>
          <div className="space-x-4">
            <Link
              to="/login"
              className="px-6 py-2 text-indigo-600 font-medium hover:text-indigo-800"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to SmartEdu
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            An intelligent educational platform designed to enhance learning experiences
            and enable teachers to create engaging courses.
          </p>

          <div className="flex justify-center gap-6">
            <Link
              to="/register"
              className="px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-lg hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-bold text-lg rounded-lg hover:bg-indigo-50 transition"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Interactive Learning</h3>
            <p className="text-gray-600">
              Engage with courses, quizzes, and assignments designed to enhance your learning journey.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Progress Analytics</h3>
            <p className="text-gray-600">
              Track your progress with detailed analytics and skill mapping to identify growth areas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Gamification</h3>
            <p className="text-gray-600">
              Earn badges, compete on leaderboards, and unlock achievements as you progress.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 bg-white rounded-lg shadow p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose SmartEdu?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">For Students</h4>
                <p className="text-gray-600">
                  Access quality courses, track your performance, and learn at your own pace with
                  personalized learning paths.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">For Teachers</h4>
                <p className="text-gray-600">
                  Create and manage courses, assign materials, conduct live classes, and monitor
                  student progress easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white text-center py-8 mt-20">
        <p>&copy; 2024 SmartEdu. All rights reserved.</p>
      </div>
    </div>
  );
};
