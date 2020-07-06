/**
 * Home component
 */

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Gallery from 'react-grid-gallery';
import {loadMoreImages, showError} from './redux/HomeActions'
import { Button, Alert } from 'antd'

const styles = {
  contentDiv: {
    backgroundColor: 'white',
    padding: 20,
    display: 'block',
    overflow: 'auto',
    height: '100%'
  },
  showMoreDiv:{
    width:'100%',
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
  }
}

function Home() {
  const dispatch = useDispatch()
  const { images, currentImagesPage, loadingMore, error } = useSelector(state => state.home)

  /**
   * This hook will execute one time, after the component is mounted. (componentDidMount)
   */
  useEffect(() => {
    handleShowMoreImages()
  }, [])

  /**
   * This hook will execute every time component update. (componentDidUpdate)
   */
  useEffect(() => {
    if(error && error.show){
      setTimeout(() => {
          dispatch(showError(false,''))
        }, 5000)
    }
  })

  /**
   * It will be dispatched in load more button event
   * @param event
   */
  const handleShowMoreImages = (event) => {
    if(event){
      event.preventDefault()
    }
    if(loadingMore){
      return
    }
    dispatch(loadMoreImages(currentImagesPage))
  }

  return (
    <div style={styles.contentDiv}>
      <Gallery images={images} enableImageSelection={false} />
      <div style={styles.showMoreDiv}>
        <Button type="link" onClick={(event) => handleShowMoreImages(event)} loading={loadingMore}>
          Show more...
        </Button>
      </div>
      {error && error.show && <Alert message={error.message} type="error" />}
    </div>
  )
}

export default Home