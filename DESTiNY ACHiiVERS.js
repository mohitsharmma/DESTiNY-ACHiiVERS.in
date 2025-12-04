function calculateLifePath() {
    const birthdate = document.getElementById('birthdate').value;
    const parts = birthdate.split('/');
    if (parts.length !== 3) {
        document.getElementById('result').innerHTML = '<p style="color: red;">Please enter a valid date in MM/DD/YYYY format.</p>';
        return;
    }
    const month = parseInt(parts[0]);
    const day = parseInt(parts[1]);
    const year = parseInt(parts[2]);
    
    if (isNaN(month) || isNaN(day) || isNaN(year) || month < 1 || month > 12 || day < 1 || day > 31 || year < 1900 || year > new Date().getFullYear()) {
        document.getElementById('result').innerHTML = '<p style="color: red;">Invalid date. Please check your input.</p>';
        return;
    }
    
    let sum = month + day + year;
    while (sum > 9) {
        sum = sum.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
    
    const meanings = {
        1: "Independent, ambitious, and a natural leader.",
        2: "Cooperative, diplomatic, and sensitive.",
        3: "Creative, expressive, and optimistic.",
        4: "Practical, hardworking, and reliable.",
        5: "Adventurous, freedom-loving, and versatile.",
        6: "Nurturing, responsible, and harmonious.",
        7: "Analytical, introspective, and spiritual.",
        8: "Ambitious, authoritative, and materialistic.",
        9: "Compassionate, idealistic, and humanitarian."
    };
    
    document.getElementById('result').innerHTML = `<p>Your Life Path Number is <strong>${sum}</strong>.</p><p>${meanings[sum]}</p>`;
}