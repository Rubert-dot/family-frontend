import React from 'react';
import { Link } from 'react-router-dom';

export default function FamilyTree() {
  return (
    <div className="family-tree-container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f1f5f9',
      padding: '40px 20px 100px 20px',
      boxSizing: 'border-box',
      fontFamily: '"Poppins", "Segoe UI", sans-serif'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  
        .tree-node {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          border: 1px solid #e2e8f0;
          padding: 16px 20px;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          min-width: 180px;
        }

        .tree-node:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(26, 43, 76, 0.12);
          border-color: #bc9226;
        }

        .root-node {
          background: linear-gradient(135deg, #1a2b4c 0%, #111d33 100%);
          color: #ffffff;
          border-color: #bc9226;
          box-shadow: 0 10px 20px rgba(26, 43, 76, 0.2);
        }

        .partner-connector {
          color: #e11d48;
          font-weight: bold;
          margin: 0 6px;
        }

        .child-node {
          background: #f8fafc;
          border: 1px dashed #cbd5e0;
          border-radius: 12px;
          padding: 8px 14px;
          margin: 6px 0;
          font-size: 13px;
          font-weight: 600;
          color: #334155;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
          text-align: center;
        }

        .back-btn {
          text-decoration: none;
          color: #1a2b4c;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 25px;
          transition: transform 0.2s ease;
        }
        .back-btn:hover {
          transform: translateX(-5px);
        }
      `}</style>


      <div style={{ width: '100%', maxWidth: '1200px', alignSelf: 'center' }}>
        <Link to="/" className="back-btn">
          <span>←</span> <span>Back to Home</span>
        </Link>
      </div>

   
      <div style={{
        width: '100%',
        maxWidth: '1300px',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        padding: '50px 30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
        boxSizing: 'border-box',
        textAlign: 'center',
        border: '1px solid #e2e8f0'
      }}>
        <h2 style={{ color: '#1a2b4c', fontSize: '32px', margin: '0 0 10px 0', fontWeight: '700' }}>
          🌳 நம் குடும்ப வம்சம் (Family Tree)
        </h2>
        <div style={{ width: '60px', height: '4px', backgroundColor: '#bc9226', margin: '0 auto 20px auto', borderRadius: '2px' }}></div>
        <p style={{ color: '#64748b', fontSize: '15px', margin: '0 0 50px 0' }}>
          தலைமுறைகள் கடந்தும் தழைத்தோங்கும் நமது குடும்பத்தின் அழகிய உறவுகளின் வரைபடம்!
        </p>

  
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px'
        }}>
          
      
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="tree-node root-node" style={{ padding: '20px 35px' }}>
              <div style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '0.5px' }}>
                Susaimanikkam <span className="partner-connector">❤️</span> Alosanaimary
              </div>
              <div style={{ fontSize: '12px', color: '#bc9226', marginTop: '6px', fontWeight: '600', textTransform: 'uppercase' }}>
          
              </div>
            </div>
      
            <div style={{ width: '3px', height: '35px', backgroundColor: '#1a2b4c', opacity: 0.4 }}></div>
          </div>

     
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            width: '100%',
            maxWidth: '1250px'
          }}>

          
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 200px', minWidth: '220px' }}>
              <div className="tree-node">
                <span style={{ fontSize: '20px' }}>👨‍👩‍👦</span>
                <h4 style={{ margin: '8px 0 2px 0', color: '#1a2b4c', fontSize: '14.5px', fontWeight: '700' }}>SavariRaj</h4>
                <div style={{ fontSize: '11px', color: '#64748b', margin: '2px 0' }}>துணைவியார்</div>
                <h5 style={{ margin: '0 0 8px 0', color: '#5b21b6', fontSize: '14px', fontWeight: '600' }}>Nagomi</h5>
                
           
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '10px', marginTop: '10px' }}>
                  <div style={{ fontSize: '10px', color: '#bc9226', fontWeight: '700', marginBottom: '6px', textAlign: 'left' }}>👶 பிள்ளைகள்:</div>
                  <div className="child-node">👦 Robin Raj</div>
                  <div className="child-node">👦 Kevin Raj</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 200px', minWidth: '220px' }}>
              <div className="tree-node">
                <span style={{ fontSize: '20px' }}>👨‍👩‍👧</span>
                <h4 style={{ margin: '8px 0 2px 0', color: '#1a2b4c', fontSize: '14.5px', fontWeight: '700' }}>Loordhu Selvi</h4>
                <div style={{ fontSize: '11px', color: '#64748b', margin: '2px 0' }}>கணவர்</div>
                <h5 style={{ margin: '0 0 8px 0', color: '#5b21b6', fontSize: '14px', fontWeight: '600' }}>PaulRaj</h5>
                
              
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '10px', marginTop: '10px' }}>
                  <div style={{ fontSize: '10px', color: '#bc9226', fontWeight: '700', marginBottom: '6px', textAlign: 'left' }}>👶 பிள்ளைகள்:</div>
                  <div className="child-node">👦 Qubert Felix Raj</div>
                  <div className="child-node">👦 Rubert Rex</div>
                </div>
              </div>
            </div>

          
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 200px', minWidth: '220px' }}>
              <div className="tree-node">
                <span style={{ fontSize: '20px' }}>👨‍👩‍👦</span>
                <h4 style={{ margin: '8px 0 2px 0', color: '#1a2b4c', fontSize: '14.5px', fontWeight: '700' }}>Rosilnmary</h4>
                <div style={{ fontSize: '11px', color: '#64748b', margin: '2px 0' }}>கணவர்</div>
                <h5 style={{ margin: '0 0 8px 0', color: '#5b21b6', fontSize: '14px', fontWeight: '600' }}>Louis Arokiya Dass</h5>
                
            
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '10px', marginTop: '10px' }}>
                  <div style={{ fontSize: '10px', color: '#bc9226', fontWeight: '700', marginBottom: '6px', textAlign: 'left' }}>👶 பிள்ளைகள்:</div>
                  <div className="child-node">👦 Ramis Raj</div>
                </div>
              </div>
            </div>

           
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 200px', minWidth: '220px' }}>
              <div className="tree-node">
                <span style={{ fontSize: '20px' }}>👨‍👩‍👧‍👦</span>
                <h4 style={{ margin: '8px 0 2px 0', color: '#1a2b4c', fontSize: '14.5px', fontWeight: '700' }}>Mary</h4>
                <div style={{ fontSize: '11px', color: '#64748b', margin: '2px 0' }}>கணவர்</div>
                <h5 style={{ margin: '0 0 8px 0', color: '#5b21b6', fontSize: '14px', fontWeight: '600' }}>Anthonysamy</h5>
                
                {/* 3rd Generation */}
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '10px', marginTop: '10px' }}>
                  <div style={{ fontSize: '10px', color: '#bc9226', fontWeight: '700', marginBottom: '6px', textAlign: 'left' }}>👶 பிள்ளைகள்:</div>
                  <div className="child-node">👧 Reena</div>
                  <div className="child-node">👦 Joswva</div>
                </div>
              </div>
            </div>

         
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 200px', minWidth: '220px' }}>
              <div className="tree-node">
                <span style={{ fontSize: '20px' }}>👨‍👩‍👦</span>
                <h4 style={{ margin: '8px 0 2px 0', color: '#1a2b4c', fontSize: '14.5px', fontWeight: '700' }}>Rajarethinam</h4>
                <div style={{ fontSize: '11px', color: '#64748b', margin: '2px 0' }}>துணைவியார்</div>
                <h5 style={{ margin: '0 0 8px 0', color: '#5b21b6', fontSize: '14px', fontWeight: '600' }}>Vimala</h5>
                
             
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '10px', marginTop: '10px' }}>
                  <div style={{ fontSize: '10px', color: '#bc9226', fontWeight: '700', marginBottom: '6px', textAlign: 'left' }}>👶 பிள்ளைகள்:</div>
                  <div className="child-node">👧 Subiya</div>
                  <div className="child-node">👦 Deniesh</div>
                </div>
              </div>
            </div>

        
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 200px', minWidth: '220px' }}>
              <div className="tree-node" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: '24px' }}>🙋‍♂️</span>
                <h4 style={{ margin: '12px 0 4px 0', color: '#1a2b4c', fontSize: '16px', fontWeight: '700' }}>Ilakiyadhesan</h4>
                <div style={{ fontSize: '12px', color: '#64748b', fontStyle: 'italic' }}>குடும்பத்தின் செல்லப் பிள்ளை ✨</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}