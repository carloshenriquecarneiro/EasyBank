const btnMobile = document.querySelector('#btnHamburger');

function openMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}



btnMobile.addEventListener('click', openMenu);


function openModal(modalID) {
   const modal = document.getElementById(modalID);
   modal.classList.add('mostrar')
   modal.addEventListener('click', (e) => {
       if(e.target.id == modalID || e.target.className == 'close')
       modal.classList.remove('mostrar')
   })
}



const btnRequest = document.querySelector('.btnInvite');

btnRequest.addEventListener('click', function() {
    openModal('inviteModal')
})

