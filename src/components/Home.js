import '../styles/Home.css';

function Home(props) {
    return (
        <div className="Home">
            <p>Featured Recipe</p>
            <div className="image" style={{ backgroundImage: `url("${props.featured.image}")` }}>
                <p className="text">{props.featured.name}</p>
            </div>
        </div>
    );
}

export default Home;
