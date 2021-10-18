import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';

const Details = () => {
    const { departmentId } = useParams();

    const [departmentDetails, setDepartmentDetails] = useState([]);

    useEffect(() => {
        fetch('/departments.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [departmentId]);

    useEffect(() => {
        const foundDepartment = departmentDetails.find(department => department.id === departmentId)
        console.log(foundDepartment);
    }, [departmentDetails]);

    return (
        <div>
            <h1>Details Page</h1>
            <h3>{departmentId}</h3>
        </div>
    );
};

export default Details;