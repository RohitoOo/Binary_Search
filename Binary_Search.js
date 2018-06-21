var arr = [ 2, 32, 32, 38, 42, 42, 43, 47, 49, 65, 75, 76, 87, 99 ]

var target = 75;

// Linear Search

arr.forEach((each, i) => {

  if (each === target) {
    console.log("TargetExists at index : " + i)
  } else {
    console.log("Not here at Index : " + i)
  }
})

// Not here at Index : 0
// Not here at Index : 1
// Not here at Index : 2
// Not here at Index : 3
// Not here at Index : 4
// Not here at Index : 5
// Not here at Index : 6
// Not here at Index : 7
// Not here at Index : 8
// Not here at Index : 9
// TargetExists at index : 10
// Not here at Index : 11
// Not here at Index : 12
// Not here at Index : 13

// Binary Search

function binarySeach(arr, target) {

  arr = arr.sort()

  left = 0; // index [ 0 ]

  right = arr.length - 1 // index [ 4 ]

  while (left <= right) {

    middle = Math.floor((left + right) / 2)

    if (target === arr[middle]) {

      return "Target Exist at index : " + middle
    }

    if (target > arr[middle]) {

      left = middle + 1
    } else {
      right = middle - 1
    }

  }
  return "Does not exist in Array"

}

binarySeach(arr, target)

// 'Target Exist at index : 10'
