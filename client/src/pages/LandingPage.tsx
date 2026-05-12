import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen,
  BarChart3,
  Trophy,
  Users,
  GraduationCap,
  Star,
  Zap,
  Flame,
  Brain,
  ArrowRight,
  TrendingUp,
  Lightbulb,
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const features = [
    { 
      icon: BookOpen, 
      color: 'text-blue-600', 
      bgColor: 'bg-blue-50', 
      title: 'Interactive Courses', 
      description: 'Engage with expertly designed courses tailored to your learning pace.' 
    },
    { 
      icon: BarChart3, 
      color: 'text-amber-600', 
      bgColor: 'bg-amber-50', 
      title: 'Progress Analytics', 
      description: 'Track your growth with real-time analytics and insights.' 
    },
    { 
      icon: Trophy, 
      color: 'text-purple-600', 
      bgColor: 'bg-purple-50', 
      title: 'Badges & Rewards', 
      description: 'Earn badges and compete on leaderboards.' 
    },
    { 
      icon: Brain, 
      color: 'text-rose-600', 
      bgColor: 'bg-rose-50', 
      title: 'Skill Mapping', 
      description: 'Visualize and develop your professional skills.' 
    },
  ];

  const stats = [
    { value: '10K+', label: 'Active Students', color: 'text-blue-600' },
    { value: '500+', label: 'Courses', color: 'text-purple-600' },
    { value: '200+', label: 'Teachers', color: 'text-amber-600' },
    { value: '95%', label: 'Success Rate', color: 'text-rose-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            SmartEdu
          </motion.div>

          <div className="space-x-3">
            <Link
              to="/login"
              className="px-6 py-2 text-slate-700 hover:text-blue-600 font-medium transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition duration-300"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">
              Learn Smarter <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 bg-clip-text text-transparent">
                With SmartEdu
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              An intelligent learning platform that helps students and teachers connect, collaborate, and achieve success through interactive education tools and real-time analytics.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 mt-10"
            >
              <Link
                to="/register"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition duration-300 flex items-center gap-2"
              >
                Get Started <ArrowRight size={18} />
              </Link>

              <Link
                to="/login"
                className="px-8 py-3 border-2 border-slate-300 text-slate-900 font-bold rounded-lg hover:border-blue-600 hover:bg-blue-50 transition duration-300"
              >
                Sign In
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-white border border-slate-200">
                  <h2 className={`text-3xl font-bold ${stat.color}`}>{stat.value}</h2>
                  <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side Features Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className={`${feature.bgColor} p-6 rounded-xl border border-slate-200 hover:shadow-lg transition`}
                >
                  <div className={`${feature.color} mb-4`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-sm text-slate-600 mt-2">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900">Why Choose SmartEdu?</h2>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
              Designed for both students and teachers to create an engaging and productive learning environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Students */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-10 rounded-2xl border border-blue-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">For Students</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                  Access quality courses at your own pace
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                  Track progress with detailed analytics
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                  Earn badges and climb the leaderboard
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                  Join live classes with instructors
                </li>
              </ul>
            </motion.div>

            {/* For Teachers */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-rose-50 p-10 rounded-2xl border border-purple-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">For Teachers</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-purple-600 rounded-full"></span>
                  Create and manage engaging courses
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-purple-600 rounded-full"></span>
                  Monitor student performance in real-time
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-purple-600 rounded-full"></span>
                  Conduct interactive live classes
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 bg-purple-600 rounded-full"></span>
                  Assign quizzes and track submissions
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Powerful Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900">Powerful Features</h2>
            <p className="text-lg text-slate-600 mt-4">Everything you need for modern education</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Collaborative Learning */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 shadow-md hover:shadow-lg transition"
            >
              <div className="p-3 bg-blue-600 rounded-lg w-fit mb-6">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Collaborative Learning</h3>
              <p className="text-slate-700">
                Students and teachers interact through live classes, discussions, and group assignments.
              </p>
            </motion.div>

            {/* Smart Skill Mapping */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 shadow-md hover:shadow-lg transition"
            >
              <div className="p-3 bg-purple-600 rounded-lg w-fit mb-6">
                <Brain className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Skill Mapping</h3>
              <p className="text-slate-700">
                AI-powered tracking identifies learning gaps and helps improve skills effectively.
              </p>
            </motion.div>

            {/* Gamified Experience */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-rose-50 to-rose-100 p-8 rounded-2xl border border-rose-200 shadow-md hover:shadow-lg transition"
            >
              <div className="p-3 bg-rose-600 rounded-lg w-fit mb-6">
                <Trophy className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Gamified Experience</h3>
              <p className="text-slate-700">
                Earn badges, climb leaderboards, and unlock achievements while learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI-Powered Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Zap className="text-blue-600" size={16} />
              <span className="text-sm font-semibold text-blue-600">AI-Powered Intelligence</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Smart Career Guidance & Market Insights</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our advanced AI analyzes your skills and recommends what to focus on next, plus reveals market trends to keep you competitive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI Skill Analysis */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-2xl border border-purple-200 shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-purple-600 rounded-lg">
                  <Brain className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">AI Skill Analysis</h3>
                  <p className="text-sm text-slate-600 mt-1">Intelligent recommendations</p>
                </div>
              </div>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <Lightbulb className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                  <span>AI analyzes your current skills and performance patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                  <span>Get personalized recommendations on what to learn next</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                  <span>Identify skill gaps and create a focused learning path</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                  <span>Track improvement over time with actionable insights</span>
                </li>
              </ul>
            </motion.div>

            {/* Market Trends */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-rose-50 to-rose-100 p-10 rounded-2xl border border-rose-200 shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-rose-600 rounded-lg">
                  <TrendingUp className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Market Trends</h3>
                  <p className="text-sm text-slate-600 mt-1">Stay ahead of the curve</p>
                </div>
              </div>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <TrendingUp className="text-rose-600 mt-1 flex-shrink-0" size={20} />
                  <span>Real-time analysis of in-demand skills in your field</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="text-rose-600 mt-1 flex-shrink-0" size={20} />
                  <span>Discover which technologies are trending right now</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="text-rose-600 mt-1 flex-shrink-0" size={20} />
                  <span>Make informed decisions about your career growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="text-rose-600 mt-1 flex-shrink-0" size={20} />
                  <span>Align your learning with industry demand</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Brain className="text-blue-600" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Personalized Path</h4>
              <p className="text-sm text-slate-600">Every student gets a customized learning journey based on their unique profile</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <Zap className="text-purple-600" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Smart Recommendations</h4>
              <p className="text-sm text-slate-600">Get course and skill recommendations that match your goals and market demand</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-rose-100 rounded-lg mb-4">
                <TrendingUp className="text-rose-600" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Career Ready</h4>
              <p className="text-sm text-slate-600">Stay competitive with continuously updated market insights and trending skills</p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900">What Users Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md"
            >
              <p className="text-slate-700 mb-4">
                "SmartEdu completely changed how I study online. The interface is modern and the features are incredibly helpful!"
              </p>
              <h4 className="font-bold text-blue-600">— Rahul Sharma</h4>
              <p className="text-sm text-slate-600">Student</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md"
            >
              <p className="text-slate-700 mb-4">
                "The analytics and gamification features make learning engaging and fun for my students. Highly recommended!"
              </p>
              <h4 className="font-bold text-purple-600">— Priya Singh</h4>
              <p className="text-sm text-slate-600">Teacher</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md"
            >
              <p className="text-slate-700 mb-4">
                "Managing classes and assignments has never been easier. The user experience is exceptional!"
              </p>
              <h4 className="font-bold text-rose-600">— Amit Verma</h4>
              <p className="text-sm text-slate-600">Educator</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Learning?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of students and teachers already using SmartEdu to achieve their educational goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:shadow-xl hover:scale-105 transition duration-300"
              >
                Get Started Free
              </Link>
              <Link
                to="/login"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition duration-300"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <div className="text-lg font-bold text-white mb-2">SmartEdu</div>
              <p className="text-sm">Empowering education through technology</p>
            </div>
            <div className="flex gap-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition">About</a>
              <a href="#" className="hover:text-white transition">Features</a>
              <a href="#" className="hover:text-white transition">Contact</a>
              <a href="#" className="hover:text-white transition">Privacy</a>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p>&copy; 2026 SmartEdu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};