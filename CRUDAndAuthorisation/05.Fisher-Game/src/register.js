window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', onRegister);

    const logoutButton = document.getElementById('logout');
    logoutButton.style.display='none';
});

async function onRegister(event){
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const passwordRepeat = formData.get('rePass');

    if (password !== passwordRepeat){
        alert('The passwords must match!');
        return;
    }

    try {
        const res = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        if (res.ok != true){
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();
        const userData = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        }

        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = './index.html';

        const token = data.accessToken;

    } catch (error) {
        alert(error.message);
    }
}

function onLogout() {
    sessionStorage.clear();
    window.location = './index.html';
}
