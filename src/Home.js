import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs, isPending, error} = useFetch('https://cute-gray-penguin-vest.cyclic.app/blogs');

   
    return (
        <div className="home">
            { error && <div> {error} </div> }
            { isPending && <div>loading....</div> }
            { blogs && <BlogList blogs={blogs} title="All"  />}
        </div>
    );
}

export default Home;