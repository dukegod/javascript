// 2016-01-13 11:55:51
//快速排序算法
Array.prototype.fastSort = function(){
    var arr = this;
    function sort(left, right, arr){
         if( left >= right){
             return;
         }
         var key = arr[left];
         var i = left;
         var j = right;
         
         while(i < j){
             while(i < j && arr[j] >= key){
                 j--;
             }
             arr[i] = arr[j];
             while(i < j && arr[i] <= key){
                 i++;
             }
             arr[j] = arr[i];
         }
         arr[i] = key;
         sort(left, i - 1, arr);
         sort(i + 1, right, arr);
    }

    sort(0, arr.length - 1, arr);

    return arr;
}


var arr = [12,3,5,7,0,6,55,33,99];
console.log(arr.fastSort());

//  插入排序
Array.prototype.insertSort = function(){
     var arr = this;
     var len = arr.length;
     for(var i = 1; i < len; i ++ ){
         var j = i - 1;
         var tmp = arr[i];
         while(j >= 0 && tmp < arr[j]){
             arr[j + 1] = arr[j];
             j--;
         }
         if(j != i - 1){
             arr[j + 1] = tmp;
         }
     }
     return arr;
 }

//  选择排序
Array.prototype.selectSort = function(){
     var arr = this;
     var len = arr.length;
     var min;
     var tmp;
     for(var i = 0; i < len - 1; i ++ ){
         min = i;
         for(var j = i + 1; j < len; j++){
             if(arr[min] > arr[j]){
                 min = j;
             }
         }
         if(min != i){
             tmp = arr[min];
             arr[min] = arr[i];
             arr[i] = tmp;
         }
     }
     return arr;
 }

// 堆排序
Array.prototype.swap = function(i, j){
    var tmp = this[i];
    this[i] = this[j];
    this[j] = tmp;
}

//大顶堆
Array.prototype.buildMaxHeap = function(){
    for(var i = Math.floor(this.length/2) - 1; i >= 0; i--){
        this.heapAdjust(i, this.length);
    }
};

//调整堆
Array.prototype.heapAdjust = function(i, j){
    var max = i;
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    if(left < j && this[max] < this[left]){
        max = left;
    }                 
    if(right < j && this[max] < this[right]){
        max = right;
    }                 
    if(max != i){
        this.swap(i,max);
        this.heapAdjust(max,j);
    };
}

//堆排序
Array.prototype.heapSort = function(){
    this.buildMaxHeap();
    for(var i = this.length - 1; i >= 0 ; i--){
        this.swap(0, i);
        this.heapAdjust(0, i);
    }
    return this;
};