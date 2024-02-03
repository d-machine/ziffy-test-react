import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import axiosInstance from './ajax'

function BlogsList() {

    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axiosInstance.get('/blogs')

                if (res) {
                    setBlogs(res?.data || [])
                }
            } catch (err) {
                alert(err);
            }
        }
        fetchBlogs()
    }, []);

    return (
        <div style={{padding: 20}}>
            <ul>
                {blogs.map(({title, top_2_lines, id}) => (
                    <li key={id}>
                        <Link to={`/blogs/${id}`}>
                            <h3>{title}</h3>
                        </Link>
                        <p style={{width: '50vw'}}>{top_2_lines}</p>
                    </li>
                ))}
            </ul>
            <button onClick={() => {navigate('/create-blog')}}>Create New Blog</button>
        </div>
    );
}

export default BlogsList;
