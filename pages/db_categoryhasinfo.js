import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Page3() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/data')
            .then(response => response.json())
            .then(data => setData(data.table3))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    return (
        <div className={styles.container}>
            <h1>Categories</h1>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th>Category_ID</th>
                        <th>Info_ID</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item) => (
                        <tr key={item.id} className={styles.row}>
                            <td>{item.category_id}</td>
                            <td>{item.info_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
