import React from 'react';
import './PowerGrid.css';
import eventBus from '../eventBus';

const ZONES = [
  { id: 'A', name: 'Downtown Sector', mw: 120 },
  { id: 'B', name: 'Industrial Bay', mw: 95 },
  { id: 'C', name: 'Neon Heights', mw: 78 },
  { id: 'D', name: 'Old Grid', mw: 64 },
  { id: 'E', name: 'Harbor Lines', mw: 88 },
  { id: 'F', name: 'Metro Core', mw: 110 },
];

export default function PowerGrid() {
  const cityPower = 100; 
  const showFailure = false; 

  const powerBarStyle = {
    width: `${Math.max(0, Math.min(100, cityPower))}%`,
    background: cityPower === 0 ? '#ff003c' : '#00ff88',
  };

  return (
    <div className="powergrid">
      <div className="grid-header">
        <span className="grid-title">POWER GRID</span>
        <span className="city-power">CITY POWER: {cityPower}%</span>
      </div>

      <button
        className="simulate-btn"
        onClick={() =>
          eventBus.emit('power:outage', {
            zones: ['A', 'B'],
            severity: 'partial',
            cityPower: 72,
          })
        }
      >
        SIMULATE OUTAGE
      </button>

      <div className="power-bar-track">
        <div className="power-bar-fill" style={powerBarStyle} />
      </div>

      {showFailure && <div className="blackout-alert">GRID FAILURE</div>}

      <div className="zones-grid">
        {ZONES.map((z) => (
          <div key={z.id} className="zone zone-online">
            <div className="zone-indicator" style={{ background: '#00ff88' }} />
            <div className="zone-id">ZONE {z.id}</div>
            <div className="zone-name">{z.name}</div>
            <div className="zone-power">{z.mw} MW</div>
          </div>
        ))}
      </div>
    </div>
  );
}