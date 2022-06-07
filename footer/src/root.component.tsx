export default function Root(props) {
  const containerStyle = {
    "padding": "1rem",
    "backgroundColor": "#d64161",
    "color": "#000000",
  }

  return (
    <section style={containerStyle}>
      <h2>Footer</h2>
      <div>
        {props.name} is mounted!
      </div>
    </section>)
  ;
}
