import React from 'react';
import './PowerGrid.css';

export default function PowerGrid() {
  return (
    <div className="powergrid">
      <div className="grid-header">
        <span className="grid-title">POWER GRID - STUDENT STARTER</span>
        <span className="city-power">TODO</span>
      </div>

      <button className="simulate-btn" disabled>
        SIMULATE BLACKOUT (TODO)
      </button>

      <div className="power-bar-track">
        <div className="power-bar-fill" style={{ width: '25%' }} />
      </div>

      <div className="blackout-alert">TODO: manage zones and outages.</div>

      <div className="zones-grid">
        <div className="zone">
          <div className="zone-id">Expected events</div>
          <div className="zone-name">listen: hacker:command, weather:change</div>
          <div className="zone-power">emit: power:outage</div>
        </div>
      </div>
    </div>
  );
}