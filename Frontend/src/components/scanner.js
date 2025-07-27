import React, { useState } from 'react';
import axios from 'axios';

const Scanner = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    const res = await axios.post('http://localhost:5000/api/check', { input });
    setResult(res.data);
  };

  return (
    <div className="scanner">
      <h2>🔍 Scam Detector</h2>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter URL or Email" />
      <button onClick={handleCheck}>Check</button>

      {result && (
        <div className="result">
          <p><strong>Input:</strong> {result.input}</p>
          <p><strong>Scam:</strong> {result.scam ? "🚨 Likely Scam" : "✅ Safe"}</p>
          <p><strong>Risk:</strong> {result.risk}</p>
          <p><strong>Reason:</strong> {result.reason}</p>
          <p><strong>Google Safe Browsing:</strong> {result.googleSafe ? "✅ Safe" : "❌ Unsafe"}</p>
        </div>
      )}
    </div>
  );
};

export default Scanner;
