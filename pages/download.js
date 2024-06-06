import * as XLSX from 'xlsx';

export default function Download() {
  const handleDownload = () => {
    const data = [
      { name: '원경', age: 25 },
      { name: '해인', age: 25 },
      { name: '승현', age: 26 }
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'output.xlsx');
  };

  return (
    <div>
      <h1>엑셀 파일 다운로드</h1>
      <button onClick={handleDownload}>Download Excel</button>
    </div>
  );
}
