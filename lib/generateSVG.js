class Circle {
    static generateCircle(data) {
        return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     
     <rect width="300" height="200" fill="white" />
     
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

     <rect width="300" height="200" fill="white" />

  <polygon points="150,20 230,180 70,180" fill="${data.color}" />

  <text x="150" y="125" font-size="40" text-anchor="middle" fill="white">${data.letters}</text>

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

     <rect width="300" height="200" fill="white" />

  <rect x="75" y="25" width="150" height="150" fill="${data.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.letters}</text>

</svg>
`
    }
}


function generateSVG(data) {
    switch (data.shape) {
        case 'Circle':
            return Circle.generateCircle(data);
            break;
        
        case 'Triangle':
            return Triangle.generateTriangle(data);
            break;

        case 'Square':
                return Square.generateSquare(data);
                break;
    }
}

module.exports = generateSVG