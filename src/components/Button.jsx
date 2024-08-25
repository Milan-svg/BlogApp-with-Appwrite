import React from 'react'

//The ...props in your component allows the parent component to pass any additional attributes (like onClick, disabled, id, etc.) directly to the <button> element

//The children prop is a special prop that allows you to pass content between the opening and closing tags of a component. It makes the component more versatile since you can customize what’s inside the button.
function Button({
    children,
    type= 'button',
    bgColor= 'bg-blue-600',
    textColor = 'text-white',
    className= '',
    ...props
}) {
  return (
    <button className= {`px-4 py-2 rounded-xl shadow-md ${className} ${bgColor} ${textColor}`} {...props}> {children}</button>
  )
}

export default Button