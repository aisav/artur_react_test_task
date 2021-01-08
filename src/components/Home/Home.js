import React, {useCallback, useEffect, useState} from 'react';

import {fetchCategoryItems} from '../../store/actions';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {firstLoadImages} from '../../store/actions';
import './Home.css'

// import {Container, Card} from 'react-bootstrap';
// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';
// import Animation from '../components/Animation';
// import {LOADING} from '../js/literals';
// import FilterForm from './FilterForm';

const Home = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState();
    const [isDisabled, setIsDisabled] = useState(false);
    const [pageNum, setPageNum] = useState(10);

    const dispatch = useDispatch();
    let {catId} = useParams();
    if (!catId)
        catId=1

    let categories = useSelector(state => state.cats.categories);
    const images = useSelector(state => state.cats.images);
    // const catId = useSelector(state => state.cats.catId);



    // const isFinal = useSelector(state => state.cats.isFinal);
    // const id = useSelector(state => state.cats.catId);
    // const [catId, setCatId] = useState(1);

    // const id = props.state.catId;
    // const url_string = window.location.href
    // const url = new URL(url_string);
    // let id = url.searchParams.get("catId");
    // if(id)
    //     setCatId(id)


    useEffect(() => {
        const loadCategoryImages = async catId => {
            try {
                await dispatch(firstLoadImages(catId));
            } catch (err) {
                setError(err.message);
            }
        }
        loadCategoryImages(catId);
        }, [dispatch, catId]);


    let {photos, status} = props;

    const renderImages =() => ( images.map(photo => <li key={photo.id}><img className="smaller-image" src={photo.url}/></li>) )

    return (
        <ul id="imgList">{renderImages()}</ul>
    );

}

export default Home;
