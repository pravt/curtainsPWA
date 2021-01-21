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
import MenuBurger from '../components/menuBurger'
import RightMenuBurger from '../components/rightMenuBurger'
import Wrapper from '../components/wrapper'
import Description from '../components/description'
import DegreeOverlay from '../components/DegreeOverlay'
import EmptyOverlayModel from '../components/emptyOverlayModel'
import Metadata from '../components/metadata'
import RMenuBurger from '../components/rmenuBurger'

import {
  getPDfDocuments,
  getEmbedVideoURL,
  getSocialUrls,
  getMenuBgColor,
  getCommContent,
  getSocialLogosUrls,
  getWebsiteMeta,
} from '../utils/index'
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
  outline: none;
`

const IndexPage = props => {
  const { data } = props
  const pdfDocuments = getPDfDocuments(data)
  const videoHtml = getEmbedVideoURL(data)
  const socialURLs = getSocialUrls(data)
  const menuBgColor = getMenuBgColor(data)
  const commContent = getCommContent(data)
  const socialLogoUrls = getSocialLogosUrls(data)
  const websiteMeta = getWebsiteMeta(data)
  const [open, setOpen] = React.useState(false)
  const [openVideOverlay, setVideoOverlay] = React.useState(false)
  const [openthreeDOverlay, setThreeDOverlay] = React.useState(false)
  const [showEmptyOverlay, setShowEmptyOverlay] = React.useState(false)
  const [openPdfOverlay, setPdfOverlay] = React.useState(false)
  const [openDegreeOverlay, setOpenDegreeOverlay] = React.useState(false)

  const items = data.prismicBlogpostBodyHeaderline.items[0]
  const backgroundURL = data.prismicBlogpost.data.background_image.url
  let logo_url = data.prismicBlogpost.data.logo_image.url
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
      <Metadata
        websiteMeta={websiteMeta}
        title={websiteMeta.title.text}
        description="This is my home page"
      />
      <Wrapper bgurl={backgroundURL}>
        {!open && (
          <MenuBurger
            bgColor={menuBgColor ? menuBgColor.menu_bgcolor : 'black'}
            openOverlay={() => {
              setOpen(!open)
            }}
          />
        )}
        {!showEmptyOverlay && !open && (
          <RMenuBurger
            bgColor={menuBgColor ? menuBgColor.menu_bgcolor : 'black'}
            openOverlay={() => {
              setShowEmptyOverlay(!showEmptyOverlay)
            }}
          />
        )}

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
          fb={fbIconURL}
          wp={whatsappIconURL}
          email={emailIconURL}
          removeOverlay={() => setOpen(!open)}
          socialURLs={socialURLs}
          commContent={commContent}
          socialLogoUrls={socialLogoUrls}
        />
      )}

      {showEmptyOverlay && (
        <EmptyOverlayModel
          removeOverlay={() => setShowEmptyOverlay(!showEmptyOverlay)}
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
              whatsapp_url {
                url
              }
              mail_url {
                url
              }
            }
          }
          ... on PrismicBlogpostBodyMenu {
            primary {
              menu_bgcolor
              menu_right_icon {
                url
              }
              menu_right_icon {
                url
              }
              menu_right_icon_color
            }
          }
          ... on PrismicBlogpostBodySociallogos {
            primary {
              linkedin {
                url
              }
            }
          }
          ... on PrismicBlogpostBodyCommunications {
            primary {
              map_url {
                text
              }
              phone_number {
                text
              }
              website_url {
                text
              }
              email_address {
                text
              }
              phone_icon {
                url
              }
              location_icon {
                url
              }
              webiste_icon {
                url
              }
            }
          }
          ... on PrismicBlogpostBodyWebsitemeta {
            primary {
              title {
                text
              }
              description {
                text
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
