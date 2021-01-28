import React from 'react'
import _1 from './1.png'
import _2 from './2.png'
import _3 from './3.png'
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
      <div className="rightContainerFlex">
      <img className="box img-fluid" src={_1}></img>
      <img className="box img-fluid"  src={_2}></img>
      <img className="box img-fluid"  src={_3}></img>
      </div>
    </div>
  )
}

EmptyOverlayModel.defaultProps = {
 
}

EmptyOverlayModel.propTypes = {
  
}
export default EmptyOverlayModel
