import React, {useCallback, useMemo, useState} from 'react'
import axiosInstance from "./ajax";
import {useNavigate} from "react-router-dom";

function CreateBlog() {
    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const navigate = useNavigate()

    const handleSubmit = useCallback(async () => {
        try {
            await axiosInstance.post('/blogs', {title, content})
            navigate('/blogs')
        } catch(err) {
            alert(err);
        }
    }, [title, content])

    const handleDiscardAndGoBack = useCallback(async () => {
        navigate('/blogs')
    }, [])

    const handleChange = (field, event) => {
        if (field === 'title') {
            setTitle(event.target.value)
        }
        if (field === 'content') {
            setContent(event.target.value)
        }
    }

    const disableSubmit = useMemo(() => !title || !content, [title, content])

    return (
        <div style={{padding: 20, display: 'flex', flexDirection: 'column', width: 500, gap: 10}}>
            <label htmlFor="title">Title:</label>
            <input style={{height: 30}} type="text" id="title" name="title" value={title} onChange={handleChange.bind(null, 'title')}/>

            <label htmlFor="content">Content:</label>
            <textarea style={{minHeight: '50vh', minWidth: '50vw', maxWidth: '50vw'}}  id="content" name="content" value={content} onChange={handleChange.bind(null, 'content')}/>

            <div style={{ display: 'flex', gap: 20}}>
                <button type="submit" onClick={handleSubmit} disabled={disableSubmit}>Submit</button>
                <button type="cancel" onClick={handleDiscardAndGoBack}>Discard And Go Back</button>
            </div>
        </div>
    )

}

export default CreateBlog
