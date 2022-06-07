import React, {useEffect, useState} from 'react';
import '../css/grid.css'
import HomeForm from "../components/HomeForm";

const Home = () => {
    const importAll = (r) => {
        return r.keys().map(r)
    }
    const imagesContext = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/))
    console.log(imagesContext)

    return (
        <div>
            {imagesContext && <HomeForm images={imagesContext}/>}
        </div>
    );
};

export default Home;