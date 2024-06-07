import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { allClass } from "../../Api/Api";
const AllClass = () => {
    const { data: allClassData = [] } = useQuery({
      queryKey: ["allClassData"],
      queryFn: allClass,
    });
    return (
        <div>
            
        </div>
    );
};

export default AllClass;