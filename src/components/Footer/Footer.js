import './footer.css';

export const Footer = () => {
    return (
        <div className='footer'>
            <p className='footer-title'>Blaze and the Monster Machines is a computer-animated interactive children's television series with a focus on teaching science, technology, engineering, and mathematics (STEM).</p>
            <p className='footer-link'>For More Blazing Speed and Blaze Info:
                <a href="https://en.wikipedia.org/wiki/Blaze_and_the_Monster_Machines" target="_blank" rel="noopener noreferrer">Blaze Wikipedia</a> &copy;
            </p>
            <p className='footer-link'>Blaze Internet Movie Database:
                <a href="https://www.imdb.com/title/tt4458594/" target="_blank" rel="noopener noreferrer">Blaze IMDb</a> &copy;
            </p>
        </div>
    );
}