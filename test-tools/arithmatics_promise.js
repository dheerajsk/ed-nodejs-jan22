
exports.add = (num1, num2)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(num1+num2)}, 4000);
    });
}

exports.sub = (num1, num2)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(num1-num2)}, 1000);
    });
}