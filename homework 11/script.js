
async function getRandomChinese(length){
    let result = "";
while(length > 0){
    length --
    const sign = Date.now().toString().slice(-5);
    result += String.fromCharCode(sign);
    await new Promise(resolve => setTimeout(() => resolve(),50) )
    }
    console.log(result)
}
getRandomChinese(4)