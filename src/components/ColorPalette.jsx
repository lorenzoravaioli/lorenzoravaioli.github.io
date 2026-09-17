const swatches = [
  { name: 'Forest Black', hex: '#050805' },
  { name: 'Deep Moss', hex: '#12291b' },
  { name: 'Spring Green', hex: '#3ddc84' },
  { name: 'Cloud White', hex: '#e8f0e9' },
]

function ColorPalette() {
  return (
    <section className="colors">
      <h2>Color Palette</h2>
      <div className="palette">
        {swatches.map((swatch) => (
          <div className="swatch" key={swatch.hex}>
            <div className="color" style={{ background: swatch.hex }} />
            <div className="name">{swatch.name}</div>
            <div className="hex">{swatch.hex}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ColorPalette