document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    fetch('https://formspree.io/f/xldegbgl', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('errorMessage').style.display = 'none';
            this.reset();
        } else {
            document.getElementById('successMessage').style.display = 'none';
            document.getElementById('errorMessage').style.display = 'block';
        }
    })
    .catch(error => {
        document.getElementById('successMessage').style.display = 'none';
        document.getElementById('errorMessage').style.display = 'block';
    });
});
