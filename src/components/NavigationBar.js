import '../styles/NavigationBar.css';

const scrollToHome = () => {
    window.scrollTo({ top: document.querySelectorAll(".Section")[0].offsetTop, behavior: "smooth" });
}

const scrollToRecipes = () => {
    window.scrollTo({ top: document.querySelectorAll(".Section")[1].offsetTop - 63, behavior: "smooth" });
}

const scrollToAbout = () => {
    window.scrollTo({ top: document.querySelectorAll(".Section")[2].offsetTop - 63, behavior: "smooth" });
}

const scrollToLogIn = () => {
    window.scrollTo({ top: document.querySelectorAll(".Section")[3].offsetTop - 63, behavior: "smooth" });
}

function NavigationBar() {
    return (
        <div className="NavigationBar">
            <button onClick={() => scrollToHome()}>Home</button>
            <button onClick={() => scrollToRecipes()}>Recipes</button>
            <button onClick={() => scrollToAbout()}>About</button>
            <button onClick={() => scrollToLogIn()}>Sign In</button>
        </div>
    );
}

export default NavigationBar;
