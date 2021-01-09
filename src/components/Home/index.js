import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {firstLoadImages, fetchImages} from '../../store/actions';
import './Home.css'

const Home = props => {

    const [pageNum, setPageNum] = useState(1);

    const dispatch = useDispatch();
    let {catId} = useParams();
    if (!catId)
        catId=1

    const images = useSelector(state => state.cats.images);


    useEffect(() => {
        const loadCategoryImages = async catId => {
            try {
                await dispatch(firstLoadImages(catId));
            } catch (err) {
                console.log(err.message);
            }
        }
        loadCategoryImages(catId);
        }, [dispatch, catId]);


    const handleShowMoreImages = () => {
        const loadMoreImages = async catId => {
            try {
                await dispatch(fetchImages(catId, pageNum, 10));
            } catch (err) {
                console.log(err.message);
            }
        }
        setPageNum(pageNum + 1);
        loadMoreImages(catId)
    }

    const renderImages =() => ( images.map(photo => <li key={photo.id}><img alt={photo.name} className="smaller-image" src={photo.url}/></li>) )

    return (
        <React.Fragment>
            <div className="container">
            <ul id="imgList">{renderImages()}</ul>
            </div>
            <div>
                <button id="loadMore" onClick={handleShowMoreImages}>Load more</button>
            </div>
        </React.Fragment>
    );

}

export default Home;
