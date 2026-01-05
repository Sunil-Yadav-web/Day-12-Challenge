const ascendingOrderArrayInput = document.querySelector(
  '.ascending-order-array'
)
const ascendingOrderArrayOutput = document.querySelector(
  '.ascending-order-array-output'
)
const descendingOrderArrayInput = document.querySelector(
  '.descending-order-array'
)
const descendingOrderArrayOutput = document.querySelector(
  '.descending-order-array-output'
)
const alphabetOrderStrInput = document.querySelector('.alphabet-order-string')
const alphabetOrderStrOutput = document.querySelector(
  '.alphabet-order-string-output'
)
const countSwapArrayInput = document.querySelector('.count-swap-array')
const countSwapArrayOutput = document.querySelector('.count-swap-array-output')
const sortObjArrayInput = document.querySelector('.sort-object-array')
const sortObjArrayOutput = document.querySelector('.sort-object-array-output')
const keepZeroEndInput = document.querySelector('.keep-zero-end')
const keepZeroEndOutput = document.querySelector('.keep-zero-end-output')
const sortCountComparisonInput = document.querySelector(
  '.sort-count-comparison'
)
const sortCountComparisonOutput = document.querySelector(
  '.sort-count-comparison-output'
)
const sortCharacterInput = document.querySelector('.sort-character')
const sortCharacterOutput = document.querySelector('.sort-character-output')
const sort2DArrayInput = document.querySelector('.sort-2D-array')
const sort2DArrayOutput = document.querySelector('.sort-2D-array-output')
const sortToKInput = document.querySelector('.sort-to-k')
const sortToK2Input = document.querySelector('.sort-to-k2')
const sortToKOutput = document.querySelector('.sort-to-k-output')
const sortEvenNumberInput = document.querySelector('.sort-even-number')
const sortEvenNumberOutput = document.querySelector('.sort-even-number-output')
const sortByLengthInput = document.querySelector('.sort-by-length')
const sortByLengthOutput = document.querySelector('.sort-by-length-output')

function ascendingOrderArray(input) {
  let arr = input.trim().split(' ')
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (+arr[j] > +arr[j + 1]) {
        let largest = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = largest
      }
    }
  }
  ascendingOrderArrayOutput.innerHTML = arr
}

ascendingOrderArrayInput.addEventListener('input', (e) => {
  ascendingOrderArray(e.target.value)
})

function descendingOrderArray(input) {
  let arr = input.trim().split(' ')
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (+arr[j] < +arr[j + 1]) {
        let largest = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = largest
      }
    }
  }
  descendingOrderArrayOutput.innerHTML = arr
}

descendingOrderArrayInput.addEventListener('input', (e) => {
  descendingOrderArray(e.target.value)
})

function alphabetOrderString(str) {
  let input = str.toLowerCase().split('')
  const n = input.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (input[j].charCodeAt() > input[j + 1].charCodeAt()) {
        let largest = input[j]
        input[j] = input[j + 1]
        input[j + 1] = largest
      }
    }
  }
  alphabetOrderStrOutput.innerHTML = input.join('')
}

alphabetOrderStrInput.addEventListener('input', (e) => {
  alphabetOrderString(e.target.value)
})

function countSwapArray(str) {
  let input = str.trim().split(' ')
  const n = input.length
  let count = 0
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (+input[j] > +input[j + 1]) {
        let largest = input[j]
        input[j] = input[j + 1]
        input[j + 1] = largest
        count++
      }
    }
  }
  countSwapArrayOutput.innerHTML = `Array:${input} <br> Count:${count}`
}

countSwapArrayInput.addEventListener('input', (e) => {
  countSwapArray(e.target.value)
})

function sortObjArray(input) {
  let arr = JSON.parse(input)
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j].age > arr[j + 1].age) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  sortObjArrayOutput.innerHTML = JSON.stringify(arr)
}

sortObjArrayInput.addEventListener('input', () => {
  sortObjArray(sortObjArrayInput.value)
})

function keepZeroEnd(input) {
  let arr = input.trim().split(' ')
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (+arr[j] !== 0 && +arr[j + 1] !== 0) {
        if (arr[j] > arr[j + 1]) {
          ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      } else if (+arr[j] === 0 && +arr[j + 1] !== 0) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  keepZeroEndOutput.innerHTML = arr
}

keepZeroEndInput.addEventListener('input', (e) => {
  keepZeroEnd(e.target.value)
})

function sortCountComparison(str) {
  let input = str.trim().split(' ')
  const n = input.length
  let countComparison = 0
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      countComparison++
      if (+input[j] > +input[j + 1]) {
        let largest = input[j]
        input[j] = input[j + 1]
        input[j + 1] = largest
      }
    }
  }
  sortCountComparisonOutput.innerHTML = `Array:${input} <br> ComparisonCount:${countComparison}`
}

sortCountComparisonInput.addEventListener('input', (e) => {
  sortCountComparison(e.target.value)
})

function sortCharacter(input) {
  let arr = input.trim().split(' ')
  const sortedArray = arr.sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  )
  sortCharacterOutput.innerHTML = sortedArray
}

sortCharacterInput.addEventListener('input', (e) => {
  sortCharacter(e.target.value)
})

function sort2DArray(input) {
  let arr = JSON.parse(input)
  let n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  sort2DArrayOutput.innerHTML = JSON.stringify(arr)
}

sort2DArrayInput.addEventListener('input', () => {
  sort2DArray(sort2DArrayInput.value)
})

function sortTok(input, k) {
  let arr = input.trim().split(' ')
  const n = arr.length
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (+arr[j] > +arr[j + 1]) {
        let largest = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = largest
      }
    }
  }
  sortToKOutput.innerHTML = arr
}

sortToKInput.addEventListener('input', () => {
  sortTok(sortToKInput.value, sortToK2Input.value)
})

sortToK2Input.addEventListener('input', () => {
  sortTok(sortToKInput.value, sortToK2Input.value)
})

function sortEvenNumber(input) {
  let arr = input.trim().split(' ')
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (+arr[j] % 2 === 0 && +arr[j + 1] % 2 === 0) {
        if (+arr[j] > +arr[j + 1]) {
          let largest = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = largest
        }
      }
    }
  }
  sortEvenNumberOutput.innerHTML = arr
}

sortEvenNumberInput.addEventListener('input', (e) => {
  sortEvenNumber(e.target.value)
})

function sortByLength(input) {
  let arr = input.trim().split(' ')
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j].length > arr[j + 1].length) {
        let largest = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = largest
      }
    }
  }
  sortByLengthOutput.innerHTML = arr.join(' ')
}

sortByLengthInput.addEventListener('input', (e) => {
  sortByLength(e.target.value)
})
