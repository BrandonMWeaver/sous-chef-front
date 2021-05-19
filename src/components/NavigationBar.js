import '../styles/NavigationBar.css';

const scrollToHome = () => {
    window.scrollTo({ top: document.querySelectorAll("section")[0].offsetTop, behavior: "smooth" });
}

const scrollToRecipes = () => {
    window.scrollTo({ top: document.querySelectorAll("section")[1].offsetTop - 63, behavior: "smooth" });
}

const scrollToAbout = () => {
    window.scrollTo({ top: document.querySelectorAll("section")[2].offsetTop - 63, behavior: "smooth" });
}

const scrollToLogIn = () => {
    window.scrollTo({ top: document.querySelectorAll("section")[3].offsetTop - 63, behavior: "smooth" });
}

function NavigationBar(props) {
    return (
        <div className="NavigationBar">
            <button onClick={() => scrollToHome()}>Home</button>
            <button onClick={() => scrollToRecipes()}>Recipes</button>
            <button onClick={() => scrollToAbout()}>About</button>
            <button onClick={() => scrollToLogIn()}>Sign {props.inOrOut}</button>
        </div>
    );
}

export default NavigationBar;
