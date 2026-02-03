// Câu 1: Constructor function
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng
const products = [
    new Product(1, "iPhone 15 Pro", 28000000, 10, "Smartphones", true),
    new Product(2, "Samsung S24 Ultra", 31000000, 5, "Smartphones", true),
    new Product(3, "MacBook M3", 45000000, 3, "Laptops", true),
    new Product(4, "Chuột Magic Mouse", 2000000, 0, "Accessories", false),
    new Product(5, "Bàn phím cơ", 3500000, 12, "Accessories", true),
    new Product(6, "Ốp lưng iPhone", 500000, 50, "Accessories", true)
];

// --- THỰC THI VÀ HIỂN THỊ ---

// Câu 3: Map
const c3 = products.map(p => `${p.name} (${p.price.toLocaleString()}đ)`);
document.getElementById('res-c3').innerText = c3.join(" | ");

// Câu 4: Filter
const c4 = products.filter(p => p.quantity > 0).map(p => p.name);
document.getElementById('res-c4').innerText = c4.join(", ");

// Câu 5: Some
const c5 = products.some(p => p.price > 30000000);
document.getElementById('res-c5').innerText = c5 ? "Có sản phẩm giá trên 30tr" : "Không có";

// Câu 6: Every
const allAccSelling = products.filter(p => p.category === "Accessories").every(p => p.isAvailable);
document.getElementById('res-c6').innerText = allAccSelling ? "Tất cả đang bán" : "Có sản phẩm ngừng bán";

// Câu 7: Reduce
const totalValue = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
document.getElementById('res-c7').innerText = totalValue.toLocaleString() + " VND";

// Câu 8: Duyệt for...of và in ra bảng
const tableBody = document.getElementById('table-c2-c8');
for (const p of products) {
    tableBody.innerHTML += `
        <tr>
            <td>${p.name}</td>
            <td>${p.category}</td>
            <td class="status-${p.isAvailable}">${p.isAvailable ? 'Đang bán' : 'Ngừng bán'}</td>
        </tr>`;
}

// Câu 9: Duyệt for...in
let firstItem = products[0];
let c9Text = "";
for (const key in firstItem) {
    if (typeof firstItem[key] !== 'function') {
        c9Text += `${key}: ${firstItem[key]} <br>`;
    }
}
document.getElementById('res-c9').innerHTML = c9Text;

// Câu 10: Lọc và lấy tên
const c10 = products.filter(p => p.isAvailable && p.quantity > 0).map(p => p.name);
document.getElementById('res-c10').innerText = c10.join(" - ");
