
const Button = ({ className, onClick, children, top, color, blue }) => {

    const classes = `button relative inline-flex items-center justify-center h-11 cursor-pointer transition-colors  border border-color-6 rounded-md px-7 text-n-1  hover:bg-transparent ${color ? 'text-n-1 hover:bg-color-6 bg-transparent ' : ''} ${className && ''} ${ blue ? 'bg-color-1' : 'bg-color-6'}`

    const spanClasses = `relative z-10 flex gap-4 items-center`

    const defaultHref = '#page'

    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
        </button>
    )

    const renderTop = () => (
        <a href={defaultHref}>
            <button className={classes} onClick={onClick}>
                <span className={spanClasses}>{children}</span>
            </button>
        </a>
    )

  return top ? renderTop() : renderButton();

}

export default Button