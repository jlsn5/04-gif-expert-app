import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    //Hook
    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

    const onAddCategory = ( newCategory ) => {

        if (categories.includes( newCategory )) return;

        setCategories([ newCategory, ...categories ]);
        // setCategories( cat => [ ...cat, 'Valorant' ] );

    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
            // setCategories={ setCategories } 
            onNewCategory={ (value) => onAddCategory(value)}
            />

            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category= { category } />
                ))
            }
                
            
        </> 
    )
}
