import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SavarirajImg from '../assets/Savariraj.jpg';
import NagomiImg from '../assets/Nagomi.jpg';
import PaulrajImg from '../assets/Paul.jpg';
import SelviImg from '../assets/Selvi.jpg';
import LouisImg from '../assets/Louis.jpg';
import RosyImg from '../assets/Rosy.jpg';
import RajarethinamImg from '../assets/Rajarethinam.jpg';
import VimalImg from '../assets/Vimala.jpg';
import IllakiyadhesanImg from '../assets/Illakiyadhesan.jpg';

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
      weddingDate: "",
      location: "சென்னை / திருச்சி",
      occupation: "private company / குடும்பத் தலைவி",
      lifeStory: {
        beginning:
          "சவரிராஜ் வீட்டின் முதல் பிள்ளை. இவர் சிறுவயது முதல் எல்லா வகையான வேலைகளும் செய்தார். பின்பு இவரின் அப்பா இவரை கல்லூரிக்கு சேர்த்து வைத்தார். அங்கே அவர் அந்தப் படிப்பை படித்தார். இவர் கல்லூரிக்கு செல்லும்போது வீட்டில் வேலைகளை செய்வார் என சொன்னார். சவரிராஜ் மாமாவின் வீட்டின் குக்கூருக்கு சென்று அங்கே எல்லா வேலைகளையும் செய்தார். பிறகு ஒரு காலத்தில் கல்லூரி முடித்த பின்னர் சென்னை வேலைக்கு அனுப்பப்படுகிறார். அங்கே முதலில் சரியான வேலை இல்லாத போது, அதை சென்னையில் இருக்க முடிவு செய்ய முடியவில்லை. பின்னர் ஒரு நிறுவனத்தில் வேலை கிடைக்க வைக்கும், அங்கே தான் தனது பயணத்தை தொடங்கினார். அவர் காதலித்து திருமணம் செய்துக் கொண்டார். ஆரம்ப காலத்தில் பல சவால்களைச் சந்தித்து, உழைப்பையே மூலதனமாகக் கொண்டு தங்கள் பயணத்தைத் தொடங்கினார்கள்.",
        turningPoint:
          "சவரி ராஜ் மற்றும் நாகோமி இருவரும் சென்னையில் தங்கள் வாழ்க்கைப் பயணத்தைத் தொடங்கினார்கள். இவர்கள் இருவரும் வேலைக்குச் சென்றனர். இவர்களின் வாழ்க்கையில் மகிழ்ச்சியான தருணமாக 01 ஜனவரி 2001 அன்று ராபின் ராஜும், 16 ஜூலை 2003 அன்று கெவின் ராஜும் பிறந்தனர். சவரி ராஜும் நாகோமியும் கடினமாக உழைத்துத் தங்கள் பிள்ளைகளை நன்றாகப் படிக்க வைத்தார்கள். சவரி ராஜ் அவர்களின் விடாமுயற்சியும், நாகோமியின் பக்கபலமான ஆதரவும் குடும்பத்தின் வளர்ச்சிக்கு அடித்தளமாக அமைந்தது.",
        present:
          "இன்று ராபின் ராஜ் மற்றும் கெவின் ராஜ் ஆகிய இரு மகன்களையும் சிறந்த முறையில் வளர்த்து, சொந்த முயற்சியில் உயர்ந்து குடும்பத்திற்கே முன்னுதாரணமாகத் திகழ்கிறார்கள்.",
        favoriteMemory:
          "குடும்ப விழாக்கள் அனைத்திலும் நாகோமி அத்தையின் கைமணத்தில் உருவாகும் விருந்து தான் அனைவரையும் ஒன்றிணைக்கும் சிறப்பம்சமாகும்!"
      }
    },
    {
      id: 2,
      fatherName: "PaulRaj",
      motherName: "Loordhu Selvi",
      relationType: "கணவர்",
      fatherPhoto: PaulrajImg,
      motherPhoto: SelviImg,
      children: ["👦 Qubert Felix Raj", "👦 Rubert Rex"],
      weddingDate: "19 June 1996",
      location: "Trichy",
      occupation: " / ",
      lifeStory: {
        beginning:
          "குடும்பத்தின் மூத்தத் தூணாக நின்று அனைவரையும் வழிநடத்திய பெருமை பால்ராஜ் அவர்களுக்கு உண்டு.\n\nபால் ராஜ்:\nபால் ராஜ் சிறுவயது முதலே எந்த ஒரு வேலையையும் சிறப்பாகச் செய்யக்கூடிய திறன் கொண்டவர். இவர் கும்பகோணத்தில் ITI படித்தார். பின்னர் தனது சித்தப்பாவுடன் மேட்டூர் சென்று, அங்குள்ள மின்நிலையத்தில் (Power Plant) சிறிது காலம் வேலை செய்தார். பிறகு மீண்டும் சொந்த ஊருக்கு வந்து, டால்மியா சிமெண்ட் தொழிற்சாலையில் (Dalmia Cement Factory) ஒப்பந்தத் தொழிலாளராக (Contract Laborer) வேலை செய்யத் தொடங்கினார். அப்போது அவருடைய சம்பளம் ரூ. 17 ஆகும்.\n\nசெல்வி:\nசெல்வி தனது குடும்பத்தின் இரண்டாவது பிள்ளை, அதாவது சவரி ராஜின் சகோதரி ஆவார். இவர் வீட்டின் அனைத்து வேலைகளையும் தாங்களாகவே முன்வந்து செய்யக்கூடியவர். சிறுவயது முதலே வயல்வெளிகளில் வேலை செய்வது முதல் வீட்டில் சமையல் செய்வது வரை அனைத்தையும் ஒரே ஆளாகச் செய்து முடிப்பார். வீட்டில் உள்ள தனது சகோதரிகள் மற்றும் தம்பியை இவர்தான் பார்த்துக் கொள்வார். வீட்டின் செல்லப் பிள்ளையான இலக்கியதாசனை (குணி) சிறுவயதில் வளர்த்தவர் இவர்தான். பின்னர் வயல் வேலைகள், வாழைத் தார் தூக்குவது போன்ற கடினமான வேலைகளையும் குடும்பத்திற்காகச் செய்து வந்தார்.",
        turningPoint:
          "லூர்து செல்வி அவர்களின் அன்பான கவனிப்பும் நேர்மறையான எண்ணங்களும் குடும்பத்தை என்றும் மகிழ்ச்சியாக வைத்திருந்தது.",
        present:
          "க்யூபர்ட் ஃபெலிக்ஸ் ராஜ் மற்றும் ரூபர்ட் ரெக்ஸ் ஆகியோரைச் சிறந்த கல்வியாளர்களாகவும் நற்பண்பு உள்ளவர்களாகவும் உருவாக்கியுள்ளனர்.",
        favoriteMemory:
          "எந்த ஒரு குடும்பச் சிக்கலாக இருந்தாலும் இவர்களது ஆலோசனையும் வழிகாட்டுதலும் தான் முதல் தீர்வாக இருக்கும் ❤️"
      }
    },
    {
      id: 3,
      fatherName: "Louis Arokiya Dass",
      motherName: "Rosilnmary",
      relationType: "கணவர்",
      fatherPhoto: LouisImg,
      motherPhoto: RosyImg,
      children: ["👦 Ramis Raj"],
      weddingDate: "10 ஜனவரி 2005",
      location: "கோவை",
      occupation: "Private Company / குடும்ப நிர்வாகம்",
      lifeStory: {
        beginning:
          "லூயிஸ்:லூயிஸ் வீட்டின் இரண்டாவது பிள்ளை, அதாவது பால் ராஜின் சகோதரர் ஆவார். இவர் சிறுவயது முதலே நல்ல திறமை கொண்டவர். தனது பள்ளிப் படிப்பை முடித்துவிட்டு வேலைக்காகத் திருப்பூர் சென்றார். அப்போதிருந்தே ஆடை/ஜவுளித் துறையின் (Textile Industry) அனைத்து நுணுக்கங்களையும் கற்றுத் தேர்ந்தவர்.\n\nரோசி:\nஇவர் வீட்டின் 3-வது பிள்ளை, அதாவது செல்வியின் சகோதரி ஆவார். இவரும் சிறுவயது முதலே அனைத்து வேலைகளையும் செய்யக்கூடியவர். தனது அக்காவுடன் சேர்ந்து வேலைக்குச் செல்வார். சிறிது காலம் கழித்து, போலிஸில் சேர வேண்டும் என்ற தனது கனவிற்காகப் பயிற்சியில் ஈடுபட்டு வந்தார். ஆனால், தேர்வு செயல்பாட்டில் (Selection Process) அவரால் தேர்வாக முடியவில்லை. இருந்தாலும் மனம்தளராமல் வீட்டிற்கான வேலைகளைச் செய்து வந்தார். பின்னர் டெலிபோன் பூத்தில் (Telephone Booth) வேலை செய்தார்....எளிமையும் அன்பும் கொண்ட ஒரு அழகான பயணமாக இவர்களது வாழ்க்கை தொடங்கியது.",
        turningPoint:
          "லூயிஸ் ஆரோக்கிய தாஸ் அவர்களின் கடின உழைப்பும், ரோஸ்லின்மேரி அவர்களின் நேர்த்தியான குடும்ப நிர்வாகமும் இவர்களை உயர்த்தியது.",
        present:
          "மகன் ரமிஸ் ராஜ்-ன் எதிர்காலத்திற்காகத் தங்கள் வாழ்க்கையை அர்ப்பணித்து, சந்தோஷமான சூழலில் வாழ்கிறார்கள்.",
        favoriteMemory:
          "எப்போதும் முகத்தில் புன்னகையுடனும், உறவினர்களை இன்முகத்தோடு வரவேற்பதிலும் இவர்கள் தனி சிறப்புமிக்கவர்கள்! ✨"
      }
    },
    {
      id: 4,
      fatherName: "Anthonysamy",
      motherName: "Mary",
      relationType: "கணவர்",
      fatherPhoto: "",
      motherPhoto: "",
      children: ["👧 Reena", "👦 Joswva"],
      weddingDate: "05 நவம்பர் 2000",
      location: "Trichy",
      occupation: "Private",
      lifeStory: {
        beginning: "பாரம்பரியத்தையும் ஆன்மீகத்தையும் அடித்தளமாகக் கொண்டு தொடங்கிய குடும்பப் பயணம்.",
        turningPoint: "எத்தனை கடினமான காலகட்டத்திலும் நம்பிக்கையையும் ஒற்றுமையையும் கைவிடாமல் வாழ்ந்தார்கள்.",
        present: "ரீனா மற்றும் ஜோஷ்வா ஆகிய பிள்ளைகளுக்குப் பண்பாட்டையும் சிறந்த ஒழுக்கத்தையும் கற்பித்து வளர்த்துள்ளனர்.",
        favoriteMemory: "குடும்பத்தின் ஒற்றுமைக்கும், எந்தச் சூழலிலும் விட்டுக்கொடுக்காத அன்புக்கும் பெயர் பெற்றவர்கள் 🏛️"
      }
    },
    {
      id: 5,
      fatherName: "Rajarethinam",
      motherName: "Vimala",
      relationType: "துணைவியார்",
      fatherPhoto: RajarethinamImg,
      motherPhoto: VimalImg,
      children: ["👧 Subiya", "👦 Denniesh"],
      weddingDate: "25 Jan",
      location: "Lalgudi",
      occupation: "",
      lifeStory: {
        beginning:
          "ராஜரத்தினம் (ஆச்சி):இவர் வீட்டின் 5-வது பிள்ளை, அதாவது சவரி ராஜ், செல்வி, ரோசி, மேரி ஆகியோரின் சகோதரர் ஆவார். இவர் சிறுவயது முதலே வீட்டின் முன்னேற்றத்திற்காக உழைத்தவர். இவருக்கு வீட்டில் உள்ள செல்லப் பெயர் \"ஆச்சி\".\n\nஇவர் தனது அண்ணன் மற்றும் அக்காவின் பிள்ளைகள் கோடை விடுமுறைக்கு வீட்டிற்குச் சென்றால் அவர்களைச் சிறப்பாகப் பார்த்துக்கொள்வார். நாங்கள் 5 பேர் இருந்ததால், அவரும் எங்களுடன் வந்து தங்கிக் கொள்வார். காலை முதல் மாலை வரை எங்களுடனேயே இருப்பார்.\n\nஅவருடனான அந்த நினைவுகள் மிகவும் இனிமையானவை:\n- ஒரு XL இருசக்கர வாகனத்தில் 6 பேர் ஒன்றாகப் பயணித்தது\n- ஆச்சி சர்பத் கடை\n- மாடுகளுக்குத் தீவனம் போடுவது\n- காலையில் டீ குடிக்கும் போது ஆப்பம் வாங்கித் தருவது\n\nஎன எண்ணற்ற நெகிழ்ச்சியான, அழகான நினைவுகளை நமக்குத் தந்தவர்...நம்பிக்கை மற்றும் பரஸ்பர புரிந்துணர்வுடன் தொடங்கிய வாழ்க்கைப் பாதை.",
        turningPoint:
          "ராஜரத்தினம் அவர்களின் விடாமுயற்சியும், விமலா அவர்களின் அறிவார்ந்த வழிகாட்டுதலும் குடும்பத்தை அடுத்த கட்டத்திற்கு எடுத்துச் சென்றது.",
        present:
          "சுபியா மற்றும் தினேஷ் ஆகிய இரு பிள்ளைகளின் கல்விக்கும் நல்வாழ்விற்கும் முன்னுரிமை அளித்து அன்பான இல்லத்தை உருவாக்கியுள்ளனர்.",
        favoriteMemory:
          "அமைதியான அணுகுமுறையும் பிள்ளைகளின் கனவுகளுக்குச் சிறகு கொடுக்கும் பாசமும் இவர்களது அடையாளம் 📚"
      }
    },
    {
      id: 6,
      fatherName: "Ilakiyadhesan",
      motherName: "",
      relationType: "குடும்பத்தின் செல்லப் பிள்ளை",
      fatherPhoto: IllakiyadhesanImg,
      motherPhoto: "",
      children: [],
      weddingDate: "",
      location: "",
    
      isSingle: true,
      lifeStory: {
        beginning: "குடும்பத்தின் கடைக்குட்டி, அனைவரின் அன்பிலும் அரவணைப்பிலும் வளர்ந்தவர்.",
        // turningPoint: "குடும்பத்தினரின் ஆசீர்வாதத்தோடும் வழிகாட்டுதலோடும் தன் லட்சியப் பாதையில் முன்னேறி வருகிறார்.",
        // present: "தொழில்நுட்பத் துறையில் தனக்கென ஒரு இடத்தைப் பிடித்து, குடும்பத்திற்குப் பெருமை சேர்த்து வருகிறார்.",
        // favoriteMemory: "அனைவரிடமும் பாசத்தோடும் துடிப்போடும் பழகும் வீட்டின் செல்லக் குழந்தை ✨"
      }
    }
  ];

  const renderAvatar = (photoUrl, name, borderColor, width = '100px', height = '110px') => {
    if (photoUrl) {
      return (
        <img 
          src={photoUrl} 
          alt={name} 
          style={{ 
            width: width, 
            height: height, 
            borderRadius: '16px', 
            border: `3px solid ${borderColor}`, 
            objectFit: 'cover',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }} 
        />
      );
    }
    return (
      <div style={{
        width: width,
        height: height,
        borderRadius: '16px',
        border: `3px solid ${borderColor}`,
        backgroundColor: '#e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
        color: '#64748b',
        fontWeight: 'bold',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
      }}>
        {name ? name.charAt(0) : '👤'}
      </div>
    );
  };

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
          border-radius: 20px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          border: 1px solid #e2e8f0;
          padding: 24px 18px;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          min-width: 250px;
          cursor: pointer;
        }

        .tree-node:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 28px rgba(26, 43, 76, 0.14);
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

        .story-section {
          background: #f8fafc;
          border-left: 4px solid #bc9226;
          padding: 14px 16px;
          border-radius: 0 14px 14px 0;
          margin-bottom: 14px;
          text-align: left;
        }
        .story-title {
          font-weight: 700;
          color: #1a2b4c;
          font-size: 13.5px;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .story-text {
          color: #475569;
          font-size: 13.5px;
          line-height: 1.6;
          margin: 0;
          white-space: pre-line;
        }
      `}</style>

      {/* Back Button */}
      <div style={{ width: '100%', maxWidth: '1200px', alignSelf: 'center' }}>
        <Link to="/" className="back-btn">
          <span>←</span> <span>Back to Home</span>
        </Link>
      </div>

      {/* Main Container */}
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
          புகைப்படங்கள் மற்றும் அவசியமான வாழ்க்கைக் கதை
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
          {/* Root Node */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="tree-node root-node" style={{ padding: '20px 35px' }}>
              <div style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '0.5px' }}>
                Susaimanikkam <span className="partner-connector">❤️</span> Alosanaimary
              </div>
            </div>
            <div style={{ width: '3px', height: '35px', backgroundColor: '#1a2b4c', opacity: 0.4 }}></div>
          </div>

          {/* Cards Grid */}
          <div style={{
            display: 'flex',
            justify: 'center',
            gap: '28px',
            flexWrap: 'wrap',
            width: '100%',
            maxWidth: '1280px'
          }}>
            {familyData.map((item) => (
              <div key={item.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 1 240px', minWidth: '250px' }}>
                <div className="tree-node" onClick={() => setSelectedFamily(item)} style={{ width: '100%', height: '100%', boxSizing: 'border-box' }}>
                  
                  {/* Photos */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ textAlign: 'center' }}>
                      {renderAvatar(item.fatherPhoto, item.fatherName, '#1a2b4c', '95px', '105px')}
                      <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600', display: 'block', marginTop: '4px' }}>
                        {item.isSingle ? 'செல்லப் பிள்ளை': ''}
                      </span>
                    </div>
                    {item.motherName && (
                      <div style={{ textAlign: 'center' }}>
                        {renderAvatar(item.motherPhoto, item.motherName, '#bc9226', '95px', '105px')}
                        <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600', display: 'block', marginTop: '4px' }}></span>
                      </div>
                    )}
                  </div>

                  <h4 style={{ margin: '4px 0 2px 0', color: '#1a2b4c', fontSize: '16px', fontWeight: '700' }}>{item.fatherName}</h4>
                  <div style={{ fontSize: '12px', color: '#64748b', margin: '2px 0' }}>{item.relationType}</div>
                  {item.motherName && (
                    <h5 style={{ margin: '0 0 10px 0', color: '#5b21b6', fontSize: '15px', fontWeight: '600' }}>{item.motherName}</h5>
                  )}

                  {item.children.length > 0 && (
                    <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '12px', marginTop: '10px' }}>
                      <div style={{ fontSize: '11px', color: '#bc9226', fontWeight: '700', marginBottom: '6px', textAlign: 'left' }}>👶 பிள்ளைகள்:</div>
                      {item.children.map((child, idx) => (
                        <div key={idx} className="child-node">{child}</div>
                      ))}
                    </div>
                  )}

                  <div style={{ marginTop: '14px', fontSize: '12px', color: '#1a2b4c', fontWeight: '700', backgroundColor: '#f1f5f9', padding: '8px 14px', borderRadius: '50px', border: '1px solid #cbd5e1', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    📖 Read Life Story
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LIFE STORYBOOK POPUP MODAL */}
      {selectedFamily && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(6px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          zIndex: 2000, padding: '20px', boxSizing: 'border-box'
        }}>
          <div style={{
            backgroundColor: '#ffffff', borderRadius: '24px', padding: '35px 28px',
            width: '100%', maxWidth: '580px', maxHeight: '88vh', overflowY: 'auto',
            position: 'relative', boxShadow: '0 25px 50px rgba(0,0,0,0.25)'
          }}>
            {/* Close Button */}
            <button 
              onClick={() => setSelectedFamily(null)}
              style={{
                position: 'absolute', top: '18px', right: '18px',
                background: '#f1f5f9', border: 'none', borderRadius: '50%',
                width: '38px', height: '38px', cursor: 'pointer',
                fontSize: '18px', fontWeight: 'bold', color: '#475569'
              }}
            >
              ✕
            </button>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#bc9226', textTransform: 'uppercase', letterSpacing: '1px' }}>
                📖 வாழ்க்கைப் பயணம்
              </span>
              <h3 style={{ margin: '5px 0 0 0', color: '#1a2b4c', fontSize: '22px', fontWeight: '700' }}>
                {selectedFamily.fatherName} {selectedFamily.motherName ? `& ${selectedFamily.motherName}` : ''}
              </h3>
            </div>

            {/* Photos & Basic Info */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginBottom: '25px', backgroundColor: '#fafaf9', padding: '16px', borderRadius: '20px', border: '1px solid #f5f5f4' }}>
              <div style={{ textAlign: 'center' }}>
                {renderAvatar(selectedFamily.fatherPhoto, selectedFamily.fatherName, '#1a2b4c', '100px', '115px')}
                <div style={{ fontWeight: '700', color: '#1a2b4c', marginTop: '6px', fontSize: '14px' }}>{selectedFamily.fatherName}</div>
              </div>

              {selectedFamily.motherName && (
                <>
                  <div style={{ fontSize: '22px' }}>❤️</div>
                  <div style={{ textAlign: 'center' }}>
                    {renderAvatar(selectedFamily.motherPhoto, selectedFamily.motherName, '#bc9226', '100px', '115px')}
                    <div style={{ fontWeight: '700', color: '#5b21b6', marginTop: '6px', fontSize: '14px' }}>{selectedFamily.motherName}</div>
                  </div>
                </>
              )}
            </div>

            {/* Life Story Chapters */}
            {selectedFamily.lifeStory && (
              <div>
                <div className="story-section" style={{ borderLeftColor: '#1a2b4c' }}>
                  <div className="story-title">🌱 ஆரம்ப காலம் & பயணம்:</div>
                  <p className="story-text">{selectedFamily.lifeStory.beginning}</p>
                </div>

                <div className="story-section" style={{ borderLeftColor: '#bc9226' }}>
                  <div className="story-title">🚀 திருப்புமுனை & உழைப்பு:</div>
                  <p className="story-text">{selectedFamily.lifeStory.turningPoint}</p>
                </div>

                <div className="story-section" style={{ borderLeftColor: '#059669' }}>
                  <div className="story-title">🏡 தற்போதைய வாழ்க்கை:</div>
                  <p className="story-text">{selectedFamily.lifeStory.present}</p>
                </div>

                <div className="story-section" style={{ borderLeftColor: '#e11d48', backgroundColor: '#fff1f2' }}>
                  <div className="story-title" style={{ color: '#9f1239' }}>✨ அழகான நினைவுகள் & சிறப்பு:</div>
                  <p className="story-text" style={{ color: '#881337' }}>{selectedFamily.lifeStory.favoriteMemory}</p>
                </div>
              </div>
            )}

            {/* Quick Details Footer */}
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #e2e8f0', fontSize: '12.5px', color: '#64748b' }}>
              {selectedFamily.weddingDate && <span>💍 <strong>திருமணம்:</strong> {selectedFamily.weddingDate}</span>}
              {selectedFamily.location && <span>📍 <strong>ஊர்:</strong> {selectedFamily.location}</span>}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}