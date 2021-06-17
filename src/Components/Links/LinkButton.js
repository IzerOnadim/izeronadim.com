import './LinkButton.css';

function LinkButton({ label, link }) {
  return (
    <div className='LinkButton'>
      <a
        className="ButtonLink"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className='InnerButton' type='button'>
          {label}
        </button>
      </a>
    </div>
  )
}

export default LinkButton;