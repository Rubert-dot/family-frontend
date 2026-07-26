import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SavarirajImg from '../assets/Savariraj.jpg';
import NagomiImg from '../assets/Nagomo.jpg';
import PaulrajImg from'../assets/Paul.jpg';
import SelviImg from '../assets/Selvi.jpg';
import LouisImg from '../assets/Louis.jpg';
import RosyImg from '../assets/Rosy.jpg';
import RajarethinamImg from '../assets/Rajarenthinam.jpg';
import VimalImg from '../assets/Vimala.jpg';

export default function FamilyTree() {
 
  const [selectedFamily, setSelectedFamily] = useState(null);

  
  const familyData = [
    {
      id: 1,
      fatherName: "SavariRaj",
      motherName: "Nagomi",
      relationType: "துணைவியார்",
   
      fatherPhoto: SavarirajImg,
      motherPhoto: NagomiImg,
      children: ["👦 Robin Raj", "👦 Kevin Raj"],
      description: ""
    },
    {
      id: 2,
      fatherName: "PaulRaj",
      motherName: "Loordhu Selvi",
      relationType: "கணவர்",
      fatherPhoto: PaulrajImg,
      motherPhoto:  SelviImg,
      children: ["👦 Qubert Felix Raj", "👦 Rubert Rex"],
      description: "குடும்பத்தின் தூண்களில் ஒன்று."
    },
    {
      id: 3,
      fatherName: "Louis Arokiya Dass",
      motherName: "Rosilnmary",
      relationType: "கணவர்",
      fatherPhoto: LouisImg,
      motherPhoto: RosyImg,
      children: ["👦 Ramis Raj"],
      description: "மகிழ்ச்சி நிறைந்த குடும்பம்."
    },
    {
      id: 4,
      fatherName: "Anthonysamy",
      motherName: "Mary",
      relationType: "கணவர்",
      fatherPhoto: "",
      motherPhoto: "",
      children: ["👧 Reena", "👦 Joswva"],
      description: "ஒற்றுமைக்கு பெயர் பெற்ற குடும்பம்."
    },
    {
      id: 5,
      fatherName: "Rajarethinam",
      motherName: "Vimala",
      relationType: "துணைவியார்",
      fatherPhoto: RajarethinamImg,
      motherPhoto: VimalImg,
      children: ["👧 Subiya", "👦 Deniesh"],
      description: "அன்பான இல்லம்."
    }
  ];

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
          padding: 20px 16px;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          min-width: 220px;
          cursor: pointer;
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
          cursor: default;
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
           நம் குடும்ப வம்சம் (Family Tree)
        </h2>
        <div style={{ width: '60px', height: '4px', backgroundColor: '#bc9226', margin: '0 auto 20px auto', borderRadius: '2px' }}></div>
        <p style={{ color: '#64748b', fontSize: '15px', margin: '0 0 50px 0' }}>
         புகைப்படங்கள் மற்றும் குடும்ப விவரங்களைக் காணவும்!
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
            </div>
            <div style={{ width: '3px', height: '35px', backgroundColor: '#1a2b4c', opacity: 0.4 }}></div>
          </div>

         
          <div style={{
            display: 'flex',
            justify: 'center',
            gap: '24px',
            flexWrap: 'wrap',
            width: '100%',
            maxWidth: '1250px'
          }}>


            {familyData.map((item) => (
              <div key={item.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 200px', minWidth: '220px' }}>
                <div className="tree-node" onClick={() => setSelectedFamily(item)}>
                  
                 
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                    <img 
                      src={item.fatherPhoto} 
                      alt={item.fatherName} 
                      style={{ width: '55px', height: '55px', borderRadius: '50%', border: '2px solid #1a2b4c', objectFit: 'cover' }} 
                    />
                    <img 
                      src={item.motherPhoto} 
                      alt={item.motherName} 
                      style={{ width: '55px', height: '55px', borderRadius: '50%', border: '2px solid #bc9226', marginLeft: '-12px', objectFit: 'cover' }} 
                    />
                  </div>

                  <h4 style={{ margin: '4px 0 2px 0', color: '#1a2b4c', fontSize: '15px', fontWeight: '700' }}>{item.fatherName}</h4>
                  <div style={{ fontSize: '11px', color: '#64748b', margin: '2px 0' }}>{item.relationType}</div>
                  <h5 style={{ margin: '0 0 8px 0', color: '#5b21b6', fontSize: '14px', fontWeight: '600' }}>{item.motherName}</h5>

                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '10px', marginTop: '10px' }}>
                    <div style={{ fontSize: '10px', color: '#bc9226', fontWeight: '700', marginBottom: '6px', textAlign: 'left' }}>👶 பிள்ளைகள்:</div>
                    {item.children.map((child, idx) => (
                      <div key={idx} className="child-node">{child}</div>
                    ))}
                  </div>

                  <div style={{ marginTop: '10px', fontSize: '11px', color: '#059669', fontWeight: '600' }}>
                    🔍 Click for details
                  </div>
                </div>
              </div>
            ))}

            {/* { Ilakiyadhesan */} 
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 200px', minWidth: '220px' }}>
              <div className="tree-node" style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', cursor: 'default' }}>
                <span style={{ fontSize: '28px' }}>🙋‍♂️</span>
                <h4 style={{ margin: '12px 0 4px 0', color: '#1a2b4c', fontSize: '16px', fontWeight: '700' }}>Ilakiyadhesan</h4>
                <div style={{ fontSize: '12px', color: '#64748b', fontStyle: 'italic' }}>குடும்பத்தின் செல்லப் பிள்ளை ✨</div>
              </div>
            </div>

          </div>
        </div>
      </div>

     
      {selectedFamily && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 2000, padding: '20px', boxSizing: 'border-box'
        }}>
          <div style={{
            backgroundColor: '#ffffff', borderRadius: '24px', padding: '30px',
            width: '100%', maxWidth: '480px', position: 'relative',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)', textAlign: 'center'
          }}>
          
            <button 
              onClick={() => setSelectedFamily(null)}
              style={{
                position: 'absolute', top: '18px', right: '18px',
                background: '#f1f5f9', border: 'none', borderRadius: '50%',
                width: '36px', height: '36px', cursor: 'pointer',
                fontSize: '18px', fontWeight: 'bold', color: '#475569'
              }}
            >
              ✕
            </button>

            <h3 style={{ margin: '0 0 20px 0', color: '#1a2b4c', fontSize: '22px' }}>
              👨‍👩‍👧‍👦 குடும்ப விவரங்கள்
            </h3>

           
            <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '20px' }}>
              <div style={{ textAlign: 'center' }}>
                <img 
                  src={selectedFamily.fatherPhoto} 
                  alt={selectedFamily.fatherName} 
                  style={{ width: '90px', height: '90px', borderRadius: '50%', border: '3px solid #1a2b4c', objectFit: 'cover' }} 
                />
                <div style={{ fontWeight: '700', color: '#1a2b4c', marginTop: '6px', fontSize: '15px' }}>{selectedFamily.fatherName}</div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <img 
                  src={selectedFamily.motherPhoto} 
                  alt={selectedFamily.motherName} 
                  style={{ width: '90px', height: '90px', borderRadius: '50%', border: '3px solid #bc9226', objectFit: 'cover' }} 
                />
                <div style={{ fontWeight: '700', color: '#5b21b6', marginTop: '6px', fontSize: '15px' }}>{selectedFamily.motherName}</div>
              </div>
            </div>

            {/* Description */}
            <div style={{ backgroundColor: '#f8fafc', padding: '15px', borderRadius: '16px', marginBottom: '20px', border: '1px solid #e2e8f0' }}>
              <p style={{ margin: 0, color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>
                {selectedFamily.description}
              </p>
            </div>

    
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: '700', color: '#1a2b4c', fontSize: '14px', marginBottom: '8px' }}>
                👶 பிள்ளைகள்:
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {selectedFamily.children.map((child, idx) => (
                  <span key={idx} style={{
                    backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0',
                    color: '#166534', padding: '6px 14px', borderRadius: '50px',
                    fontSize: '13px', fontWeight: '600'
                  }}>
                    {child}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}