import './index.css'

const ThumbanailItem = props => {
  const {imageDetails, getFilteredImage, isActiveImage} = props
  const {
    imageUrl,
    thumbnailUrl,
    id,
    imageAltText,
    thumbnailAltText,
  } = imageDetails
  const changeImage = () => {
    getFilteredImage(imageUrl, imageAltText)
  }
  const activeClassName = isActiveImage ? `button-image active` : `button-image`
  return (
    <li key={id}>
      <button type="button" className="thumbnail-button" onClick={changeImage}>
        <img
          type="button"
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeClassName}
        />
      </button>
    </li>
  )
}

export default ThumbanailItem
