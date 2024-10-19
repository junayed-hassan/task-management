
function Container(props) {
  return (
    <div className={`max-w-[1140px]	m-auto px-3 ${props.className}`}>{props.children}</div>
  )
}

export default Container