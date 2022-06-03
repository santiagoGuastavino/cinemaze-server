export default function Wrapper ({ children, white, grey }) {
  const styles = {
    backgroundColor: white
      ? '#ffffff'
      : 'rgb(237, 241, 247)'
  }

  return (
    <div style={styles}>
      {children}
    </div>
  )
}
