import { useEffect } from "react";

function Letter(props) {
    const {letter, onLetterKeyPress} = props;

    useEffect(() => {
        function letterKeyPress(e) {
            // console.log(e.key);
            onLetterKeyPress(e.key);
        }

        document.addEventListener("keydown", letterKeyPress, false);        

        return () => {
            document.removeEventListener("keydown", letterKeyPress, false);
        }
    }, [onLetterKeyPress]);

    return (
        <div className="container">
            <div className="row s12 center-align puzzle-letter">
                {letter.char}
            </div>
        </div>
    );
}

export default Letter;