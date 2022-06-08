import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import TextEllipsis from 'react-text-ellipsis';

function Travel(props) {

  const searchText = (tags) => {
    props.searchText(tags)
  }

  return (
    <div className="d-flex my-5 pb-5">
      <Row>
        <Col lg={4} md={12} sm={12}>
          <div>
            <img className="img-web" src={props.getTrip.photos[0]} />
          </div>
        </Col>

        <Col lg={8} md={12} sm={12} className="mt-2">
          <div className="text-detail">
            <a className="font-style title-trip" href={`${props.getTrip.url}`}>{props.getTrip.title}</a>
            <div className="d-flex">
              <TextEllipsis
                lines={2}
                tag={'div' || 'span'}
                ellipsisChars={'...'}
              >
                <span className="font-style sub-trip">{props.getTrip.description}</span> <br />
              </TextEllipsis>
            </div>

            <a className="font-style text-blue-wongnai" href={`${props.getTrip.url}`} >อ่านต่อ</a>

            <div className="mt-1">
              <span className="font-style list-category">หมวดหมู่ :
                {props.getTrip && props.getTrip.tags.length > 0 &&
                  props.getTrip.tags.map((item, i) => {
                    if (i == props.getTrip.tags.length - 1) {
                      return (
                        <>          
                          <span className="ml-1">{`${"และ"}`}</span>
                          <a className="cursor-pointer" onClick={() => searchText(item)}>{` ${item} `}</a>
                        </>
                      )
                    } else {
                      return (
                        <>
                          {i == props.getTrip.tags.length - 2 ?
                            <a key={i} className="cursor-pointer ml-1" onClick={() => searchText(item)}>{`${item} `}</a>
                            :
                            <>
                              <a className="cursor-pointer ml-1" onClick={() => searchText(item)}>{`${item}`}</a>
                              <a onClick={() => searchText(item)}>{`, `}</a>
                            </>
                          }
                        </>
                      )
                    }
                  })}
              </span>
            </div>

            <div className="mt-3">
              <Row>
                {props.getTrip.photos && props.getTrip.photos.length > 0 &&
                  props.getTrip.photos.map((photos, index) => {
                    if (index != 0) {
                      return (
                        <Col lg={4} md={12} sm={12} >
                          <img key={index} className={`image-sub mt-2 image-width ${index >= 1 ? "" : "imagesub-left"}`} src={photos} />
                        </Col>
                      )
                    }
                  })
                }
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>

  )
}

export default Travel