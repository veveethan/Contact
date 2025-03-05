import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import logo from './logo.png';
//import p1 from './p1.png';
//import p2 from './p2.png';
import g from './g.jpeg';
//import p3 from './p3.png';

// Header Component
const Header = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: "HOME", path: '/' },
    { title: 'DIRECTORY', path: '/AlumniDirectory' },
    { title: 'JOBS', path: '/JobListings' },
    { title: 'MENTORING', path: '/Mentoring' },
    { title: 'PROFILE', path: '/profile' }
  ];

  return (
    <div className="header-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="logo-section">
          <img 
            src={logo} 
            alt="University Logo" 
            className="logo-image"
          />
          <h1 className="portal-title">
            Contact Portal
          </h1>
        </div>
        <button 
          onClick={() => navigate('/login')}
          className="login-button"
        >
          LOGIN
        </button>
      </div>

      {/* Navigation Bar */}
      <div className="nav-bar">
        <nav className="nav-container">
          <ul className="nav-list">
            {menuItems.map((item, index) => (
              <li 
                key={index}
                className="nav-item"
              >
                <a 
                  href={item.path}
                  className="nav-link"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Main Home Component
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }, []);

  const stats = [
    { icon: '🏛️', value: '34', label: 'Years Since Establishment' },
    { icon: '🎓', value: '8000', label: 'Happy Students in 2024' },
    { icon: '👥', value: '1500', label: 'Staff' },
    { icon: '👨‍🎓', value: '300000', label: 'Alumni' },
    { icon: '🤝', value: '600', label: 'Partners' },
  ];

  const testimonials = [
    {
      name: 'Rahul',
      quote: 'BIT provided me with opportunities I never thought possible. The faculties were exceptional!',
      image: g,
    },
    {
      name: 'Keerthan',
      quote: 'The education and community at BIT truly shaped my future. I am grateful for the experience!',
      image: global,
    },
    {
      name: 'Nishanth',
      quote: 'An amazing institution that helped me grow both professionally and personally.',
      image: g,
    },
  ];

  const features = [
    {
      icon: '📖',
      title: 'Alumni Directory',
      description: 'Explore complete alumni directory & connect with alumni with your interests & domain.',
      buttonText: 'View Directory',
      onClick: () => navigate('/AlumniDirectory'),
    },
    {
      icon: '🎓',
      title: 'Job Listings',
      description: 'View to find job opportunities',
      buttonText: 'Jobs',
      onClick: () => navigate('/job-listings'),
    },
    {
      icon: '🏢',
      title: 'Mentoring',
      description: 'Get professional and personal help from alumnis',
      buttonText: 'Mentoring',
      onClick: () => navigate('/Mentoring'),
    },
    {
      icon: '🏢',
      title: 'Alumni in your city',
      description: 'Find alumni living in your city & connect with them',
      buttonText: 'Alumni In My City',
      onClick: () => navigate('/alumni-city'),
    },
    {
      icon: '👤',
      title: 'Your Alumni Profile',
      description: 'Create & complete your alumni profile and remain connected with all opportunities matching.',
      buttonText: 'My Profile',
      onClick: () => navigate('/profile'),
    },
  ];

  return (
    <>
      <Header />
      <div className="education-stats">
        <div className="hero-section">
          <div className="overlay">
            <h1 data-aos="fade-up">BIT is more than just a place to get an education.</h1>
            <a 
              href="https://www.bitsathy.ac.in/" 
              className="cta-button" 
              data-aos="fade-up" 
              data-aos-delay="200"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Explore Now
            </a>
          </div>
        </div>
        
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-item"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value counter">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="features-section">
          <div className="features-container">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <button 
                  className="feature-button" 
                  onClick={feature.onClick}
                >
                  {feature.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-section">
          <h2 data-aos="fade-up">What Our Alumni Say</h2>
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <p className="testimonial-name">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;