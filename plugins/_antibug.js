let handler = m => m

handler.all = async function (m) {
    let user = global.db.data.users[m.sender]
    if ((user.money * 1) > 99999999999999) {
    	let money = user.money-99999999999999
        user.money = 99999999999999
        user.bank += money
    } else if ((user.money * 1) < 0) {
        user.money = 0
    }
    if ((user.limit * 1) > 99999999999999) {
    	let limit = user.limit-99999999999999
        user.limit = 99999999999999
        user.exp += limit * 99999999999999
    } else if ((user.limit * 1) < 0) {
        user.limit = 0
    }
    if ((user.health * 1) > 100) {
        user.health = 100
    } else if ((user.health * 1) < 0) {
        user.health = 0
    }
}

export default handler 
