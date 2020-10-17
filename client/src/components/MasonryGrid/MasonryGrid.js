import React from "react";
import Masonry from 'react-masonry-css'
import OneImage from "../OneImage"
import "./masonry.css";

function MasonryGrid() {
    // const [items, set] = useState(data)
    // useEffect(() => void setInterval(() => set(shuffle), 8000), [])

    return (
        <div className="container transp">
            <div className="masonry-container transp">
                <Masonry className="my-masonry-grid"
                            breakpointCols={4}
                            columnClassName="my-masonry-grid_column" 
                            brakePoints={1}>
                    <OneImage />
                    <OneImage />
                    <OneImage />
                    <OneImage />
                </Masonry>
            </div>
            
        </div>
    )
    
}


export default MasonryGrid;