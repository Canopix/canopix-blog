import React from 'react';

const Dump = props => (
  <div
    style={{
      fontSize: 20,
      padding: 10,
      background: 'black',
    }}>
    {Object.entries(props).map(([key, val]) => (
      <pre key={key}>
        <strong style={{ color: 'red', background: 'black' }}>
          {key} 💩
        </strong>
        {JSON.stringify(val, '', ' ')}
      </pre>
    ))}
  </div>
);

export default Dump;