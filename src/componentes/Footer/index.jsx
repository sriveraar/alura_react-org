import "./Footer.css"

const Footer = () =>{
    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className="redes">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="/img/facebook.png" alt="Facebok" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <img src="/img/twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="/img/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/sriveraa/" target="_blank" rel="noopener noreferrer">
            <img src="/img/linkedin.png" alt="Linkedin" />
            </a>
            <a href="https://github.com/sriveraar/" target="_blank" rel="noopener noreferrer">
            <img src="/img/github.png" alt="Github"/>
            </a>
        </div>
        <img src="/img/logo.png" alt="org" />
        <strong>Desarrollador por Sebastián Rivera</strong>
    </footer>
}

export default Footer