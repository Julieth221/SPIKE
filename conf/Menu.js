document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.sidebar .menu-item');
  const subMenus = document.querySelectorAll('.sidebar .sub-menu');

  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const subMenu = item.closest('li').querySelector('.sub-menu');

      if (subMenu) {
        // Toggle submenu
        subMenu.classList.toggle('active');
        item.classList.toggle('active');

        // Close other submenus
        subMenus.forEach(menu => {
          if (menu !== subMenu) {
            menu.classList.remove('active');
            menu.previousElementSibling.classList.remove('active');
          }
        });
      } else {
        // Remove active class from all items and submenus
        menuItems.forEach(menuItem => menuItem.classList.remove('active'));
        subMenus.forEach(menu => menu.classList.remove('active'));

        // Add active class to clicked item
        item.classList.add('active');
      }
    });
  });
});

function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('open');
}