
// input untuk Matakuliah PDP

const Matakuliah=[
    {file:"pdf/pdpn.pdf", nama:"PDB", img:"../img/Pdf.svg"},
    {file:"pdf/pdpn.pdf", nama:"PDP", img:"../img/Pdf.svg"},
    {file:"pdf/pdpn.pdf", nama:"Pemodelan", img:"../img/Pdf.svg"},
    {file:"pdf/pdpn.pdf", nama:"PDP", img:"../img/Pdf.svg"},
    {file:"pdf/pdpn.pdf", nama:"Pemodelan", img:"../img/Pdf.svg"},
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