import React, { Component } from 'react';
import Header from './components/Header';
import ImageCard from './components/ImageCard';
import AboutModal from './components/AboutModal';
import CaptionModal from './components/CaptionModal';
import WarningModal from './components/WarningModal';

class App extends Component {
  state = {
    count: 0,
    images: [],
    captionModalOpen: false,
    aboutModalOpen: false,
    uploadVisible: true,
    warningVisible: false,
    // url: 'https://api-23imgs.7e14.starter-us-west-2.openshiftapps.com'
    url: 'http://localhost:4000'
  };

  componentDidMount() {
    this.fetchImages();
  }

  // fetch 23 images in an array from our API/DB server, set them to state
  fetchImages = () => {
    fetch(this.state.url + '/images/')
      .then(res => {
        return res.json();
      })
      .then(images => {
        let count = images[images.length - 1].number;
        let uploadVisible = true;
        if (this.state.upload) {
          uploadVisible = false;
        }
        this.setState({ images: images.reverse(), count, uploadVisible });
      })
      .catch(err => console.log(err));
  };

  // turns on/off the about modal or caption modal, also triggers the imageUpload when
  // closing the caption modal
  toggleModal = (modalName, caption) => {
    this.setState(
      currentState => ({ [modalName]: !currentState[modalName] }),
      () => {
        if (modalName === 'captionModalOpen' && !this.state.captionModalOpen) {
          this.uploadImage(caption);
        }
      }
    );
  };

  // sends the user's image to the API with the desired caption
  // and a number so that each image has a unique name
  uploadImage = caption => {
    let data = new FormData();
    data.append('file', this.state.upload);
    data.append('caption', caption);
    data.append('number', this.state.count + 1);
    fetch(this.state.url + '/upload/', {
      method: 'POST',
      body: data
    })
      .then(res => {
        this.fetchImages();
      })
      .catch(err => console.log(err));
  };

  // triggered when an image is selected to upload
  // checks if the image size is large enough
  // opens the caption modal and saves the image to state
  onDrop = upload => {
    upload = upload[upload.length - 1];
    if (!upload) {
      return;
    }
    if (upload.size > 25000) {
      this.setState({ upload }, () => {
        this.toggleModal('captionModalOpen');
      });
    } else if (upload.size < 25000) {
      this.toggleModal('warningVisible');
    }
  };

  render() {
    let images = this.state.images.map(imageObj => {
      return (
        <ImageCard
          url={imageObj.url}
          caption={imageObj.caption}
          key={imageObj.number}
        />
      );
    });

    return (
      <div className="App">
        <Header
          onDrop={this.onDrop}
          toggleModal={this.toggleModal}
          uploadVisible={this.state.uploadVisible}
        />
        <CaptionModal
          open={this.state.captionModalOpen}
          toggleModal={this.toggleModal}
        />
        <AboutModal
          open={this.state.aboutModalOpen}
          toggleModal={this.toggleModal}
        />
        <WarningModal
          open={this.state.warningVisible}
          toggleModal={this.toggleModal}
        />
        {images}
      </div>
    );
  }
}

export default App;
