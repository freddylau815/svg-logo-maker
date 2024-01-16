class Circle {
    static generateCircle(data) {
        return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${data.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.letters}</text>

</svg>
`
    }
}

class Triangle {
    static generateTriangle(data) {
        return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <polygon points="150,20 230,180 70,180" fill="${data.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.letters}</text>

</svg>
`
    }
}

class Square {
    static generateSquare(data) {
        return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect x="60" y="60" width="180" height="80" fill="${data.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.letters}</text>

</svg>
`
    }
}


function generateSVG(data) {
    switch (data) {
        case 'Circle':
            return Circle.generateCircle(data);
            break;
        
        case 'Triangle':
            return Triangle.generateCircle(data);
            break;

        case 'Square':
                return Circle.generateCircle(data);
                break;
    }
}

module.exports = generateSVG