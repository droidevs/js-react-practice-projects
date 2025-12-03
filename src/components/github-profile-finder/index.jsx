import { useEffect, useState } from "react";
import User from "./user";
import './styles.css';

export default function GithubProfileFinder() {

    const [userName, setUserName] = useState('droidevs');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    async function fetchGithuUserData() {
        try {
            setLoading(true);
            const res = await fetch(`https://api.github.com/users/${userName}`);

            const data = await res.json();

            if(data) {
                setUserData(data);
                setLoading(false);
                setUserName('');
            }
            console.log(data);
        }catch(error){
            setErrorMessage(error.errorMessage);
            setLoading(false);
        }
    }
    function handleSubmit() {
        fetchGithuUserData();
    }

    useEffect(() => {
        fetchGithuUserData();
    },[])

    if(loading) {
        return <h1>Loading data ! Please wait</h1>
    }

    return <div className="github-profile-container">
        <div className="input-wrapper">
            <input
                name="search-by-username"
                type="text"
                placeholder="Search github Username..."
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
        {
            userData !== null ? <User user={userData}/> : null
        }
    </div>
}