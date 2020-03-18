// console.log(Process)
// console.log(process.argv)
var playerAction = process.argv[process.argv.length - 1]
// console.log(playerAction)

var random = Math.random() * 3    //0-3不包括3

if(random < 1) {
    var computerAction = 'rock'
}   else if (random > 2) {
    var computerAction = 'scissor'
}   else {
    var computerAction = 'paper'
}

if(computerAction == playerAction) {
    console.log(`computerAction:  vs playerAction: `)
    console.log('   '+ computerAction + '          vs         ' + playerAction)
    console.log('平局')
} else if(
    (computerAction === 'rock' && playerAction === 'paper') ||
    (computerAction === 'scissor' && playerAction === 'rock') ||
    (computerAction === 'paper' && playerAction === 'scissor')
) {
    console.log(`computerAction: ${computerAction} vs playerAction: ${playerAction}`)
    console.log('you win')
} else {
    console.log(`computerAction: ${computerAction} vs playerAction: ${playerAction}`)
    console.log('you wasted')
}