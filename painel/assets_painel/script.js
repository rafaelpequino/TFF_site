document.addEventListener('DOMContentLoaded', function() {

    //OPEN NAVBAR
    const btnSidebar = document.getElementById('btn-sidebar')
    const sidebar = document.getElementById('sidebar')

    btnSidebar.addEventListener('click', function() {
        btnSidebar.classList.toggle('btn-sidebar-active')

        sidebar.classList.toggle("sidebar-close")
        sidebar.classList.toggle("sidebar-open")
    })

    //OPEN DROPDOWN USER
    const btnOpenDropdown = document.getElementById('btn-open-dropdown')
    const dropdown = document.getElementById('dropdown')

    btnOpenDropdown.addEventListener('click', function() {
        dropdown.classList.toggle('dropdown-close')
        dropdown.classList.toggle('dropdown-open')
    })



})