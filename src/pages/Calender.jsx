import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { getEvents, createEvent, deleteEvent } from '../Api';

export default function Calendar() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [createdBy, setCreatedBy] = useState(localStorage.getItem('familyMemberName') || '');
  const [saving, setSaving] = useState(false);

  const refresh = () => getEvents().then(setEvents).catch(() => setEvents([]));

  useEffect(() => { 
    refresh(); 
  }, []);

  const today = new Date().toISOString().slice(0, 10);

  const upcoming = events.filter(ev => {
    const rawDate = ev.event_date || ev.eventDate;
    if (!rawDate) return false;
    return rawDate.slice(0, 10) >= today;
  });

  const past = events.filter(ev => {
    const rawDate = ev.event_date || ev.eventDate;
    if (!rawDate) return false;
    return rawDate.slice(0, 10) < today;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !eventDate) return alert('Enter a title and date');
    localStorage.setItem('familyMemberName', createdBy);
    setSaving(true);
    
    try {
      await createEvent({ 
        title, 
        description, 
        eventDate: eventDate,
        event_date: eventDate, 
        createdBy: createdBy,
        created_by: createdBy
      });
      setTitle(''); 
      setDescription(''); 
      setEventDate('');
      refresh();
    } catch (err) {
      alert('Could not save event: ' + (err.response?.data?.message || err.response?.data || err.message));
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Remove this event?')) return;
    await deleteEvent(id);
    refresh();
  };

  const renderDate = (rawDate) => {
    if (!rawDate) return { day: '00', month: 'MMM', year: '0000' };
    const parts = rawDate.slice(0, 10).split('-'); 
    if (parts.length === 3) {
      const dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
      return {
        day: dateObj.getDate(),
        month: dateObj.toLocaleDateString('en-IN', { month: 'short' }),
        year: dateObj.getFullYear()
      };
    }
    const fallbackDate = new Date(rawDate);
    return {
      day: fallbackDate.getDate(),
      month: fallbackDate.toLocaleDateString('en-IN', { month: 'short' }),
      year: fallbackDate.getFullYear()
    };
  };

  return (
    <div className="page-container" style={{
      padding: '40px 20px',
      maxWidth: '1000px',
      margin: '0 auto',
      fontFamily: '"Segoe UI", Roboto, sans-serif',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      

      <style>{`
        .calendar-title {
          font-size: 32px;
          color: #1a2b4c;
          font-weight: 700;
          text-align: center;
          margin-bottom: 35px;
          letter-spacing: 0.5px;
        }
        .modern-form {
          background: #fff;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          border: 1px solid #e9ecef;
          margin-bottom: 45px;
        }
        .form-title {
          color: #1a2b4c;
          margin-top: 0;
          margin-bottom: 20px;
          font-size: 22px;
          font-weight: 600;
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        @media (max-width: 600px) {
          .form-grid { grid-template-columns: 1fr; }
        }
        .modern-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 10px;
          border: 1px solid #dee2e6;
          font-size: 15px;
          box-sizing: border-box;
          transition: all 0.3s;
        }
        .modern-input:focus {
          border-color: #1a2b4c;
          box-shadow: 0 0 0 3px rgba(26,43,76,0.1);
          outline: none;
        }
        .submit-btn {
          background: #1a2b4c;
          color: #fff;
          border: none;
          padding: 12px 28px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
        }
        .submit-btn:hover { background: #111e36; }
        .submit-btn:active { transform: scale(0.98); }
        .submit-btn:disabled { background: #ced4da; cursor: not-allowed; }
        
        .section-heading {
          font-size: 22px;
          color: #1a2b4c;
          margin-bottom: 20px;
          font-weight: 600;
          border-left: 4px solid #1a2b4c;
          padding-left: 10px;
        }
        .event-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 40px;
        }
        .modern-event-card {
          display: flex;
          align-items: center;
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          border: 1px solid #e9ecef;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .modern-event-card:hover {
          transform: translateX(5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }
        .date-badge {
          background: #1a2b4c;
          color: #fff;
          min-width: 75px;
          height: 75px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-right: 25px;
          box-shadow: 0 4px 10px rgba(26,43,76,0.2);
        }
        .date-badge .day { font-size: 24px; font-weight: 700; line-height: 1; }
        .date-badge .month { font-size: 12px; text-transform: uppercase; font-weight: 600; margin-top: 2px; }
        .date-badge .year { font-size: 10px; opacity: 0.7; }
        
        .event-main { flex-grow: 1; }
        .event-title-text { font-size: 18px; font-weight: 600; color: #212529; margin-bottom: 4px; }
        .event-desc-text { font-size: 14px; color: #6c757d; margin-bottom: 8px; }
        .event-meta-info { font-size: 12px; color: #adb5bd; }
        .event-meta-info span { font-weight: 600; color: #495057; }
        
        .modern-delete-btn {
          background: #fff;
          color: #dc3545;
          border: 1px solid #f8d7da;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .modern-delete-btn:hover {
          background: #dc3545;
          color: #fff;
          border-color: #dc3545;
        }
        .past-accordion {
          background: #fff;
          border-radius: 12px;
          padding: 15px;
          border: 1px solid #e9ecef;
        }
        .past-accordion summary {
          font-weight: 600;
          color: #6c757d;
          cursor: pointer;
          outline: none;
        }
        .faded-card {
          display: flex;
          align-items: center;
          padding: 12px;
          border-bottom: 1px solid #f1f3f5;
          opacity: 0.6;
        }
        .faded-card:last-child { border-bottom: none; }
        .faded-date { font-weight: 600; color: #6c757d; width: 100px; font-size: 14px; }
        .faded-title { color: #495057; font-size: 15px; }
        .empty-state {
          padding: 40px;
          text-align: center;
          background: #fff;
          border-radius: 16px;
          color: #6c757d;
          border: 1px dashed #dee2e6;
        }
      `}</style>
     

      <h2 className="calendar-title">Family Events Calendar</h2>

      {/* 📝 1. MODERN ADD EVENT FORM */}
      <form className="modern-form" onSubmit={handleSubmit}>
        <h3 className="form-title">✨ Schedule a New Event</h3>
        <div className="form-grid">
          <input
            className="modern-input"
            type="text"
            placeholder="Event Title (e.g., Mom's Birthday Party)"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            className="modern-input"
            type="date"
            value={eventDate}
            onChange={e => setEventDate(e.target.value)}
          />
        </div>
        <div className="form-grid">
          <input
            className="modern-input"
            type="text"
            placeholder="Event Details / Location (optional)"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            className="modern-input"
            type="text"
            placeholder="Your Name"
            value={createdBy}
            onChange={e => setCreatedBy(e.target.value)}
          />
        </div>
        <div style={{ textAlign: 'right' }}>
          <button className="submit-btn" type="submit" disabled={saving}>
            {saving ? 'Saving...' : 'Add Event'}
          </button>
        </div>
      </form>

      {/* 🗓️ 2. UPCOMING EVENTS SECTION */}
      <h3 className="section-heading">📅 Upcoming Celebrations</h3>
      {upcoming.length === 0 ? (
        <div className="empty-state">
          <p style={{ fontSize: '16px', margin: 0 }}>No upcoming events scheduled yet.</p>
        </div>
      ) : (
        <div className="event-list">
          {upcoming.map(ev => {
            const dateDetails = renderDate(ev.event_date || ev.eventDate);
            return (
              <div className="modern-event-card" key={ev.id}>
                <div className="date-badge">
                  <span className="day">{dateDetails.day}</span>
                  <span className="month">{dateDetails.month}</span>
                  <span className="year">{dateDetails.year}</span>
                </div>
                
                <div className="event-main">
                  <div className="event-title-text">{ev.title}</div>
                  {ev.description && <div className="event-desc-text">{ev.description}</div>}
                  <div className="event-meta-info">
                    Added by <span>{ev.created_by || ev.createdBy || 'Family Member'}</span>
                  </div>
                </div>
                
                <button className="modern-delete-btn" onClick={() => handleDelete(ev.id)}>Remove</button>
              </div>
            );
          })}
        </div>
      )}

      {/* ⏳ 3. PAST EVENTS ACCORDION SECTION */}
      {past.length > 0 && (
        <div style={{ marginTop: '30px' }}>
          <h3 className="section-heading" style={{ color: '#6c757d', borderLeftColor: '#ced4da' }}>⏳ Memory Lane</h3>
          <details className="past-accordion">
            <summary>View past family events ({past.length})</summary>
            <div style={{ marginTop: '15px' }}>
              {past.map(ev => {
                const dateDetails = renderDate(ev.event_date || ev.eventDate);
                return (
                  <div className="faded-card" key={ev.id}>
                    <div className="faded-date">
                      {dateDetails.day} {dateDetails.month} {dateDetails.year}
                    </div>
                    <div className="faded-title">{ev.title}</div>
                  </div>
                );
              })}
            </div>
          </details>
        </div>
      )}
           <button className="back-btn" style={{padding:'8px',
           marginLeft:'40%',
           color:'#fff',
           backgroundColor:'rgb(220, 2, 2)',
           borderRadius:'8px',
           cursor:"pointer",
           fontWeight:'bold'
           }}onClick={()=> navigate('/')}>
       ← Back to Home
      </button>
    </div>
  );
}