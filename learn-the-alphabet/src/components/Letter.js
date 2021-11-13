import { useEffect } from "react";

function Letter(props) {
    const {letter, onLetterKeyPress} = props;

    useEffect(() => {
        function letterKeyPress(e) {
            console.log(e.key);
            onLetterKeyPress(e.key);
        }

        document.addEventListener("keydown", letterKeyPress, false);        

        return () => {
            document.removeEventListener("keydown", letterKeyPress, false);
        }
    }, [onLetterKeyPress]);

    return (
        <div>
            <div>
                <img src={letter.path} alt="Letter to guess" />
            </div>
        </div>
    );
}

export default Letter;