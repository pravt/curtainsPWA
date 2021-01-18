import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/'
import styled from 'styled-components'
import CurtainLogo from '../components/CurtainLogo'
import ThreeD from '../components/ThreeD'
import PDFLogo from '../components/PDFLogo'
import Video from '../components/Video'
import Degree from '../components/Degree'
import PrismicLogo from '../components/PrismicLogo'
import OverlayModel from '../components/overlayModel'
import VideoOverlay from '../components/videoOverlay'
import ThreeDOverlay from '../components/threeDOverlay'
import PdfCarousel from '../components/pdfCarousel'

import Wrapper from '../components/wrapper'
import Description from '../components/description'
import DegreeOverlay from '../components/DegreeOverlay'
import { getPDfDocuments, getEmbedVideoURL, getSocialUrls } from '../utils/index'
import '../globalStyles.css'
import '../portret.css'
import '../socialIcons.css'
import '../hamburgers.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const FooterLine = styled.img`
  left: 5%;
  bottom: 10%;
  width: 80%;
  height: 0.3%;
  position: absolute;
`

const IndexPage = props => {
  const { data } = props
  const pdfDocuments = getPDfDocuments(data)
  const videoHtml = getEmbedVideoURL(data)
  const socialURLs = getSocialUrls(data)
  const [open, setOpen] = React.useState(false)
  const [openVideOverlay, setVideoOverlay] = React.useState(false)
  const [openthreeDOverlay, setThreeDOverlay] = React.useState(false)

  const [openPdfOverlay, setPdfOverlay] = React.useState(false)
  const [openDegreeOverlay, setOpenDegreeOverlay] = React.useState(false)

  const items = data.prismicBlogpostBodyHeaderline.items[0]
  const backgroundURL = data.prismicBlogpost.data.background_image.url
  let logo_url = data.prismicBlogpost.data.logo_image.url
  const linkedInURL =
    data.prismicBlogpostBodyHeaderline.items[0].social_linkedin_logo.url
  logo_url = logo_url.substring(0, logo_url.indexOf('.png') + 4)
  const footerLineURL = data.prismicBlogpost.data.footer_line.url
  const logoDescription = data.prismicBlogpost.data.logo_description.text
  const emailIconURL = items.email.url
  const whatsappIconURL = items.whatsapp.url
  const fbIconURL = items.facebook_logo.url
  const instaIconURL = items.instagram_logo.url
  const degreeIconURL = items._360_logo.url
  const threeModelLogo = items._3d_model_logo.url
  const pdfLogoURL = items.pdf_logo.url
  const videoURL = items.video_logo.url
  const prismicLogoURL = items.prismic_logo.url
  const modelUrl = data.prismicBlogpost.data.model_url.url
  return (
    <Layout>
      <Wrapper bgurl={backgroundURL}>
        <button
          className="hamburger hamburger--boring"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <CurtainLogo src={logo_url} type="image" />
        <Description desc={logoDescription} />
        <ThreeD
          src={threeModelLogo}
          type="image"
          value=""
          onClick={() => setThreeDOverlay(!openthreeDOverlay)}
        />
        {pdfDocuments.length > 0 && (
          <PDFLogo
            src={pdfLogoURL}
            type="image"
            value=""
            onClick={() => setPdfOverlay(!openPdfOverlay)}
          />
        )}
        {videoHtml && (
          <Video
            src={videoURL}
            type="image"
            value=""
            onClick={() => setVideoOverlay(!openVideOverlay)}
          />
        )}
        <Degree
          src={degreeIconURL}
          type="image"
          value=""
          onClick={() => setOpenDegreeOverlay(!openDegreeOverlay)}
        />
        <PrismicLogo src={prismicLogoURL} type="image" value="" onclick="" />
        <FooterLine src={footerLineURL} />
      </Wrapper>

      {openDegreeOverlay && (
        <DegreeOverlay
          removeOverlay={() => {
            setOpenDegreeOverlay(!openDegreeOverlay)
          }}
          modelUrl={modelUrl}
        />
      )}
      {open && (
        <OverlayModel
          insta={instaIconURL}
          linked={linkedInURL}
          fb={fbIconURL}
          wp={whatsappIconURL}
          email={emailIconURL}
          removeOverlay={() => setOpen(!open)}
          socialURLs={socialURLs}
        />
      )}

      {openthreeDOverlay && (
        <ThreeDOverlay
          removeOverlay={() => setThreeDOverlay(!openthreeDOverlay)}
        />
      )}
      {openVideOverlay && (
        <VideoOverlay
          embedVideoHtml={videoHtml}
          removeOverlay={() => setVideoOverlay(!openVideOverlay)}
        />
      )}
      {openPdfOverlay && (
        <PdfCarousel
          documents={pdfDocuments}
          removeOverlay={() => setPdfOverlay(!openPdfOverlay)}
        />
      )}
    </Layout>
  )
}
export default IndexPage

export const pageQuery = graphql`
  query($uid: String) {
    prismicBlogpost(uid: { eq: $uid }) {
      data {
        logo_image {
          alt
          copyright
          url
        }
        name {
          html
          text
        }
        topline {
          alt
          copyright
          url
        }
        background_image {
          alt
          copyright
          url
        }
        footer_line {
          alt
          copyright
          url
        }
        logo_description {
          text
        }
        model_url {
          url
        }

        body {
          ... on PrismicBlogpostBodyPdfslice {
            primary {
              document_1 {
                url
                name
              }
              document_2 {
                url
                name
              }
              document_3 {
                url
                name
              }
            }
          }
          ... on PrismicBlogpostBodyVideoMapSlice {
            primary {
              embed_video_url {
                embed_url
                html
              }
            }
          }
          ... on PrismicBlogpostBodySocial {
            primary {
              facebook_url {
                url
              }
              linkedin_url {
                url
              }
              instagram_url {
                url
              }
            }
          }
        }
      }
    }
    prismicBlogpostBodyHeaderline(items: {}) {
      id
      items {
        social_linked_logo_text {
          alt
          copyright
          url
        }
        social_linkedin_logo {
          alt
          copyright
          url
        }
        email {
          url
        }
        whatsapp {
          url
        }
        facebook_logo {
          url
        }
        instagram_logo {
          url
        }
        _360_logo {
          url
        }
        _3d_model_logo {
          url
        }
        pdf_logo {
          url
        }
        video_logo {
          url
        }
        prismic_logo {
          url
        }
        linkedinurl {
          url
        }
        instalink {
          url
        }
        facebookurl {
          url
        }
        watchvideolink {
          url
        }
        _3dmodellink {
          url
        }
        pdflink {
          url
        }
        mailtolink {
          url
        }
        whastsappchatlink {
          url
        }
      }
      primary {
        header_left_title {
          html
          text
        }
        header_right_title {
          html
          text
        }
      }
    }
  }
`
