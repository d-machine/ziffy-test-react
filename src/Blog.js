import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axiosInstance from "./ajax";

function Blog() {
    const {id} = useParams()
    const [blog, setBlog] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axiosInstance.get(`/blogs/${id}`)
                console.log(res.message)
                setBlog(res?.data)
                setLoading(false)
            } catch(err) {
                setError(err.message)
                setLoading(false)
            }
        }
        fetchBlog()
    }, []);

    if (loading) {
        return (
            <div style={{
                padding: 20,
                display: 'flex',
                height: '90vh',
                width: '90vw',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24
            }}>
                Loading Data...
            </div>
        )
    }

    if (error !== null && error !== undefined) {
        console.log(error, 'error')
        return (
            <div style={{
                padding: 20,
                display: 'flex',
                height: '90vh',
                width: '90vw',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'red',
                fontSize: 24
            }}>
                {error || 'some error occurred'}
            </div>
        )
    }

    return (
        <div style={{padding: 20}}>
            <h1>{blog.title}</h1>
            <div style={{padding: 10, width: '50vw', height: '70vh', overflowY: 'scroll', border: '1px solid #cccccc', borderRadius: 16}}>
                <p>{blog.content}</p>
            </div>
        </div>
    )
}

export default Blog
