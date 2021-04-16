import '../styles/Section.css';

function Section(props) {
    return <div className="Section" style={{ paddingTop: props.padded ? "63px" : '0', backgroundColor: props.backgroundColor }}></div>
}

export default Section;
