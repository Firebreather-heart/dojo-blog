import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('fireb');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author };
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blog),
        }).then(() => {
            console.log("New Blog Added");
            setIsPending(false);
            history.push('/')
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog Title</label>
                <input type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label >Blog Body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label> Blog Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="fireb">Fireb</option>
                    <option value="fireheart">Fireheart</option>
                    <option value="fbc">fbc</option>
                </select>
                {!isPending && <button type="submit">Add Blog</button>}
                {isPending && <button disabled type="submit">Add Blog</button>}
                {isPending && <p>Adding Blog</p>}
            </form>
        </div>
    );
}

export default Create;