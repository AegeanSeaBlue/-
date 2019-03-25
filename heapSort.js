let arra = [4, 10, 3, 5, 1, 2];

//交换值
function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

}

//形成稳定二叉堆函数
function heapify(arr, n, i) {
    if (i >= n) {
        return false
    }

    let leftIndex = 2 * i + 1;
    let rightIndex = 2 * i + 2;
    let maxIndex = i;

    if (leftIndex < n && arr[leftIndex] > arr[maxIndex]) {
        maxIndex = leftIndex;
    }
    if (rightIndex < n && arr[rightIndex] > arr[maxIndex]) {
        maxIndex = rightIndex;
    }

    if (maxIndex !== i) {
        swap(arr, maxIndex, i);
        heapify(arr, n, maxIndex)
    }
}

//构建稳定的堆
function buildHeap(arr, n) {
    let parent = (n - 1 - 1) / 2;
    for (let i = parent; i >= 0; i--) {
        heapify(arr, n, i)
    }
}

//堆排序，首尾交换值再构建堆，递归循环
function heapSort(arr, n) {
    buildHeap(arr, n);
    for (let i = n - 1; i >= 0; i--) {
        swap(arr, i, 0);
        heapify(arr, i, 0)
    }
}

function main() {

    heapSort(arra, arra.length);
    console.log(arra)
}

main();

