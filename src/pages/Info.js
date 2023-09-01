import React from 'react';
import './InfoPage.css'

const Info = () => {
    return (
        <div className='diamond-info'>
              <h1>Diamond Information</h1>     
            
             <div className='card'>
              <div className='card-body'> 
              <h6 className='card-title'> What is shape?</h6>  
              <p className='card-text'> Shape: refers to the outline and physical attributes</p>
              </div>
              </div>

              <div className='card'>
              <div className='card-body'>
              <h6 className='card-title'> What is cut?</h6> 
              <p className='card-text'>Cut: refers to the polish, proportions, and symmetry of a diamond, and not in reference to the shape of the diamond</p> 
              </div>
              </div>

              <div className='card'>
              <div className='card-body'> 
              <h6 className='card-title'> What is clarity?</h6>  
              <p className='card-text'>Clarity: a measure of the purity and rarity of the stone, graded by the visibility of these characteristics under 10-power magnification.</p>
              </div>
              </div>

               <div className='card'> 
              <div className='card-body'>
              <h6 className='card-title'> What is color?</h6>  
              <p className='card-text'> Color:  refers to the lack of color in a diamond with the color D meaning its colorless</p>
              </div>
              </div>

             <div className='card'> 
              <div className='card-body'> 
              <h6 className='card-title'> What is carat?</h6>
              <p className='card-text'>Carat: the unit of measurement for the physical weight of a diamond</p>
              </div>
              </div>

            <div className='card'> 
              <div className='card-body'>
              <h6 className='card-title'> What does reported mean?</h6>  
              <p className='card-text'>Reported: a document or a “diamond certificate”/diamond dossier issued by an independent Gemological Laboratory who authenticates diamonds</p>
              </div> 
              </div>
        </div>
    );
};

export default Info;