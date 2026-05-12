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
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SmartEdu
          </div>

          <div className="space-x-3 flex items-center">
            <Link
              to="/login"
              className="px-6 py-2 text-slate-700 hover:text-slate-900 font-medium transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition transform hover:scale-105"
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="border-l-4 border-blue-600 pl-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
                Learning should be <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  actually fun
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
                We built SmartEdu because we got tired of boring online courses. Get personalized learning paths, real-time progress tracking, and yeah—actually enjoy the journey.
              </p>

              <div className="flex gap-4 mt-10">
                <Link
                  to="/register"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105"
                >
                  Start free →
                </Link>

                <Link
                  to="/login"
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
                >
                  I have an account
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {stats.map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h2 className={`text-2xl font-bold ${stat.color}`}>{stat.value}</h2>
                    <p className="text-xs text-slate-600 mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side Features Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-r-4 border-purple-600 pr-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                    className={`${feature.bgColor} p-6 rounded-xl border-2 border-slate-200 hover:border-slate-300 cursor-pointer transition`}
                  >
                    <div className={`${feature.color} mb-3`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm">{feature.title}</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Why students and teachers love it</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              Whether you're learning or teaching, you'll find what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Students */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-300 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">For Students</h3>
              </div>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li className="flex items-center gap-3">
                  <Zap className="text-blue-600 flex-shrink-0" size={18} />
                  <span>Learn at your own pace</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="text-blue-600 flex-shrink-0" size={18} />
                  <span>Get AI-powered recommendations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="text-blue-600 flex-shrink-0" size={18} />
                  <span>Track your progress easily</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="text-blue-600 flex-shrink-0" size={18} />
                  <span>Join live classes with instructors</span>
                </li>
              </ul>
            </motion.div>

            {/* For Teachers */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-2 border-purple-300 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">For Teachers</h3>
              </div>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li className="flex items-center gap-3">
                  <Flame className="text-purple-600 flex-shrink-0" size={18} />
                  <span>Create courses easily</span>
                </li>
                <li className="flex items-center gap-3">
                  <Flame className="text-purple-600 flex-shrink-0" size={18} />
                  <span>See student progress in real-time</span>
                </li>
                <li className="flex items-center gap-3">
                  <Flame className="text-purple-600 flex-shrink-0" size={18} />
                  <span>Run live sessions</span>
                </li>
                <li className="flex items-center gap-3">
                  <Flame className="text-purple-600 flex-shrink-0" size={18} />
                  <span>Get insights on student needs</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Powerful Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900">What makes us different</h2>
              <p className="text-slate-600 mt-3">Built by people who actually teach and learn</p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Collaborative Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-2 border-blue-300 hover:shadow-lg transition"
            >
              <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg w-fit mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Collaborative Learning</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Students and teachers interact through live classes, discussions, and group assignments.
              </p>
            </motion.div>

            {/* Smart Skill Mapping */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border-2 border-purple-300 hover:shadow-lg transition"
            >
              <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg w-fit mb-4">
                <Brain className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">AI Analysis</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Smart tracking identifies gaps and helps improve skills in focus areas.
              </p>
            </motion.div>

            {/* Gamified Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-xl border-2 border-rose-300 hover:shadow-lg transition"
            >
              <div className="p-3 bg-gradient-to-r from-rose-600 to-rose-700 rounded-lg w-fit mb-4">
                <Trophy className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Gamified</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Earn badges, climb leaderboards, and enjoy learning with achievements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI-Powered Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* AI Skill Analysis */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-2xl border-2 border-purple-300 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl">
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
              className="bg-gradient-to-br from-rose-50 to-rose-100 p-10 rounded-2xl border-2 border-rose-300 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-rose-600 to-rose-700 rounded-xl">
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white p-8 rounded-xl border-2 border-blue-200 text-center hover:shadow-lg transition">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-4">
                <Brain className="text-blue-600" size={28} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2 text-lg">Personalized Path</h4>
              <p className="text-sm text-slate-600">Every student gets a customized learning journey based on their unique profile</p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-purple-200 text-center hover:shadow-lg transition">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 rounded-xl mb-4">
                <Zap className="text-purple-600" size={28} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2 text-lg">Smart Recommendations</h4>
              <p className="text-sm text-slate-600">Get course and skill recommendations that match your goals and market demand</p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-rose-200 text-center hover:shadow-lg transition">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-rose-100 rounded-xl mb-4">
                <TrendingUp className="text-rose-600" size={28} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2 text-lg">Career Ready</h4>
              <p className="text-sm text-slate-600">Stay competitive with continuously updated market insights and trending skills</p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What real people are saying</h2>
            <p className="text-slate-600 mt-2">Join thousands of successful learners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-2 border-blue-200 hover:shadow-lg transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "I was skeptical at first, but the AI recommendations actually helped me learn what matters. Way better than random courses."
              </p>
              <h4 className="font-semibold text-slate-900">Rahul</h4>
              <p className="text-xs text-slate-600">Frontend Developer</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border-2 border-purple-200 hover:shadow-lg transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "Teaching is so much easier now. I can actually see what each student is struggling with and help them specifically."
              </p>
              <h4 className="font-semibold text-slate-900">Priya</h4>
              <p className="text-xs text-slate-600">Teacher, IIT Delhi</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-xl border-2 border-rose-200 hover:shadow-lg transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "The market trends feature helped me upskill in the right direction. Got a better job within 3 months."
              </p>
              <h4 className="font-semibold text-slate-900">Amit</h4>
              <p className="text-xs text-slate-600">Product Manager</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-4">Ready to start learning?</h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of students already using SmartEdu. It's free to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-slate-100 transition transform hover:scale-105 shadow-lg"
              >
                Start free today
              </Link>
              <Link
                to="/login"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition"
              >
                Login to your account
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <GraduationCap size={18} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-lg">SmartEdu</h3>
              </div>
              <p className="text-sm text-slate-400">Transforming education with AI-powered learning paths.</p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Changelog</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-sm text-slate-400">© 2024 SmartEdu. All rights reserved.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="text-slate-400 hover:text-white transition">
                  <span className="text-sm">Twitter</span>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition">
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition">
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};