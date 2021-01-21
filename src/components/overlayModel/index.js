import React from 'react'
import PropTypes from 'prop-types'

function OverlayModel({
  removeOverlay,
  insta,
  fb,
  wp,
  email,
  socialURLs,
  commContent,
  socialLogoUrls
}) {
  
  const { facebook_url, instagram_url, linkedin_url, whatsapp_url, mail_url } = socialURLs
  const {linkedin}=socialLogoUrls
  
  
  const fburl = facebook_url.url
  const instaUrl = instagram_url.url;
  const linkedUrl = linkedin_url.url;
  const wu = whatsapp_url.url;
  const murl = mail_url.url;
  const whatsappUrl = wu.substring(wu.indexOf("whatsapp"), wu.length);

  const {map_url, phone_number,website_url, email_address, phone_icon, webiste_icon, location_icon }=commContent;
  const [open, setOpen] = React.useState(false)
  const [shareOpen, setShareOpen] = React.useState(false)
  const [contactOpen, setContactOpen] = React.useState(false)
  const phoneNumber = phone_number.text;
  console.log(" map_url ",map_url , " website_url ", website_url)
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
                  <img src={phone_icon.url} alt="wp"  className="contact-img" onClick={() => {
                      window.location = "tel:"+phoneNumber;
                    }}/> 
                </li>
                <li className="grid-column">
                <img src={webiste_icon.url} alt="wp"  className="contact-img" onClick={() => {
                      window.open('https://'+website_url.text, '_blank');
                    }}/> 
                  
                </li>
                <li className="grid-column">
                <img src={location_icon.url} alt="wp"  className="contact-img" onClick={() => {
                      window.open(map_url.text, '_blank');
                    }}/>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              onClick={() => {
                setOpen(false)
                setContactOpen(false)
                setShareOpen(!shareOpen)

              }}
            >
              Share
            </a>
            {shareOpen && (
              <ul className="socialUL">
                <li className="grid-column">
                  <img src={wp} alt="wp"  onClick={() => {
                      window.location = whatsappUrl
                    }}/> 
                </li>
                <li className="grid-column">
                  <img src={email} alt="email" onClick={() => {
                      window.location = murl
                    }}/> 
                </li>
                <li className="grid-column">
                  <img src={linkedin.url} alt="linked"  onClick={() => {
                      window.location = linkedUrl
                    }}/>
                </li>
              </ul>
            )}
          </li>
          <li className="social">
            <a
              onClick={() => {
                setShareOpen(false)
                setContactOpen(false)
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
                  <img src={linkedin.url} alt="linked" 
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
