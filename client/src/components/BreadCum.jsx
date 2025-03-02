import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const BreadCum = () => {
    const location = useLocation();
    const [items, setItems] = useState([]);
    useEffect(() => {
        generateBreadcumItems();
    }, []);

    function generateBreadcumItems() {
        const items = location.pathname.split('/');
        setItems(items);
    }

    function capitalizeFirstWord(word) {
        if (!word) return ''; // Handle empty strings
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    
    return (
        <div>
            <Breadcrumbs size={'lg'}>
                {items?.map((item) => (
                    (item != "") ? <BreadcrumbItem>{capitalizeFirstWord(item)}</BreadcrumbItem> : null
                ))}
            </Breadcrumbs>
        </div>
    );
}

export default BreadCum;