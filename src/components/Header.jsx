import "../index.css"
import photo from "../assets/faith1.jpg"

export default function Header(){

    return(
        <header>
            <img src={photo} alt="Picture of Faith Jaiyeola" className="picture"  />
            <h1 className="name">Faith Jaiyeola</h1>
            <p className="role">Frontend Developer</p>
            <small className="website">faithjaiyeola.website</small>
            <div className="buttons">
              <a href="mailto:ayoolajay144@gmail.com" target="_blank" rel="noopener noreferrer"><button className="email-btn btn"><i class="fa-solid fa-envelope"></i> Email</button></a>
              <a href="https://www.linkedin.com/in/faith-jaiyeola/" target="_blank" rel="noopener noreferrer"><button className="linkedin-btn btn"><i class="fa-brands fa-linkedin"></i> Linkedin</button></a>
            </div>
        </header>
    )
}