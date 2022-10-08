import React from 'react';

import NavBar from '../components/NavBar';

import BGI from '../MBGImg';
import ArticleList from '../ArticleList';
import "../Article.css"
import "../loadMore"
import LoadMore from '../loadMore';
import "../FooterElement"
import Foot from '../Foot';
import TutorialList from '../TutorialList';


import Subscribe from '../Subscribe';
const { faker } = require('@faker-js/faker');


function HomePage() {
  return (
    <div>
    
    <NavBar/>
    <BGI  
    img={faker.image.animals()}/>
    <ArticleList/>
    <LoadMore/>
    <TutorialList/>
    <LoadMore/>
    <Subscribe/>
   
    <Foot/>
    </div>
   
  );
}

export default HomePage;