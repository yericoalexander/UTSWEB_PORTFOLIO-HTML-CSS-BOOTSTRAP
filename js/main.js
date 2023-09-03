// Header Scroll (Gulir Header)

// Memilih elemen dengan kelas "navbar" dan menyimpannya dalam variabel "nav"
let nav = document.querySelector(".navbar");

// Ketika halaman di-scroll (menggulir), jalankan fungsi berikut
window.onscroll = function () {
    // Jika posisi gulir vertikal (scrollTop) dokumen lebih dari 20 piksel,
    if (document.documentElement.scrollTop > 20) {
        // Tambahkan kelas "header-scrolled" ke elemen "nav"
        nav.classList.add("header-scrolled");
    } else {
        // Jika tidak, hapus kelas "header-scrolled" dari elemen "nav"
        nav.classList.remove("header-scrolled");
    }
}

// Nav Mobile Hide (Sembunyikan Menu Navigasi Mobile)

// Memilih semua elemen dengan kelas "nav-link" dan menyimpannya dalam variabel "navBar"
let navBar = document.querySelectorAll(".nav-link");

// Memilih elemen dengan kelas "navbar-collapse" dan "collapse" dan menyimpannya dalam variabel "navCollapse"
let navCollapse = document.querySelector(".navbar-collapse.collapse");

// Untuk setiap elemen "a" dalam "navBar", jalankan fungsi berikut
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        // Hapus kelas "show" dari elemen "navCollapse" untuk menyembunyikan menu navigasi mobile
        navCollapse.classList.remove("show");
    })
})
