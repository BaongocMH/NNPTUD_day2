async function getData() {
    try {
        let res = await fetch('http://localhost:3000/posts');
        let posts = await res.json();
        let body = document.getElementById('table_body');
        body.innerHTML = '';
        for (const post of posts) {
            const isDeleted = post.isDeleted === true;
            const trStyle = isDeleted ? "style=\"text-decoration: line-through; opacity: 0.6;\"" : "";
            body.innerHTML += `<tr ${trStyle}>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.views}</td>
                <td><input type='submit' value='Delete' onclick='Delete(${post.id})' ${isDeleted ? 'disabled' : ''}></td>
            </tr>`
        }
    } catch (error) {
        console.log(error);
    }
}
async function Save() {
    let id = document.getElementById('txt_id').value.trim();
    let title = document.getElementById('txt_title').value;
    let views = document.getElementById('txt_views').value;

    // Tạo mới: ID để trống -> tự tăng maxId + 1
    if (!id) {
        const resAll = await fetch('http://localhost:3000/posts');
        const posts = await resAll.json();
        const maxId = posts.length ? Math.max(...posts.map(p => Number(p.id) || 0)) : 0;
        const newId = maxId + 1;

        let res = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: newId,
                title: title,
                views: Number(views) || 0,
                isDeleted: false
            })
        })
        if (res.ok) {
            console.log("tao moi thanh cong");
            await getData();
        }
        return;
    }

    // Edit: có ID và tồn tại
    let getItem = await fetch('http://localhost:3000/posts/' + id);
    if (getItem.ok) {
        // PATCH để không làm mất field isDeleted
        let res = await fetch('http://localhost:3000/posts/' + id, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                views: Number(views) || 0
            })
        })
        if (res.ok) {
            console.log("cap nhat thanh cong");
            await getData();
        }
    } else {
        console.log("Khong tim thay ID de sua. Neu tao moi hay bo trong ID.");
    }
}
async function Delete(id) {
    // Xóa mềm: set isDeleted=true
    let res = await fetch('http://localhost:3000/posts/' + id, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ isDeleted: true })
    })
    if (res.ok) {
        console.log("xoa mem thanh cong");
        await getData();
    }
}
getData();

