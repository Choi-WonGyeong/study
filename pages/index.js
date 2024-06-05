// import { useEffect, useState } from 'react';
// import styles from '../styles/Home.module.css';

// export default function Home() {
//     const [data, setData] = useState([]);
//     const [data2, setData2] = useState([]);

//     useEffect(() => {
//         fetch('/api/categories_table')
//             .then(response => response.json())
//             .then(data => setData(data))
//             .catch(error => console.error('Error fetching data:', error));
        
//         fetch('/api/part_table')
//             .then(response => response.json())
//             .then(data => setData2(data))
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     return (
//         <div className={styles.container}>
//             <h1>Categories</h1>
//             <table className={styles.table}>
//                 <thead className={styles.thead}>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>LEAF</th>
//                         <th>PARENT_ID</th>
//                         <th>REF_1</th>
//                         <th>REF_2</th>
//                         <th>REF_3</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item) => (
//                         <tr key={item.id} className={styles.row}>
//                             <td>{item.id}</td>
//                             <td>{item.name}</td>
//                             <td>{item.leaf}</td>
//                             <td>{item.parent_id}</td>
//                             <td>{item.ref_1}</td>
//                             <td>{item.ref_2}</td>
//                             <td>{item.ref_3}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <h1>Part</h1>
//             <table className={styles.table}>
//                 <thead className={styles.thead}>
//                     <tr>
//                         <th>ID</th>
//                         <th>Part_number</th>
//                         <th>Category_ID</th>
//                         <th>Supplier_ID</th>
//                         <th>Status</th>
//                         <th>LCC</th>
//                         <th>YTEOL</th>
//                         <th>Description</th>
//                         <th>Part_introduction</th>
//                         <th>Custom</th>
//                         <th>Client_ID</th>
//                         <th>Hash</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data2.map((item) => (
//                         <tr key={item.id} className={styles.row}>
//                             <td>{item.id}</td>
//                             <td>{item.part_number}</td>
//                             <td>{item.category_id}</td>
//                             <td>{item.supplier_id}</td>
//                             <td>{item.status}</td>
//                             <td>{item.lcc}</td>
//                             <td>{item.yteol}</td>
//                             <td>{item.description}</td>
//                             <td>{item.part_introduction}</td>
//                             <td>{item.custom}</td>
//                             <td>{item.client_id}</td>
//                             <td>{item.description}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
 

import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>DB 테이블</h1>
            <nav>
                <ol>
                    <li>
                        <Link href="/db_categories">Categories</Link>
                    </li>
                    <li>
                        <Link href="/db_categoryhasinfo">Category_has_info</Link>
                    </li>
                    <li>
                        <Link href="/db_part">Part</Link>
                    </li>
                </ol>
            </nav>
        </div>
    );
}
