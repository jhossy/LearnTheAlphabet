import { useEffect } from "react";

function Letter(props) {
    const {letter} = props;

    useEffect(() => {

        // function selectRandomLetter() {
        //     var randomInt = Math.floor(Math.random() * letterMappings.length); //26            
        //     setActiveLetter(letterMappings[randomInt]);
        // }

        // selectRandomLetter();

        document.addEventListener("keydown", letterKeyPress, false);        

        return () => {
            document.removeEventListener("keydown", letterKeyPress, false);
        }
    }, []);

    function letterKeyPress(e) {
        console.log(e.key);
    }

    return (
        <div>
            <div>
                <img src={letter.path} alt="Letter to guess" />
            </div>
        </div>
    );
}

export default Letter;