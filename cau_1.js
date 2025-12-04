let n = parseInt(prompt("Nhập số lượng phần tử (1 đến 50):")) ;
if (n > 0 && n <= 50 && n % 1 === 0) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let gia_tri = parseInt(prompt("Nhập phần tử thứ " + i + ":"));
        arr.push(gia_tri);
    }
    console.log("Mảng đã nhập:", arr);
    let tong = 0;
    let so_dem = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0 && arr[i] % 2 !== 0) {
            tong += arr[i];
            so_dem++;
        }
    }
    if (so_dem === 0) {
        alert("Không có số lẻ ở vị trí chẵn.");
    } else {
        let trung_binh = tong / so_dem;
        alert("Trung bình cộng các số lẻ ở vị trí chẵn là: " + trung_binh);
    }
} else {
    alert("Giá trị n không hợp lệ. Vui lòng nhập số nguyên từ 1 đến 50.");
}