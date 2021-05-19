import '../styles/LoadingScreen.css';

function LoadingScreen(props) {
    if (props.loading) {
        return (
            <div className="LoadingScreen">
                <div className="icon" />
            </div>
        );
    }
    else
        return null;
}

export default LoadingScreen;
