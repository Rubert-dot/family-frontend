import React, { useEffect, useState } from 'react';
import { getUpcomingEvents } from '../Api';
import { Link } from 'react-router-dom'; 
import myFamilyBg from '../assets/background.jpg';

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [time, setTime] = useState(new Date());

  const familyQuotes = [
    "Unity is our family's strength, love is our foundation! 🏡",
    "Living with adjustment is the ultimate beauty of a joint family! ✨",
    "Having love to share and relatives to support us is a true blessing! ❤️",
    "The most beautiful place in the world is under our family's umbrella of love! 🌟",
    "Family is where anger fades away and only pure affection remains forever! 🤝"
  ];

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setQuoteIndex((prevIndex) => (prevIndex + 1) % familyQuotes.length);
        setFade(true); 
      }, 800); 
    }, 7000);

    const clockTimer = setInterval(() => setTime(new Date()), 1000);

    getUpcomingEvents()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const sortedData = [...data].sort((a, b) => {
            const dateA = new Date(a.event_date || a.eventDate);
            const dateB = new Date(b.event_date || b.eventDate);
            return dateA - dateB;
          });

          const firstEventDate = new Date(sortedData[0].event_date || sortedData[0].eventDate).toLocaleDateString('en-IN');
          const firstDateEvents = sortedData.filter(ev => {
            const currentEvDate = new Date(ev.event_date || ev.eventDate).toLocaleDateString('en-IN');
            return currentEvDate === firstEventDate;
          });

          setUpcomingEvents(firstDateEvents);
          setShowPopup(true);
        }
      })
      .catch((err) => console.error("Upcoming events load failed", err));

    return () => {
      clearInterval(quoteTimer);
      clearInterval(clockTimer);
    };
  }, [familyQuotes.length]);

  return (
    <div className="home-container" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      minHeight: '100vh', 
      fontFamily: '"Poppins", "Segoe UI", sans-serif',
      position: 'relative',
      width: '100%',
      paddingBottom: '120px', 
      boxSizing: 'border-box',
      backgroundColor: '#f8fafc', 
      overflowX: 'hidden'
    }}>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeInUp {
          0% { transform: translateY(40px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        .quote-fade {
          transition: opacity 0.8s ease-in-out;
          opacity: 0;
        }

        .quote-visible {
          opacity: 1;
        }

        .feature-box {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid rgba(0,0,0,0.03);
        }
        .feature-box:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(26, 43, 76, 0.12) !important;
          border-color: #81b09a;
        }

        .primary-btn {
          background: linear-gradient(135deg, #1a2b4c 0%, #2c426f 100%);
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(26, 43, 76, 0.2);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(26, 43, 76, 0.35);
          background: linear-gradient(135deg, #2c426f 0%, #1a2b4c 100%);
        }

        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 38px !important;
            margin-right: 0 !important;
          }
          .hero-card {
            padding: 30px 15px !important;
            width: 95% !important;
          }
          .info-section {
            padding: 35px 20px !important;
            margin: 40px 15px 20px 15px !important;
          }
          .info-title {
            font-size: 26px !important;
          }
          .info-text {
            font-size: 15px !important;
            line-height: 1.7 !important;
          }
          .quote-section {
            padding: 30px 20px !important;
            margin: 20px 15px 40px 15px !important;
          }
          .quote-text {
            font-size: 18px !important;
          }
          .footer-content {
            flex-direction: column !important;
            text-align: center !important;
            gap: 10px !important;
          }
          .upcoming-popup {
            left: 15px !important;
            right: 15px !important;
            max-width: none !important;
            bottom: 140px !important;
          }
        }
      `}</style>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '90vh', 
        position: 'relative',
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.8)), url(${myFamilyBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        padding: '15px',
        boxSizing: 'border-box'
      }}>
        
        <div className="hero-card" style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#fff',
          padding: '50px 20px',
          borderRadius: '32px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
          textAlign: 'center',
          width: '100%',
          maxWidth: '500px',
          boxSizing: 'border-box',
        }}>
  
          <h1 className="hero-title" style={{ 
            fontSize: '56px', 
            margin: '0 0 20px 0', 
            letterSpacing: '1px',
            fontWeight: '700',
            background: 'linear-gradient(to right, #ffffff, #e2e8f0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}>
            குடும்ப உறவுகள்
          </h1>
          
          <div style={{
            minHeight: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            padding: '15px 20px',
            borderRadius: '16px',
            marginBottom: '30px',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
           
            <p className={`quote-fade ${fade ? 'quote-visible' : ''}`} style={{
              margin: 0,
              fontSize: '16px',
              color: '#a8ebd0', 
              fontWeight: '500',
              lineHeight: '1.6', 
              fontStyle: 'italic'
            }}>
              {familyQuotes[quoteIndex]}
            </p>
          </div>

          <Link to="/family-tree" className="primary-btn">
            <span>🌳 Discover Our Family Tree</span>
            <span style={{ fontSize: '18px' }}>→</span>
          </Link>
        </div>
      </div>

      {/* 🌳 Description Section */}
      <div className="info-section" style={{
        width: 'calc(100% - 40px)',
        maxWidth: '900px',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        padding: '50px 45px',
        margin: '60px 20px 30px 20px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.03)',
        boxSizing: 'border-box',
        textAlign: 'center',
        border: '1px solid #edf2f7'
      }}>
        <h2 className="info-title" style={{ color: '#1a2b4c', fontSize: '34px', margin: '0 0 20px 0', fontWeight: '700', letterSpacing: '-0.5px' }}>
          🌳 நம் பாரம்பரியம்
        </h2>
        <div style={{ width: '60px', height: '4px', backgroundColor: '#bc9226', margin: '0 auto 25px auto', borderRadius: '2px' }}></div>
        
        <p className="info-text" style={{ color: '#4a5568', fontSize: '17px', lineHeight: '1.9', margin: 0, fontWeight: '400' }}>
          Endless love across generations and the immense affection we share with each other form the very foundation of our family. 
          Standing shoulder to shoulder through joy and sorrow, following the path shown by our ancestors with unity is our pride. 
          This platform is a loving bridge connecting all our family members!
        </p>
      </div>

  
      <div style={{
        width: '100%',
        maxWidth: '940px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '25px',
        padding: '0 20px',
        boxSizing: 'border-box'
      }}>
      
        <div className="feature-box" style={{
          backgroundColor: '#ffffff',
          padding: '35px 30px',
          borderRadius: '24px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.02)',
          textAlign: 'center'
        }}>
          <div style={{ width: '70px', height: '70px', backgroundColor: '#f0fff4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
            <span style={{ fontSize: '32px' }}>📅</span>
          </div>
          <h3 style={{ color: '#1a2b4c', margin: '0 0 12px 0', fontSize: '19px', fontWeight: '600' }}>Important Dates</h3>
          <p style={{ color: '#718096', fontSize: '14.5px', margin: 0, lineHeight: '1.6' }}>
            Stay updated with family birthdays, wedding anniversaries, and upcoming special events.
          </p>
        </div>

      
        <div className="feature-box" style={{
          backgroundColor: '#ffffff',
          padding: '35px 30px',
          borderRadius: '24px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.02)',
          textAlign: 'center'
        }}>
          <div style={{ width: '70px', height: '70px', backgroundColor: '#ebf8ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
            <span style={{ fontSize: '32px' }}>👨‍👩‍👧‍👦</span>
          </div>
          <h3 style={{ color: '#1a2b4c', margin: '0 0 12px 0', fontSize: '19px', fontWeight: '600' }}>Family Directory</h3>
          <p style={{ color: '#718096', fontSize: '14.5px', margin: 0, lineHeight: '1.6' }}>
            Find the details, relationships, and contact information of all our family members in one place.
          </p>
        </div>

        {/* Box 3 */}
        <div className="feature-box" style={{
          backgroundColor: '#ffffff',
          padding: '35px 30px',
          borderRadius: '24px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.02)',
          textAlign: 'center'
        }}>
          <div style={{ width: '70px', height: '70px', backgroundColor: '#fffaf0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
            <span style={{ fontSize: '32px' }}>📸</span>
          </div>
          <h3 style={{ color: '#1a2b4c', margin: '0 0 12px 0', fontSize: '19px', fontWeight: '600' }}>Sweet Memories</h3>
          <p style={{ color: '#718096', fontSize: '14.5px', margin: 0, lineHeight: '1.6' }}>
            Store and cherish beautiful photographs of past celebrations and family milestones.
          </p>
        </div>
      </div>

      {/* 🌟 Thought of the Day */}
      <div className="quote-section" style={{
        width: 'calc(100% - 40px)',
        maxWidth: '900px',
        background: 'linear-gradient(135deg, #1a2b4c 0%, #111d33 100%)',
        borderRadius: '24px',
        padding: '45px 40px',
        margin: '30px 20px 60px 20px',
        boxShadow: '0 20px 40px rgba(26, 43, 76, 0.15)',
        boxSizing: 'border-box',
        textAlign: 'center',
        color: '#ffffff',
        border: '1px solid rgba(255,255,255,0.05)'
      }}>
        <h4 style={{ color: '#bc9226', margin: '0 0 15px 0', fontSize: '16px', letterSpacing: '2px', fontWeight: '700', textTransform: 'uppercase' }}>
          🌟 இன்றைய சிந்தனை
        </h4>
        <p className="quote-text" style={{ fontSize: '22px', fontWeight: '600', fontStyle: 'italic', margin: 0, lineHeight: '1.7', color: '#f7fafc' }}>
          "Living together as one is the ultimate way of life, and staying united by love is eternal bliss!"
        </p>
      </div>

      {/* 👣 Footer */}
      <footer style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0', 
        boxShadow: '0 -10px 30px rgba(0,0,0,0.05)',
        zIndex: 999,
        padding: '16px 24px',
        boxSizing: 'border-box'
      }}>
        <div className="footer-content" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '15px'
        }}>
          
          <div style={{ fontSize: '14.5px', color: '#1a2b4c', fontWeight: '600' }}>
            <span>"Unity is our family's strength, love is our foundation!"</span>
          </div>

          <div style={{ fontSize: '13px', color: '#718096' }}>
            © {new Date().getFullYear()} <strong>All Family Members</strong>
          </div>

          <div style={{ 
            fontSize: '13.5px', 
            color: '#ffffff', 
            backgroundColor: '#c29292', 
            padding: '6px 16px', 
            borderRadius: '50px',
            fontWeight: '600',
            boxShadow: '0 4px 10px rgba(188, 146, 38, 0.2)',
            display: 'inline-flex',
            gap: '8px',
            alignItems: 'center'
          }}>
            <span>🗓️ {time.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span>⏰ {time.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
          </div>

        </div>
      </footer>

   
      {showPopup && upcomingEvents.length > 0 && (
        <div className="upcoming-popup" style={{ 
          position: 'fixed', 
          bottom: '90px', 
          right: '25px', 
          backgroundColor: '#c29292',
          color: '#f1eeee', 
          border: '1px solid rgba(255,255,255,0.2)', 
          padding: '22px', 
          borderRadius: '16px', 
          boxShadow: '0 15px 35px rgba(0,0,0,0.2)', 
          zIndex: 1000, 
          maxWidth: '340px',
          textAlign: 'left',
          boxSizing: 'border-box',
          animation: 'fadeInUp 0.5s ease'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <strong style={{ fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🔔 Next Family Event!
            </strong>
            <button 
              onClick={() => setShowPopup(false)} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '20px', color: '#f5efef', opacity: 0.8 }}
            >
              ×
            </button>
          </div>
          <hr style={{ borderTop: '1px solid rgba(255,255,255,0.2)', margin: '8px 0', borderBottom: 'none' }} />
          <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '14.5px', lineHeight: '1.5' }}>
            {upcomingEvents.map((uevt) => (
              <li key={uevt.id} style={{ marginBottom: '8px' }}>
                <strong style={{ color: '#fff' }}>{uevt.title}</strong> <br/>
                <span style={{ fontSize: '12.5px', color: '#e8f5e9' }}>
                  📅 {new Date(uevt.event_date || uevt.eventDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}