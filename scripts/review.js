document.addEventListener('DOMContentLoaded', () => {
    
    if (sessionStorage.getItem('formSubmitted') === 'true') {
        let reviewCount = localStorage.getItem('reviewCount');

        if (reviewCount) {
            reviewCount = parseInt(reviewCount, 10) + 1;
        } else {
            reviewCount = 1;
        }

        localStorage.setItem('reviewCount', reviewCount);
        
        sessionStorage.removeItem('formSubmitted');
    }

    const currentCount = localStorage.getItem('reviewCount') || 0;
    document.getElementById('review-count').textContent = currentCount;

    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
});