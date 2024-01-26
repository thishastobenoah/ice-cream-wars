import { useState } from 'react';
import './AdDesigner.css';

function AdDesigner() {
  const [selectedFlavor, setSelectedFlavor] = useState<string>('Vanilla');
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(16);

  const handleFlavorClick = (flavor: string) => {
    setSelectedFlavor(flavor);
  };

  const handleThemeClick = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleFontSizeChange = (increment: number) => {
    setFontSize(fontSize + increment);
  };

  const adStyle: React.CSSProperties = {
    fontSize: `${fontSize}px`,
    backgroundColor: isDarkTheme ? '#222' : 'white',
    color: isDarkTheme ? '#fff' : '#000',
    width: '250px',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  return (
    <div className="ad-designer">
      <h2>Ad Designer</h2>
      <div className="flavor-buttons">
        <button onClick={() => handleFlavorClick('Vanilla')} disabled={selectedFlavor === 'Vanilla'}>Vanilla</button>
        <button onClick={() => handleFlavorClick('Chocolate')} disabled={selectedFlavor === 'Chocolate'}>Chocolate</button>
        <button onClick={() => handleFlavorClick('Strawberry')} disabled={selectedFlavor === 'Strawberry'}>Strawberry</button>
      </div>
      <div className="theme-buttons">
        <button onClick={handleThemeClick} disabled={!isDarkTheme}>Light Theme</button>
        <button onClick={handleThemeClick} disabled={isDarkTheme}>Dark Theme</button>
      </div>
      <div className="font-size">
        <button onClick={() => handleFontSizeChange(2)}>Up</button>
        <button onClick={() => handleFontSizeChange(-2)}>Down</button>
        <p>Font Size: {fontSize}px</p>
      </div>
      <div className="example-ad" style={adStyle}>
        <div>Vote for</div>
        <div>{selectedFlavor}</div>
      </div>
    </div>
  );
}

export { AdDesigner };
