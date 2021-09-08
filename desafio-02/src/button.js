function Button (props) {
  return (
    <button className={`button ${props.kind}`}>{props.text}</button>
  )
}

export { Button }