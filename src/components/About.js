import '../styles/About.css';

function About(props) {
    return (
        <div className="About" style={
            {
                "--backgroundImage": `url("${props.featured.image}")`,
            }
        }>
            <div className="box__corner__background">
                <div className="box__corner" style={{ top: "10px", left: "10px" }}></div>
                <div className="box__corner" style={{ top: "10px", left: "calc(100% - 50px)" }}></div>
                <div className="box__corner" style={{ top: "calc(100% - 50px)", left: "calc(100% - 50px)" }}></div>
                <div className="box__corner" style={{ top: "calc(100% - 50px)", left: "10px" }}></div>
                <div className="p__background">
                    <div className="text">
                        <p><span className="bold">Sous-Chef</span> is a place for food enthusiasts to manage their recipes and share them with others if they so choose.</p>
                        <p>Track steps completed, set timers, find new and exciting recipes, and create amazing food.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
