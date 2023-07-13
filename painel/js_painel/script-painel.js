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

    $(document).ready(function(){
        $('#userCellphone').mask('(00) 00000-0000');
        $('#userBirth').mask('00/00/0000');
        $('#userCPF').mask('000.000.000-00');
        $('#userRG').mask('00.000.000-00');
        $('#adressCEP').mask('00000-000');
    })


})