// What You Will Learn :

// React App
// React Components
// JSX
// Bootstrap


// Instructions : Build A React Carousel

// Check the demo



// You will use the React Responsive Carousel Package to create the carousel.

// In your App component make sure to use the corresponding imports of the installed package

// Click on the links below, to retrieve the images for your carousel:
// Hong Kong, Macao, Japan, Las Vegas


import './App.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
    const styles = {
    maxWidth: '600px',
    margin: '0 auto'
    };
  return (
	  <div style={styles}>
		  <Carousel>
			  <div>
				  <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Hong Kong" />
				  <p className="legend">Hong Kong</p>
			  </div>
			  <div>
				  <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Singapore"/>
				  <p className="legend">Macao</p>
			  </div>
			  <div>
				  <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Japan"/>
				  <p className="legend">Japan</p>
			  </div>
			  <div>
				  <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Las Vegas"/>
				  <p className="legend">Las Vegas</p>
			  </div>
		  </Carousel>
	  </div>
  );
}

export default App
