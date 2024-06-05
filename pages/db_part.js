import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Page2() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/data')
            .then(response => response.json())
            .then(data => setData(data.table2))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className={styles.container}>
            <h1>Part</h1>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th>ID</th>
                        <th>Part_number</th>
                        <th>Category_ID</th>
                        <th>Supplier_ID</th>
                        <th>Status</th>
                        <th>LCC</th>
                        <th>YTEOL</th>
                        <th>Description</th>
                        <th>Part_introduction</th>
                        <th>Custom</th>
                        <th>Client_ID</th>
                        <th>Hash</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item) => (
                        <tr key={item.id} className={styles.row}>
                            <td>{item.id}</td>
                            <td>{item.part_number}</td>
                            <td>{item.category_id}</td>
                            <td>{item.supplier_id}</td>
                            <td>{item.status}</td>
                            <td>{item.lcc}</td>
                            <td>{item.yteol}</td>
                            <td>{item.description}</td>
                            <td>{item.part_introduction}</td>
                            <td>{item.custom}</td>
                            <td>{item.client_id}</td>
                            <td>{item.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
