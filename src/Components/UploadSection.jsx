// File: src/App.jsx
import { useState } from 'react';
import "./UploadSection.css"
import VideoUpload from './VideoUpload';
import PlayerManagement from './PlayerManagement';
import CourtSelection from './CourtSelection';

function UploadSection() {
  const [videoFile, setVideoFile] = useState(null);
  const [players, setPlayers] = useState([]);
  const [selectedCourt, setSelectedCourt] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!videoFile) {
      alert('Please upload a video');
      return;
    }
    
    if (players.length === 0) {
      alert('Please add at least one player');
      return;
    }
    
    if (!selectedCourt) {
      alert('Please select a court');
      return;
    }
    
    // Show loading state
    setIsAnalyzing(true);
    
    // Simulate analysis (would be replaced with actual API call)
    setTimeout(() => {
      setIsAnalyzing(false);
      alert('Analysis complete! Results would be displayed here in a real application.');
      
      // For debugging
      console.log({
        video: videoFile,
        players: players,
        court: selectedCourt
      });
    }, 3000);
  };
  
  return (
    <div className="app-container">
      {/* <h1> Video Analysis</h1> */}
      
      <div className="form-container">
        <form id="analysis-form" onSubmit={handleSubmit}>
          {/* Video Upload Section */}
          <div className="form-section">
            <h2>Video Upload</h2>
            <VideoUpload 
              videoFile={videoFile} 
              setVideoFile={setVideoFile} 
            />
          </div>
          
          {/* Players Section */}
          <div className="form-section">
            <h2>Players</h2>
            <PlayerManagement 
              players={players} 
              setPlayers={setPlayers} 
            />
          </div>
          
          {/* Court Selection Section */}
          <div className="form-section">
            <h2>Court Selection</h2>
            <CourtSelection 
              selectedCourt={selectedCourt} 
              setSelectedCourt={setSelectedCourt} 
            />
          </div>
          
          {/* Analysis Button */}
          <button 
            type="submit" 
            className="submit-button"
            disabled={isAnalyzing}
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Video'}
          </button>
          
          {/* Loading Indicator */}
          {isAnalyzing && (
            <div className="loading">
              <div className="spinner"></div>
              <p>Analyzing video... This may take a few minutes.</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default UploadSection;