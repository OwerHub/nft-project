import React from 'react'

export default function SectionTitle(props) {
  const {title} = props

  const dynamicStyle =  {
    fontSize: '12em',
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <div style={dynamicStyle}>
      {title}
    </div>
  )
}