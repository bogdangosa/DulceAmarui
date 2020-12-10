import React from 'react'
import './Despre.css'

const Despre = () => {
    return(
        <div className="Despre">        
            <h1 className="DespreTitle">Despre Noi</h1>
            <div className="DespreSection">
                <div className="TeamImage"></div>
                <p className="DespreText">Suspendisse potenti. Nam mattis tortor venenatis nunc semper luctus. Fusce convallis arcu eu arcu fringilla rutrum. Pellentesque lacinia vestibulum risus a viverra. Etiam id justo metus. Ut sit amet risus blandit, elementum elit convallis, pharetra velit. Cras gravida finibus suscipit. Nullam blandit tellus viverra urna pretium eleifend. Vestibulum vitae ex ac nulla faucibus tincidunt ut sed massa. Phasellus eget iaculis nulla, efficitur semper felis. Morbi varius, mi vel ultrices placerat, risus sem ullamcorper sapien, quis tincidunt mauris tellus ac elit. Vivamus lobortis vitae nulla non molestie. Sed quis mattis velit. Aliquam eget ligula convallis, efficitur lectus eget, venenatis nisi. Mauris consectetur malesuada ullamcorper. Duis ultrices risus purus, ut vestibulum diam consequat vitae. Phasellus porttitor mi et nisl laoreet dignissim. Vivamus a venenatis magna. Nunc erat tortor, convallis a imperdiet id, pellentesque at purus.</p>
            </div>  

            <div className="DespreSection FlexReverse">
                <div className="TeamImage"></div>
                <p className="DespreText">Suspendisse potenti. Nam mattis tortor venenatis nunc semper luctus. Fusce convallis arcu eu arcu fringilla rutrum. Pellentesque lacinia vestibulum risus a viverra. Suspendisse gravida facilisis enim, sit amet eleifend nibh sollicitudin quis. Duis iaculis accumsan nibh, eu consequat ligula aliquet sit amet. Nullam id lectus aliquam, consectetur ipsum in, tincidunt diam. Aenean fermentum aliquam venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia, odio a pellentesque aliquet, sem ipsum gravida dolor, sed efficitur augue ipsum at justo. Vivamus lacinia consectetur augue sit amet dignissim. Nam feugiat eros ligula, at ultrices magna tincidunt sit amet. Proin ut ante dictum, aliquet orci eu, consectetur felis. Nunc erat tortor, convallis a imperdiet id, pellentesque at purus.</p>
            </div>  
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="DespreSVG_BG">
            <path fill="#EB6262" d="M0,288L120,288C240,288,480,288,720,245.3C960,203,1200,117,1320,74.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
        </div>
    );   
}


export default Despre;