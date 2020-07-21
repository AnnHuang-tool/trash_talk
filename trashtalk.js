const character = {
  engineer: '工程師',
  designer: '設計師',
  entrepreneur: '老闆'
}
const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}
const phrase = ['很簡單', '很容易', '很快', '很正常']


function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define trashTalk function
function trashTalk(input) {
  if (input.opt === undefind) {
    return 'Please select one character 再選一個職業吧'
  }
  const target = input.opt
  // create a result string to collect ans
  let result = ['身為一個']
  // get target 
  result = result.concat(character[target])
  result.push('，')
  // get task 
  result = result.concat(sample(task[target]))
  result.push('，')
  // get phrase 
  result = result.concat(sample(phrase))
  result.push('吧！')
  return result.join("")
}
module.exports = trashTalk
