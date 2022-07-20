import React from 'react'
import SearchNotFound from './SearchNotFound';
import Photo from './Photo';


const PhotoGallery = (props) => {


const photos = props.data;
let results = [];


if (photos.length > 0 ) {
    photos.forEach(photo => {

    /* Photo image URL's @ https://www.flickr.com/services/api/misc.urls.html -
        You can construct the source URL to a photo once you know its ID, server ID, 
        and secret as returned by many API methods.*/
        results.push(<Photo src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id}/>,
)
    });

    } else {   
results = <SearchNotFound />
      
}



    return (
        <div className="photo-container">
        <h3> Results for: 
        <br></br>
        {props.title}
        </h3>
            <ul>
                {results}
            </ul>
        </div>
    )

  }

export default PhotoGallery