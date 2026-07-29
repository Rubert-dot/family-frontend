import React, { useEffect, useState } from 'react';
import { getUpcomingEvents, getPhotos, getFamilyMembers } from '../Api'; 
import { Link, useNavigate } from 'react-router-dom'; 
import myFamilyBg from '../assets/background.jpg';

export default function Home() {
  const navigate = useNavigate();

  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [allEvents, setAllEvents] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [memberCount, setMemberCount] = useState(0); 
  
  const [showEventsModal, setShowEventsModal] = useState(false);
  const [time, setTime] = useState(new Date());

  // --- NEWLY ADDED STATE FOR NOTIFICATION POPUP ---
  const [todayNotification, setTodayNotification] = useState(null);
  // ------------------------------------------------

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
        if (Array.isArray(data)) {
          const sorted = [...data].sort((a, b) => new Date(a.event_date || a.eventDate) - new Date(b.event_date || b.eventDate));
          setAllEvents(sorted);
        }
      })
      .catch((err) => console.error("Events fetch failed:", err));

    getPhotos()
      .then((data) => {
        if (Array.isArray(data)) {
          setPhotos(data);
        }
      })
      .catch((err) => console.error("Photos fetch failed:", err));

    getFamilyMembers()
      .then((data) => {
        if (Array.isArray(data)) {
          setMemberCount(data.length);
        }
      })
      .catch((err) => console.error("Members fetch failed:", err));

    return () => {
      clearInterval(quoteTimer);
      clearInterval(clockTimer);
    };
  }, [familyQuotes.length]);

  // --- NEWLY ADDED USEEFFECT FOR TODAY'S EVENT POPUP ---
  useEffect(() => {
    if (allEvents.length > 0) {
      const today = new Date();
      const todayMonth = today.getMonth();
      const todayDate = today.getDate();
      const todayFormatted = today.toISOString().split('T')[0];

      // தேதியை வைத்து மேட்ச் ஆகிறதா எனப் பார்க்கிறோம் (வருடம் மாறினாலும் பிறந்தநாள்/கல்யாண நாள் வர வேண்டும் என்பதால் Month & Date மட்டும் செக் செய்கிறோம்)
      const matchingEvent = allEvents.find((evt) => {
        const eventDate = new Date(evt.event_date || evt.eventDate);
        return eventDate.getDate() === todayDate && eventDate.getMonth() === todayMonth;
      });

      if (matchingEvent) {
        const hasSeenToday = sessionStorage.getItem(`notified_${todayFormatted}`);
        if (!hasSeenToday) {
          setTodayNotification(matchingEvent);
        }
      }
    }
  }, [allEvents]);

  const handleCloseNotification = () => {
    const todayFormatted = new Date().toISOString().split('T')[0];
    sessionStorage.setItem(`notified_${todayFormatted}`, 'true');
    setTodayNotification(null);
  };
  // ------------------------------------------------------

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
        html { scroll-behavior: smooth; }
        .quote-fade { transition: opacity 0.8s ease-in-out; opacity: 0; }
        .quote-visible { opacity: 1; }
        .feature-box {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid rgba(0,0,0,0.05);
          cursor: pointer;
        }
        .feature-box:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(26, 43, 76, 0.12) !important;
          border-color: #81b09a;
        }
        .primary-btn {
          background: linear-gradient(135deg, #1a2b4c 0%, #2c426f 100%);
          color: white; border: none; padding: 14px 28px;
          border-radius: 50px; font-weight: 600; font-size: 15px;
          cursor: pointer; transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(26, 43, 76, 0.2);
          text-decoration: none; display: inline-flex;
          align-items: center; gap: 8px;
        }
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(26, 43, 76, 0.35);
        }
      `}</style>

      {/* Hero Banner */}
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        width: '100%', height: '90vh', position: 'relative',
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.8)), url(${myFamilyBg})`,
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
        padding: '15px', boxSizing: 'border-box'
      }}>
        <div className="hero-card" style={{
          background: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#fff', padding: '50px 20px', borderRadius: '32px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.4)', textAlign: 'center',
          width: '100%', maxWidth: '500px', boxSizing: 'border-box',
        }}>
          <h1 className="hero-title" style={{ 
            fontSize: '56px', margin: '0 0 20px 0', letterSpacing: '1px', fontWeight: '700',
            background: 'linear-gradient(to right, #ffffff, #e2e8f0)',
            WebkitBackgroundClip: 'text',
          }}>
            குடும்ப உறவுகள்
          </h1>
          
          <div style={{
            minHeight: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.25)', padding: '15px 20px', borderRadius: '16px',
            marginBottom: '30px', border: '1px solid rgba(255,255,255,0.05)'
          }}>
            <p className={`quote-fade ${fade ? 'quote-visible' : ''}`} style={{
              margin: 0, fontSize: '16px', color: '#a8ebd0', fontWeight: '500',
              lineHeight: '1.6', fontStyle: 'italic'
            }}>
              {familyQuotes[quoteIndex]}
            </p>
          </div>

          <Link to="/family-tree" className="primary-btn">
            <span>Discover Our Family Tree</span>
            <span style={{ fontSize: '18px' }}>→</span>
          </Link>
        </div>
      </div>

      {/* Info Section */}
      <div className="info-section" style={{
        width: 'calc(100% - 40px)', maxWidth: '900px', backgroundColor: '#ffffff',
        borderRadius: '24px', padding: '50px 45px', margin: '60px 20px 40px 20px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.03)', boxSizing: 'border-box',
        textAlign: 'center', border: '1px solid #edf2f7'
      }}>
        <h2 className="info-title" style={{ color: '#1a2b4c', fontSize: '34px', margin: '0 0 20px 0', fontWeight: '700' }}>
          🌳 நம் பாரம்பரியம்
        </h2>
        <div style={{ width: '60px', height: '4px', backgroundColor: '#bc9226', margin: '0 auto 25px auto', borderRadius: '2px' }}></div>
        
        <p className="info-text" style={{ color: '#4a5568', fontSize: '17px', lineHeight: '1.9', margin: 0 }}>
          Endless love across generations and the immense affection we share with each other form the very foundation of our family. 
          Standing shoulder to shoulder through joy and sorrow, following the path shown by our ancestors with unity is our pride.
        </p>
      </div>

      {/* Cards Section */}
      <div style={{
        width: '100%', maxWidth: '940px', display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '25px', padding: '0 20px', boxSizing: 'border-box',
        marginBottom: '60px'
      }}>
        
        <div className="feature-box" onClick={() => setShowEventsModal(true)} style={{ backgroundColor: '#ffffff', padding: '30px 25px', borderRadius: '24px', textAlign: 'center' }}>
          <div style={{ width: '60px', height: '60px', backgroundColor: '#f0fff4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px auto' }}>
            <span style={{ fontSize: '28px' }}>📅</span>
          </div>
          <h3 style={{ color: '#1a2b4c', margin: '0 0 10px 0', fontSize: '18px', fontWeight: '600' }}>Important Dates</h3>
          
          <p style={{ color: '#2e7d32', fontWeight: 'bold', fontSize: '15px', margin: '0 0 8px 0' }}>
            🎉 {allEvents.length} Saved Event(s)
          </p>
          <span style={{ fontSize: '13px', color: '#718096' }}>Click to view details</span>
        </div>

        {/* 2. Family Directory Card */}
        <div className="feature-box" onClick={() => navigate('/family-tree')} style={{ backgroundColor: '#ffffff', padding: '30px 25px', borderRadius: '24px', textAlign: 'center' }}>
          <div style={{ width: '60px', height: '60px', backgroundColor: '#ebf8ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px auto' }}>
            <span style={{ fontSize: '28px' }}>👨‍👩‍👧‍👦</span>
          </div>
          <h3 style={{ color: '#1a2b4c', margin: '0 0 10px 0', fontSize: '18px', fontWeight: '600' }}>Family Directory</h3>
          <p style={{ color: '#1565c0', fontWeight: 'bold', fontSize: '15px', margin: '0 0 8px 0' }}>
            {memberCount > 0 ? `${memberCount} Family Members` : "Explore Tree"}
          </p>
          <span style={{ fontSize: '13px', color: '#718096' }}>View relationships & profiles</span>
        </div>

        {/* 3. Sweet Memories Card */}
        <div className="feature-box" onClick={() => navigate('/memories')} style={{ backgroundColor: '#ffffff', padding: '30px 25px', borderRadius: '24px', textAlign: 'center' }}>
          <div style={{ width: '60px', height: '60px', backgroundColor: '#fffaf0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px auto' }}>
            <span style={{ fontSize: '28px' }}>📸</span>
          </div>
          <h3 style={{ color: '#1a2b4c', margin: '0 0 10px 0', fontSize: '18px', fontWeight: '600' }}>Sweet Memories</h3>
          <p style={{ color: '#e65100', fontWeight: 'bold', fontSize: '15px', margin: '0 0 8px 0' }}>
            🖼️ {photos.length} Photo(s) Saved
          </p>
          <span style={{ fontSize: '13px', color: '#718096' }}>Click to view gallery</span>
        </div>

        {/* Family Recipes Card */}
        <div className="feature-box" onClick={() => navigate('/recipes')} style={{ backgroundColor: '#ffffff', padding: '30px 25px', borderRadius: '24px', textAlign: 'center' }}>
          <div style={{ width: '60px', height: '60px', backgroundColor: '#fef3c7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px auto' }}>
            <span style={{ fontSize: '28px' }}>🍲</span>
          </div>
          <h3 style={{ color: '#1a2b4c', margin: '0 0 10px 0', fontSize: '18px', fontWeight: '600' }}>Family Recipes</h3>
          <p style={{ color: '#b45309', fontWeight: 'bold', fontSize: '15px', margin: '0 0 8px 0' }}>
            பாரம்பரிய சமையல்
          </p>
          <span style={{ fontSize: '13px', color: '#718096' }}>வீட்டுச் சமையல் குறிப்புகள்</span>
        </div>
      </div>

      
      {showEventsModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 2000, padding: '20px', boxSizing: 'border-box'
        }}>
          <div style={{
            backgroundColor: '#ffffff', borderRadius: '24px', padding: '30px',
            width: '100%', maxWidth: '500px', maxHeight: '80vh', overflowY: 'auto',
            boxShadow: '0 25px 50px rgba(0,0,0,0.25)', position: 'relative'
          }}>
            {/* Close Button */}
            <button 
              onClick={() => setShowEventsModal(false)}
              style={{
                position: 'absolute', top: '20px', right: '20px',
                background: '#f1f5f9', border: 'none', borderRadius: '50%',
                width: '36px', height: '36px', cursor: 'pointer',
                fontSize: '18px', fontWeight: 'bold', color: '#475569'
              }}
            >
              ✕
            </button>

            <h2 style={{ margin: '0 0 20px 0', color: '#1a2b4c', fontSize: '22px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>📅</span> Saved Family Events
            </h2>

            {allEvents.length === 0 ? (
              <p style={{ color: '#64748b', textAlign: 'center', margin: '40px 0' }}>
                No events saved in the calendar yet!
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {allEvents.map((evt, idx) => (
                  <div key={evt.id || evt._id || idx} style={{
                    padding: '16px', borderRadius: '16px', backgroundColor: '#f8fafc',
                    borderLeft: '4px solid #1a2b4c', border: '1px solid #e2e8f0', borderLeftWidth: '5px'
                  }}>
                    <div style={{ fontWeight: '600', color: '#1e293b', fontSize: '16px', marginBottom: '4px' }}>
                      {evt.title}
                    </div>
                    <div style={{ fontSize: '13px', color: '#059669', fontWeight: '500' }}>
                      🗓️ {new Date(evt.event_date || evt.eventDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                    {evt.description && (
                      <div style={{ fontSize: '13px', color: '#64748b', marginTop: '6px' }}>
                        {evt.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- NEWLY ADDED AUTOMATIC TODAY NOTIFICATION MODAL --- */}
      {todayNotification && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(6px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 9999, padding: '20px', boxSizing: 'border-box'
        }}>
          <div style={{
            backgroundColor: '#ffffff', borderRadius: '24px', padding: '35px 25px',
            width: '100%', maxWidth: '420px', position: 'relative',
            boxShadow: '0 25px 50px rgba(0,0,0,0.3)', textAlign: 'center',
            border: '2px solid #bc9226', animation: 'popupBounce 0.4s ease'
          }}>
            <style>{`
              @keyframes popupBounce {
                0% { transform: scale(0.7); opacity: 0; }
                100% { transform: scale(1); opacity: 1; }
              }
            `}</style>
            
            {/* Close Button */}
            <button 
              onClick={handleCloseNotification}
              style={{
                position: 'absolute', top: '15px', right: '15px',
                background: '#f1f5f9', border: 'none', borderRadius: '50%',
                width: '36px', height: '36px', cursor: 'pointer',
                fontSize: '18px', fontWeight: 'bold', color: '#64748b'
              }}
            >
              ✕
            </button>

            <div style={{ fontSize: '50px', marginBottom: '10px' }}>🔔🎉</div>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#bc9226', textTransform: 'uppercase', letterSpacing: '1px' }}>
              இன்றைய சிறப்பம்ச நற்செய்தி!
            </span>

            <h3 style={{ margin: '10px 0 15px 0', color: '#1a2b4c', fontSize: '22px', fontWeight: '700' }}>
              {todayNotification.title}
            </h3>

            <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '14px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
              <p style={{ margin: '0 0 6px 0', color: '#475569', fontSize: '14px', fontWeight: '600' }}>
                📅 <strong>தேதி:</strong> {new Date(todayNotification.event_date || todayNotification.eventDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
              {todayNotification.description && (
                <p style={{ margin: 0, color: '#64748b', fontSize: '13.5px', lineHeight: '1.5' }}>
                  💬 {todayNotification.description}
                </p>
              )}
            </div>

            <button 
              onClick={handleCloseNotification}
              style={{
                backgroundColor: '#1a2b4c', color: '#ffffff', border: 'none',
                padding: '12px 28px', borderRadius: '12px', cursor: 'pointer',
                fontWeight: '600', fontSize: '15px', boxShadow: '0 4px 12px rgba(26,43,76,0.3)'
              }}
            >
              வாழ்த்துகள்! ❤️
            </button>
          </div>
        </div>
      )}
      {/* -------------------------------------------------------- */}

      {/* Footer */}
      <footer style={{
        width: '100%', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0',
        zIndex: 999, padding: '16px 24px', boxSizing: 'border-box', marginTop: 'auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto', gap: '15px' }}>
          <div style={{ fontSize: '14.5px', color: '#1a2b4c', fontWeight: '600' }}>
            <span>"Unity is our family's strength, love is our foundation!"</span>
          </div>
          <div style={{ fontSize: '13px', color: '#718096' }}>
            © {new Date().getFullYear()} <strong>All Family Members</strong>
          </div>
          <div style={{ fontSize: '13.5px', color: '#ffffff', backgroundColor: '#c29292', padding: '6px 16px', borderRadius: '50px', fontWeight: '600', display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
            <span>🗓️ {time.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span>⏰ {time.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}