document.addEventListener('DOMContentLoaded', function() {

    const btnSidebar = document.getElementById('btn-sidebar')
    const sidebar = document.getElementById('sidebar')

    btnSidebar.addEventListener('click', function() {
        btnSidebar.classList.toggle('btn-sidebar-active')

        sidebar.classList.toggle("sidebar-close")
        sidebar.classList.toggle("sidebar-open")
    })

})