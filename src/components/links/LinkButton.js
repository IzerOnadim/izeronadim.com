import './LinkButton.css';

function LinkButton({ label, link, image, buttonStyle, imageStyle }) {

  return (
    <div className='LinkButton'>
      <a
        className="ButtonLink"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className='InnerButton' style={buttonStyle}>
          { image 
            ? <img className='LinkImage' style={imageStyle} src={image} alt='logo' />
            : <></>
          }
          {label}
        </div>
      </a>
    </div>
  )
}

export default LinkButton;