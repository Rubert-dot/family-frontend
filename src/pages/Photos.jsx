import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// சரி செய்யப்பட்டது: டூப்ளிகேட் இம்போர்ட் நீக்கப்பட்டு ஒரே வரியில் கொண்டுவரப்பட்டுள்ளது
import { getPhotos, getAlbumNames, uploadPhoto, deletePhoto, photoUrl } from '../Api';

export default function Photos({ mode }) { 
  const navigate = useNavigate();
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputPasscode, setInputPasscode] = useState('');

  const [files, setFiles] = useState([]);
  const [newAlbumName, setNewAlbumName] = useState('');
  const [uploaderName, setUploaderName] = useState(localStorage.getItem('familyMemberName') || '');
  const [caption, setCaption] = useState('');
  const [uploading, setUploading] = useState(false);

  // Lightbox-க்காக சேர்க்கப்பட்ட ஸ்டேட்
  const [activeLightboxImg, setActiveLightboxImg] = useState(null);

  useEffect(() => {
    const savedPw = localStorage.getItem('familyPassword');
    if (mode === 'upload' || savedPw === null) {
      setIsUnlocked(true);
    } else {
      setIsUnlocked(false);
    }
  }, [mode]);

  const refreshAlbums = () => getAlbumNames().then(setAlbums).catch(() => {});
  const refreshPhotos = (album) => {
    setLoading(true);
    getPhotos(album)
      .then(setPhotos)
      .catch(() => setPhotos([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    refreshAlbums();
    refreshPhotos('');
  }, []);

  useEffect(() => {
    refreshPhotos(selectedAlbum);
  }, [selectedAlbum]);

  // சேர்க்கப்பட்டது: ESC கீ அழுத்தினால் லைட்பாக்ஸ் தானாகவே மூடுவதற்கான வசதி
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveLightboxImg(null);
      }
    };
    
    if (activeLightboxImg) {
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxImg]);

  const handleVaultUnlock = (e) => {
    e.preventDefault();
    const correctPassword = localStorage.getItem('familyPassword');
    
    if (inputPasscode === correctPassword) {
      setIsUnlocked(true);
    } else {
      alert('❌ Invalid Password ! Please Enter Correct Password.');
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (files.length === 0) return alert('Choose at least one photo first');
    const albumName = (newAlbumName || selectedAlbum).trim();
    if (!albumName) return alert('Enter an album/trip name');
    if (!uploaderName.trim()) return alert('Enter your name');

    localStorage.setItem('familyMemberName', uploaderName);
    setUploading(true);
    try {
      for (let i = 0; i < files.length; i++) {
        await uploadPhoto({ file: files[i], albumName, uploaderName, caption });
      }
      setFiles([]);
      setCaption('');
      setNewAlbumName('');
      await refreshAlbums();
      setSelectedAlbum(albumName);
      refreshPhotos(albumName);
      alert('All photos uploaded successfully! Check them in Memories page.'); 
    } catch (err) {
      alert('Upload failed: ' + (err.response?.data || err.message));
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    const correctPassword = localStorage.getItem('familyPassword');
    const enteredPassword = prompt("🔐 Enter Admin/Family Password to delete this photo:");
    
    if (enteredPassword === null) return;
    
    if (enteredPassword === correctPassword) {
      if (!window.confirm('Are you sure you want to remove this photo permanently?')) return;
      await deletePhoto(id);
      refreshPhotos(selectedAlbum);
      alert('Photo deleted successfully!');
    } else {
      alert('❌ Incorrect Password! You do not have permission to delete this.');
    }
  };

  if (mode === 'gallery' && !isUnlocked) {
    return (
      <div className="page-container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: '"Segoe UI", Roboto, sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form className="modern-form" onSubmit={handleVaultUnlock} style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
          <span style={{ fontSize: '50px', display: 'block', marginBottom: '10px' }}>🔒</span>
          <h3 className="form-title" style={{ marginBottom: '10px' }}>Family Vault Locked</h3>
          <p style={{ color: '#6c757d', fontSize: '14px', marginBottom: '25px' }}>Please Enter Password.</p>
          <div className="input-group">
            <input
              className="modern-input"
              type="password"
              placeholder="Enter The Password"
              value={inputPasscode}
              onChange={e => setInputPasscode(e.target.value)}
              style={{ textAlign: 'center', fontSize: '15px', borderRadius:'7px', width:'250px', height:'45px' }}
              required
            />
          </div>
          <button className="submit-btn" style={{ padding:'4px', margin:'40px', fontFamily:'initial', borderRadius:'10px', backgroundColor:'rgb(39, 53, 129)', color:'#fff', cursor:'pointer' }} type="submit">Unlock Gallery</button>
        </form>
      </div>
    );
  }

  return (
    <div className="page-container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: '"Segoe UI", Roboto, sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      <style>{`
        .gallery-title { font-size: 32px; color: #1a2b4c; font-weight: 700; text-align: center; margin-bottom: 30px; letter-spacing: 0.5px; }
        .filter-card { background: #fff; padding: 15px 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); display: inline-flex; align-items: center; gap: 15px; margin-bottom: 35px; }
        .custom-select { padding: 8px 16px; border-radius: 8px; border: 1px solid #ced4da; font-size: 15px; color: #495057; outline: none; cursor: pointer; transition: border-color 0.2s; }
        .custom-select:focus { border-color: #1a2b4c; }
        .modern-form { background: #fff; max-width: 600px; margin: 0 auto; padding: 35px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid #e9ecef; }
        .form-title { color: #1a2b4c; margin-top: 0; margin-bottom: 25px; font-size: 24px; text-align: center; }
        .input-group { margin-bottom: 20px; }
        .modern-input { width: 100%; padding: 12px 16px; border-radius: 10px; border: 1px solid #dee2e6; font-size: 15px; box-sizing: border-box; transition: all 0.3s; }
        .modern-input:focus { border-color: #1a2b4c; box-shadow: 0 0 0 3px rgba(26,43,76,0.1); outline: none; }
        .file-input-wrapper { border: 2px dashed #dee2e6; padding: 20px; border-radius: 10px; text-align: center; background: #fdfdfd; cursor: pointer; }
        .submit-btn { width: 100%; background: #1a2b4c; color: #fff; border: none; padding: 14px; border-radius: 10px; font-size: 16px; font-weight: 600; cursor: pointer; transition: background 0.2s, transform 0.1s; }
        .submit-btn:hover { background: #111e36; }
        .submit-btn:active { transform: scale(0.98); }
        .submit-btn:disabled { background: #ced4da; cursor: not-allowed; }
        .modern-grid { display: flex; flex-direction: column; align-items: center; gap: 40px; padding: 10px 0; width: 100%; }
        .modern-card { background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,0.04); transition: transform 0.3s, box-shadow 0.3s; border: 1px solid #e9ecef; width: 100%; max-width: 600px; margin: 0 auto; }
        .modern-card:hover { transform: translateY(-4px); box-shadow: 0 12px 25px rgba(0,0,0,0.1); }
        .card-img-wrapper { width: 100%; max-height: 550px; overflow: hidden; background: #f1f3f5; display: flex; justify-content: center; align-items: center; cursor: zoom-in; }
        .card-img-wrapper img { width: 100%; height: auto; max-height: 550px; object-fit: contain; transition: transform 0.5s; }
        .modern-card:hover .card-img-wrapper img { transform: scale(1.02); }
        .card-body { padding: 20px; }
        .badge-album { background: rgba(26, 43, 76, 0.1); color: #1a2b4c; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; display: inline-block; margin-bottom: 10px; text-transform: uppercase; }
        .card-caption { font-size: 15px; color: #333; margin: 0 0 15px 0; font-weight: 500; line-height: 1.4; }
        .card-footer-meta { display: flex; justify-content: space-between; align-items: center; font-size: 13px; color: #6c757d; border-top: 1px solid #f1f3f5; padding-top: 15px; margin-top: 10px; }
        .uploader-name { font-weight: 600; color: #495057; }
        .modern-delete-btn { background: #fff; color: #dc3545; border: 1px solid #f8d7da; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; cursor: pointer; transition: all 0.2s; }
        .modern-delete-btn:hover { background: #dc3545; color: #fff; border-color: #dc3545; }
        .empty-state { text-align: center; padding: 60px; background: #fff; border-radius: 16px; color: #6c757d; box-shadow: 0 4px 15px rgba(0,0,0,0.02); }
        .back-btn-container { display: flex; justify-content: center; width: 100%; margin-top: 40px; }
        .lightbox-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.95); display: flex; justify-content: center; align-items: center; z-index: 9999; cursor: zoom-out; animation: fadeIn 0.25s ease-out; }
        .lightbox-img { max-width: 90%; max-height: 90%; object-fit: contain; border-radius: 8px; box-shadow: 0 10px 40px rgba(0,0,0,0.8); animation: zoomIn 0.25s ease-out; }
        .lightbox-close { position: absolute; top: 20px; right: 25px; font-size: 35px; color: #fff; background: none; border: none; cursor: pointer; z-index: 10000; transition: transform 0.2s; }
        .lightbox-close:hover { transform: scale(1.2); }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { transform: scale(0.9); } to { transform: scale(1); } }
      `}</style>
      
      {mode === 'gallery' && (
        <div style={{ textAlign: 'center' }}>
          <h2 className="gallery-title">Family Memories Gallery</h2>
          <div className="filter-card">
            <label style={{ fontWeight: '600', color: '#495057' }}>Filter by Album:</label>
            <select className="custom-select" value={selectedAlbum} onChange={e => setSelectedAlbum(e.target.value)}>
              <option value="">All Photos</option>
              {albums.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
        </div>
      )}

      {mode === 'upload' && (
        <form className="modern-form" onSubmit={handleUpload}>
          <h3 className="form-title">Share a New Memory</h3>
          
          <div className="input-group">
            <input
              className="modern-input"
              type="text"
              placeholder="Your Name"
              value={uploaderName}
              onChange={e => setUploaderName(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <input
              className="modern-input"
              type="text"
              placeholder="Album / Trip Name (e.g., Kerala Trip 2026)"
              value={newAlbumName}
              onChange={e => setNewAlbumName(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <input
              className="modern-input"
              type="text"
              placeholder="Add a sweet caption (optional)"
              value={caption}
              onChange={e => setCaption(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <div className="file-input-wrapper" onClick={() => document.getElementById('file-upload').click()}>
              <span style={{ color: '#6c757d', fontSize: '14px', display: 'block', marginBottom: '5px' }}>
                {files.length > 0 ? `Selected: ${files.length} photos` : '📸 Click to Select Photo'}
              </span>
              <input
                id="file-upload"
                type="file"
                multiple
                accept="image/*"
                style={{ display: 'none' }}
                onChange={e => setFiles(Array.from(e.target.files))}
              />
            </div>
          </div>
          
          <button className="submit-btn" type="submit" disabled={uploading}>
            {uploading ? 'Uploading Process...' : 'Upload to Gallery'}
          </button>
        </form>
      )}

      {mode === 'gallery' && (
        <>
          {loading ? (
            <p style={{ textAlign: 'center', color: '#6c757d' }}>Loading photos...</p>
          ) : photos.length === 0 ? (
            <div className="empty-state">
              <p style={{ fontSize: '18px', margin: 0 }}>No photos found in this album.</p>
              <p style={{ fontSize: '14px', marginTop: '5px' }}>Be the first to add a beautiful memory!</p>
            </div>
          ) : (
            <div className="modern-grid">
              {photos.map(p => {
                // சரி செய்யப்பட்டது: ஜாவா பேக்கெண்ட் கேமல் கேஸ் (fileName/albumName) அல்லது அண்டர்ஸ்கோர் (file_name) இரண்டையும் ஏற்கும் பாதுகாப்பு மேப்பிங்
                const fName = p.fileName || p.file_name || '';
                const aName = p.albumName || p.album_name || 'General';
                const uName = p.uploaderName || p.uploader_name || 'Unknown';
                const upAt = p.uploadedAt || p.uploaded_at;
                
                const finalSrc = photoUrl(fName);

                let formattedDate = 'No Date';
                if (upAt) {
                  const parsedDate = new Date(upAt);
                  if (!isNaN(parsedDate.getTime())) {
                    formattedDate = parsedDate.toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    });
                  }
                }

                return (
                  <div className="modern-card" key={p.id}>
                    <div className="card-img-wrapper" onClick={() => setActiveLightboxImg(finalSrc)}>
                      <img src={finalSrc} alt={p.caption || aName || 'Family Photo'} />
                    </div>
                    
                    <div className="card-body">
                      <span className="badge-album">{aName}</span>
                      <p className="card-caption">{p.caption || '❤️ Beautiful Moment'}</p>
                      
                      <div className="card-footer-meta">
                        <div>
                          <span className="uploader-name">{uName}</span>
                          <span style={{ display: 'block', fontSize: '11px', color: '#adb5bd', marginTop: '2px' }}>{formattedDate}</span>
                        </div>
                        <button className="modern-delete-btn" onClick={() => handleDelete(p.id)}>Remove</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}

      {activeLightboxImg && (
        <div className="lightbox-overlay" onClick={() => setActiveLightboxImg(null)}>
          <button className="lightbox-close" onClick={() => setActiveLightboxImg(null)}>✕</button>
          <img src={activeLightboxImg} className="lightbox-img" alt="Zoomed memory" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <div className="back-btn-container">
        <button className="back-btn" style={{
          padding: '10px 20px',
          color: '#fff',
          backgroundColor: 'rgb(220, 2, 2)',
          borderRadius: '8px',
          cursor: "pointer",
          fontWeight: 'bold',
          border: 'none'
        }} onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}