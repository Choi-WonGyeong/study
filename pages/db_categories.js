import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Page1() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/data')
            .then(response => response.json())
            .then(data => setData(data.table1))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    return (
        <div className={styles.container}>
            <h1>Categories</h1>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>LEAF</th>
                        <th>PARENT_ID</th>
                        <th>REF_1</th>
                        <th>REF_2</th>
                        <th>REF_3</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item) => (
                        <tr key={item.id} className={styles.row}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.leaf}</td>
                            <td>{item.parent_id}</td>
                            <td>{item.ref_1}</td>
                            <td>{item.ref_2}</td>
                            <td>{item.ref_3}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
