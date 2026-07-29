import React from 'react';

export default function Recipes() {
 
  const defaultRecipes = [
    {
      id: 1,
      title: "அம்மாச்சியின் பாரம்பரிய அசைவ உணவுகள்",
      chef: "அம்மாச்சி",
      ingredients: "நாட்டுக்கோழி / ஆட்டுக்கறி, அரைத்த மசாலா, இஞ்சி பூண்டு விழுது, நல்லெண்ணெய், கறிவேப்பிலை",
      instructions: "பாரம்பரிய முறைப்படி அம்மியில் அரைத்த மசாலா சேர்த்து, மண்பானையில் கிராமத்துச் சுவையில் செய்யப்படும் அசைவ உணவுகள்."
    },
    {
      id: 2,
      title: "அத்தையின் சிறப்பு பிரியாணி",
      chef: "நகோமி அத்தை",
      ingredients: "சீரகச் சம்பா / பாஸ்மதி அரிசி, கறி (சிக்கன்/மட்டன்), தயிர், புதினா, கொத்தமல்லி, பிரியாணி மசாலா, நெய்",
      instructions: "அளவான காரத்துடன், நெய் மணக்க மணக்கத் தம் போட்டுச் செய்யப்படும் சுவையான அத்தை வீட்டு பிரியாணி."
    },
    {
      id: 3,
      title: "அம்மாவின் காரசாரமான அசைவ உணவுகள்",
      chef: "அம்மா",
      ingredients: "மீன் / நண்டு / கறி, வீட்டு மிளகாய்த்தூள், சின்ன வெங்காயம், தக்காளி, சீரகம், சோம்பு",
      instructions: "வீட்டு கைபக்குவத்தில் அன்டெய்லி செய்யப்படும் சுவையான மீன் குழம்பு, வறுவல் மற்றும் கறி உணவுகள்."
    },
    {
      id: 4,
      title: "சித்தியின் ஸ்பெஷல் விருந்து முழு சாப்பாடு",
      chef: "சித்தி",
      ingredients: "பருப்பு, சாம்பார், ரசம், மோர்க் குழம்பு, 2 வகை பொரியல், கூட்டு, அப்பளம், பாயாசம்",
      instructions: "வாழை இலையில் அனைத்து அசைவ/சைவ உணவுகளும் பரிமாறப்படும் சித்தியின் ஸ்பெஷல் விருந்து சாப்பாடு."
    }
  ];

  return (
    <div style={{ 
      padding: '40px 20px', 
      maxWidth: '900px', 
      margin: '0 auto', 
      fontFamily: '"Poppins", "Segoe UI", sans-serif',
      minHeight: '80vh'
    }}>
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#1a2b4c', fontSize: '32px', margin: '0 0 10px 0', fontWeight: '700' }}>
           குடும்ப பாரம்பரிய சமையல்
        </h1>
        <p style={{ color: '#64748b', fontSize: '16px', margin: 0 }}>
          தலைமுறை தலைமுறையாகத் தொடரும் நமது குடும்பத்து கைபக்குவச் சமையல் குறிப்புகள்
        </p>
        <div style={{ width: '60px', height: '4px', backgroundColor: '#bc9226', margin: '15px auto 0 auto', borderRadius: '2px' }}></div>
      </div>

      {/* Default Recipe Cards List */}
      <div style={{ display: 'grid', gap: '25px' }}>
        {defaultRecipes.map((item) => (
          <div key={item.id} style={{
            backgroundColor: '#ffffff',
            padding: '28px',
            borderRadius: '20px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
            borderLeft: '6px solid #bc9226',
            border: '1px solid #edf2f7',
            borderLeftWidth: '6px',
            transition: 'transform 0.2s ease'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
              <h2 style={{ margin: 0, color: '#1a2b4c', fontSize: '22px', fontWeight: '600' }}>
                {item.title}
              </h2>
              <span style={{ 
                fontSize: '13px', 
                color: '#854d0e', 
                backgroundColor: '#fef3c7', 
                padding: '5px 14px', 
                borderRadius: '50px', 
                fontWeight: '600' 
              }}>
                👩‍🍳 {item.chef}
              </span>
            </div>
            
            {item.ingredients && (
              <div style={{ marginTop: '20px' }}>
                <strong style={{ color: '#1e293b', fontSize: '15px', display: 'block', marginBottom: '6px' }}>
                  🛒 தேவையான பொருட்கள்:
                </strong>
                <p style={{ margin: 0, color: '#475569', fontSize: '14.5px', lineHeight: '1.7', backgroundColor: '#f8fafc', padding: '12px 16px', borderRadius: '12px' }}>
                  {item.ingredients}
                </p>
              </div>
            )}

            {item.instructions && (
              <div style={{ marginTop: '18px' }}>
                <strong style={{ color: '#1e293b', fontSize: '15px', display: 'block', marginBottom: '6px' }}>
                  🍳 செய்முறை விவரங்கள்:
                </strong>
                <p style={{ margin: 0, color: '#475569', fontSize: '14.5px', lineHeight: '1.8' }}>
                  {item.instructions}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}