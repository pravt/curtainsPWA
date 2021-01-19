import React from 'react'

function EmptyOverlayModel({
    removeOverlay
}) {
  return (
    <div className="overlay">
      <button
        type="button"
        className="overlay-close"
        onClick={e => removeOverlay()}
      />
    </div>
  )
}

EmptyOverlayModel.defaultProps = {
 
}

EmptyOverlayModel.propTypes = {
  
}
export default EmptyOverlayModel
