import '../styles/Recipes.css';

const searchPressed = () => {
    document.querySelector("input").value = '';
}

function Recipes(props) {
    return (
        <div className="Recipes">
            <div className="search__bar">
                <input />
                <button onClick={() => searchPressed()}>Search</button>
            </div>
            {props.recipes.map((recipe, index) => {
                return <div key={index} className="recipe" style={{ backgroundImage: `url("${recipe.image}")`}}>
                    <p className="text">{recipe.name}</p>
                </div>
            })}
            <div className="sort__bar">
                <button>Recent</button>
                <button>Top Rated</button>
            </div>
        </div>
    );
}

export default Recipes;
