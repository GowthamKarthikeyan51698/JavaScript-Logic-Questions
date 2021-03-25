// roots of quadratic equation

function Quad_eqn(x, y, z){
    let dis, root1, root2, real, img;
    dis = ((y*y) - (4*x*z));
    if(dis > 0){
        root1 = (-y + Math.sqrt(dis)) / (2*x);
        root2 = (-y - Math.sqrt(dis)) / (2*x);
        console.log(`the roots of quadratic equation are ${root1} and ${root2}`);
    } else if(det === 0){
        root1 = -y/(2 * x);
        root2 = -y/(2 * x);
        console.log(`the roots of quadratic equation are ${root1} and ${root2}`);
    } else {
        real = (-y/(2 * x)).toFixed(2);
        img = (Math.sqrt(-dis)/ (2*x)).toFixed(2);
        console.log(`the roots of quadratic equation are ${root1} and ${root2}`);
    }
}

let x=1, y=-6, z=5;
Quad_eqn(x, y, z);
