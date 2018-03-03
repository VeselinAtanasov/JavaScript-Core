
function modifier(obj) {
    if(obj.hasOwnProperty('handsShaking') && obj['handsShaking']){
        let amount=0.1 * obj['weight'] * obj['experience'];
        obj['bloodAlcoholLevel']+=amount;
        obj['handsShaking'] =false;
    }
    return obj;
}

console.log(modifier({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }
));