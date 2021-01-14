import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/'
import styled from 'styled-components'
import CurtainLogo from '../components/CurtainLogo'
import LogoDescription from '../components/LogoDescription'
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

import '../globalStyles.css'
import '../portret.css'
import '../socialIcons.css'
import '../hamburgers.css'
import 'bootstrap/dist/css/bootstrap.min.css'

/*const Wrapper = styled.section`
  position: relative;
  background-size: cover;
  height: 100vh;
  background-image: url(${(props) => props.url});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  @media (orientation: portrait) {
    height: 100vh;
    position: relative;
    background-size: cover;
    background-image: url(${(props) => props.url});
    background-position: 50% 50%;
  }
`; */
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`
const ToplineImg = styled.img`
  top: 10%;
  right: 33%;
  left: 32%;
  width: 33%;
  height: 0.3%;
  position: absolute;
  @media (orientation: portrait) {
    top: 6%;
    left: 32%;
    right: 28%;
    width: 31%;
    height: 0.2%;
    position: absolute;
  }
`

const TopLineR = styled.img`
  top: 10%;
  left: 5%;
  width: 7%;
  height: 0.3%;
  position: absolute;
  @media (orientation: portrait) {
    top: 6%;
    right: 8%;
    width: 7%;
    height: 0.2%;
    position: absolute;
  }
`

const TopLineL = styled.img`
  top: 10%;
  right: 8%;
  width: 7%;
  height: 0.3%;
  position: absolute;
  @media (orientation: portrait) {
    top: 6%;
    right: 8%;
    width: 7%;
    height: 0.2%;
    position: absolute;
  }
`

const LogoImg = styled.div`
  left: 19%;
  top: 30%;
  position: absolute;
  width: 29%;
  height: 210px;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
`

const LinkedInLogo = styled.input`
  left: 20%;
  font-family: Arial;
  fontsize: 2.4vw;
  color: black;
  top: 7%;
  height: 6%;
  position: absolute;
  src: url(${props => props.url});
`

const FooterLine = styled.img`
  left: 5%;
  bottom: 10%;
  width: 80%;
  height: 0.3%;
  position: absolute;
`

const Paragraph = styled.p`
  top: 5.1%;
  left: ${props => props.lvalue};
  right: ${props => props.rvalue};
  position: absolute;
  height: 4%;
  color: white;
  font-size: 1.7em;
  font-weight: bold;
`

const MenuTrigger = styled.input`
  text-decoration: none;
  font-size: 0.9em;
  outline: none;
  color: #f7f7f7;
  height: 40px;
  position: relative;
  width: 40px;
  &:before {
    position: absolute;
    top: 10px;
    left: 2;
    width: 40px;
    height: 6px;
    background: #fff;
    box-shadow: 0 6px #34495e, 0 12px #fff, 0 18px #34495e, 0 24px #fff;
    content: '';
  }
`
const IndexPage = props => {
  const { data } = props
  const [open, setOpen] = React.useState(false)

  const [openVideOverlay, setVideoOverlay] = React.useState(false)
  const [openthreeDOverlay, setThreeDOverlay] = React.useState(false)

  const [openPdfOverlay, setPdfOverlay] = React.useState(false)
  const [openDegreeOverlay, setOpenDegreeOverlay] = React.useState(false)

  const items = data.prismicBlogpostBodyHeaderline.items[0]
  const { url } = data.prismicBlogpost.data.topline
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
  const watchvideolink = items.watchvideolink.url
  const _3dmodelURL = items._3dmodellink.url
  const pdfDocLink = items.pdflink.url
  const whastsappchatlink = items.whastsappchatlink.url
  const mailtolink = items.mailtolink.url
  const headerRightTitle =
    data.prismicBlogpostBodyHeaderline.primary.header_right_title.text
  const headerLeftTitle =
    data.prismicBlogpostBodyHeaderline.primary.header_left_title.text
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
        <PDFLogo
          src={pdfLogoURL}
          type="image"
          value=""
          onClick={() => setPdfOverlay(!openPdfOverlay)}
        />
        <Video
          src={videoURL}
          type="image"
          value=""
          onClick={() => setVideoOverlay(!openVideOverlay)}
        />
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
            setOpenDegreeOverlay(!openDegreeOverlay)}}
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
        />
      )}

      {openthreeDOverlay && (
        <ThreeDOverlay
          removeOverlay={() => setThreeDOverlay(!openthreeDOverlay)}
        />
      )}
      {openVideOverlay && (
        <VideoOverlay removeOverlay={() => setVideoOverlay(!openVideOverlay)} />
      )}
      {openPdfOverlay && (
        <PdfCarousel removeOverlay={() => setPdfOverlay(!openPdfOverlay)} />
      )}
    </Layout>
  )
}
export default IndexPage

export const pageQuery = graphql`
  query {
    prismicBlogpost {
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
