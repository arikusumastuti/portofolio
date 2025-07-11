
// input untuk Matakuliah PDP

const Matakuliah=[
    {file:"pdf/pemodelan1.pdf", nama:"pemodelan1", img:"../img/Pdf.svg"},
    {file:"pdf/pemodelan2.pdf", nama:"pemodelan2", img:"../img/Pdf.svg"},
    {file:"pdf/pemodelan3.pdf", nama:"Pemodelan3", img:"../img/Pdf.svg"},
    {file:"pdf/pemodelan4.pdf", nama:"pemodelan4", img:"../img/Pdf.svg"},
    {file:"pdf/buku1.pdf", nama:"buku1", img:"../img/Pdf.svg"},
]
const outputmatakuliah=document.getElementById("data")
let tampil=""

Matakuliah.forEach(item=>{
    // tampil+=`<a href="${item.file}">${item.file} </a>`
    tampil+=`<div class="kanan-dalam">
    <a href="${item.file}" target="_blank"><img src="${item.img}" alt=""></a>
                    <p>
                        ${item.nama}
                    </p> </div>`
                    
})


outputmatakuliah.innerHTML=tampil