import React from "react";

const date = new Date();
let year = date.getFullYear();
function Footer(){
    return (
        <footer>
            <p>CopyRight &copy; {year}</p>
        </footer>
    )
}

export default Footer;