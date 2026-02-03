/**
 * BÀI TẬP QUẢN LÝ SẢN PHẨM
 * Chuyên ngành: Công nghệ phần mềm
 */

// === Câu 1: Khai báo constructor function Product ===
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// === Câu 2: Khởi tạo mảng products (Ít nhất 6 sản phẩm, 2 danh mục) ===
const products = [
    new Product(1, "iPhone 15 Pro", 28000000, 10, "Smartphones", true),
    new Product(2, "Samsung S24 Ultra", 31000000, 5, "Smartphones", true),
    new Product(3, "MacBook M3 Pro", 55000000, 3, "Laptops", true),
    new Product(4, "Chuột Magic Mouse", 2500000, 0, "Accessories", false),
    new Product(5, "Bàn phím Cơ Keychron", 3500000, 12, "Accessories", true),
    new Product(6, "Ốp lưng Magsafe", 1200000, 50, "Accessories", true)
];

// === CHỨC NĂNG HIỂN THỊ LÊN GIAO DIỆN (UI) ===
const tableBody = document.getElementById('product-table-body');

function renderTable(data) {
    tableBody.innerHTML = ""; // Xóa dữ liệu cũ trước khi vẽ lại
    data.forEach(p => {
        const row = `
            <tr>
                <td>${p.id}</td>
                <td>${p.name}</td>
                <td>${p.price.toLocaleString()}</td>
                <td>${p.quantity}</td>
                <td>${p.category}</td>
                <td class="${p.isAvailable ? 'status-on' : 'status-off'}">
                    ${p.isAvailable ? 'Đang bán' : 'Ngừng bán'}
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Gọi hàm hiển thị lần đầu
renderTable(products);

// === Câu 3: Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm ===
const namesAndPrices = products.map(p => ({ name: p.name, price: p.price }));
console.log("Câu 3 - Tên và Giá:", namesAndPrices);

// === Câu 4: Lọc ra các sản phẩm còn hàng (quantity > 0) ===
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4 - Sản phẩm còn hàng:", inStockProducts);

// === Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không ===
const hasExpensiveProduct = products.some(p => p.price > 30000000);
document.getElementById('expensive-check').innerText = hasExpensiveProduct ? "Có sản phẩm > 30tr" : "Không có";
console.log("Câu 5 - Có sp > 30tr không?", hasExpensiveProduct);

// === Câu 6: Kiểm tra tất cả sản phẩm thuộc danh mục "Accessories" có đang bán không ===
const accessoriesSelling = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable);
document.getElementById('acc-status').innerText = accessoriesSelling ? "Tất cả đang bán" : "Có sản phẩm ngừng bán";
console.log("Câu 6 - Tất cả Accessories đang bán?", accessoriesSelling);

// === Câu 7: Tính tổng giá trị kho hàng (Giá trị kho = price * quantity) ===
const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
document.getElementById('total-value').innerText = totalInventoryValue.toLocaleString();
console.log("Câu 7 - Tổng giá trị kho:", totalInventoryValue);

// === Câu 8: Dùng for...of Duyệt mảng products và in ra: Tên - Danh mục - Trạng thái ===
console.log("--- Câu 8: Duyệt danh sách (for...of) ---");
for (const p of products) {
    let status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${p.name} - ${p.category} - ${status}`);
}

// === Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị tương ứng ===
console.log("--- Câu 9: Chi tiết sản phẩm (for...in) ---");
let sampleProduct = products[0]; // Lấy sản phẩm đầu tiên làm mẫu
for (const key in sampleProduct) {
    if (typeof sampleProduct[key] !== 'function') {
        console.log(`${key}: ${sampleProduct[key]}`);
    }
}

// === Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng ===
const availableProductNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log("Câu 10 - Tên sp đang bán & còn hàng:", availableProductNames);