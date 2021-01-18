import React from 'react'
import PropTypes from 'prop-types'

function OverlayModel({
  removeOverlay,
  insta,
  fb,
  wp,
  email,
  socialURLs,
  commContent
}) {
  
  const { facebook_url, instagram_url, linkedin_url } = socialURLs
  
  
  const fburl = facebook_url.url
  const instaUrl = instagram_url.url;
  const linkedUrl = linkedin_url.url;
  const {map_url, phone_number,website_url, email_address }=commContent;
  const [open, setOpen] = React.useState(false)
  const [shareOpen, setShareOpen] = React.useState(false)
  const [contactOpen, setContactOpen] = React.useState(false)
  return (
    <div className="overlay">
      <button
        type="button"
        className="overlay-close"
        onClick={e => removeOverlay()}
      />
      <nav>
        <ul>
          <li>
            <a  onClick={() => {
                setOpen(false)
                setShareOpen(false)
                setContactOpen(!contactOpen)
              }}>Contact</a>
            {contactOpen && (
              <ul className="contactUL">
                <li className="grid-column">
                  phone: {phone_number.text}
                </li>
                <li className="grid-column">
                  email: {email_address.text}
                </li>
                <li className="grid-column">
                  website:  {website_url.text}
                </li>
                <li className="grid-column">
                   <a href={map_url.text}>location</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              onClick={() => {
                setOpen(false)
                setShareOpen(!shareOpen)
              }}
            >
              Share
            </a>
            {shareOpen && (
              <ul className="socialUL">
                <li className="grid-column">
                  <img src={wp} alt="wp" />
                </li>
                <li className="grid-column">
                  <img src={email} alt="email" />
                </li>
                <li className="grid-column">
                  <img src={linkedin_url} alt="linked" />
                </li>
              </ul>
            )}
          </li>
          <li className="social">
            <a
              onClick={() => {
                setShareOpen(false)
                setOpen(!open)
              }}
            >
              Social
            </a>
            {open && (
              <ul className="socialUL">
                <li className="grid-column">
                  <img src={insta} alt="insta" 
                    onClick={() => {
                      window.location = instaUrl
                    }}
                  />
                </li>
                <li className="grid-column">
                  <img src={linkedin_url} alt="linked" 
                    onClick={() => {
                      window.location = linkedUrl
                    }}
                  />
                </li>
                <li className="grid-column">
                  <img
                    src={fb}
                    alt="facebook"
                    onClick={() => {
                      window.location = fburl
                    }}
                  />
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}

OverlayModel.defaultProps = {
  removeOverlay: false,
  insta: '',
  linked: '',
  fb: '',
  wp: '',
  email: '',
}

OverlayModel.propTypes = {
  removeOverlay: PropTypes.func,
  insta: PropTypes.string,
  linked: PropTypes.string,
  fb: PropTypes.string,
  wp: PropTypes.string,
  email: PropTypes.string,
}
export default OverlayModel
