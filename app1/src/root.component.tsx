// @ts-ignore-next-line
import { getFeatureToggles } from '@btplc/utils'

export default function Root(props) {
  const containerStyle = {
    "padding": "1rem",
    "backgroundColor": "#feb236",
    "color": "#000000",
  }

  const { featureA, featureB } = getFeatureToggles()

  return (
    <section style={containerStyle}>
      <h1>Home page</h1>
      <div>
        {props.name} is mounted!
      </div>
      { featureA && (<p>Feature A is enabled</p>) }
      { featureB && (<p>Feature B is enabled</p>) }
    </section>
  )
}
